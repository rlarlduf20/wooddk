"use client";

import { useEffect, useState, useRef } from "react";

import {
  DEFAULT_LATITUDE,
  DEFAULT_LONGITUDE,
  DEFAULT_ZOOM,
} from "../_constants";

interface LocationType {
  latitude: number;
  longitude: number;
}

const useGeoLocation = () => {
  const [location, setLocation] = useState<LocationType>({
    latitude: DEFAULT_LATITUDE,
    longitude: DEFAULT_LONGITUDE,
  });
  const [isTracking, setIsTracking] = useState(false);

  const mapRef = useRef<naver.maps.Map | null>(null);
  const watchIdRef = useRef<number | null>(null);
  const polylineRef = useRef<naver.maps.Polyline | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.ReactNativeWebView) {
      alert("웹뷰입니다!!");
      // 웹뷰에서 위치정보 동의 받고 현재 위치받아오기
      window.ReactNativeWebView.postMessage(
        JSON.stringify({ type: "REQUEST_GPS_PERMISSIONS" }),
      );
      return;
    }
    alert("웹페이지입니다!!");

    const { geolocation } = navigator;
    if (!geolocation) return;

    geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({
          latitude,
          longitude,
        });
      },
      () => {
        alert("위치 기반 미동의로 현재 위치가 반영되지 않습니다.");
      },
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 },
    );
  }, []);

  useEffect(() => {
    if (!mapRef.current || typeof naver === "undefined") return;
    if (!polylineRef.current) return;

    const currentPath: naver.maps.Point[] = [];
    polylineRef.current.getPath().forEach((point) => {
      currentPath.push(point);
    });

    const newPath = [
      ...currentPath,
      new naver.maps.LatLng(location.latitude, location.longitude), // 새 위치 추가
    ];
    polylineRef.current.setPath(newPath);

    const newCenter = new naver.maps.LatLng(
      location.latitude,
      location.longitude,
    );
    mapRef.current.setCenter(newCenter);
  }, [location]);

  const handleScriptLoad = () => {
    const mapOptions = {
      center: new naver.maps.LatLng(location.latitude, location.longitude),
      zoom: DEFAULT_ZOOM,
    };
    mapRef.current = new naver.maps.Map("map", mapOptions);

    polylineRef.current = new naver.maps.Polyline({
      map: mapRef.current,
      path: [],
      strokeColor: "#5347AA",
      strokeWeight: 5,
    });
  };

  const startTracking = () => {
    const { geolocation } = navigator;
    if (geolocation && !watchIdRef.current) {
      watchIdRef.current = geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        () => {
          alert("위치 기반 동의가 되어있지 않습니다.");
        },
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 },
      );
      setIsTracking(true);
    }
  };

  const stopTracking = () => {
    if (watchIdRef.current !== null) {
      navigator.geolocation.clearWatch(watchIdRef.current);
      watchIdRef.current = null;
      setIsTracking(false);
    }
  };

  return {
    handleScriptLoad,
    startTracking,
    stopTracking,
    isTracking,
    location,
  };
};

export default useGeoLocation;
