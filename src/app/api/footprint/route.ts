import { NextResponse } from "next/server";

import { auth } from "@/auth";
import { prisma } from "@/prisma";

export async function GET() {
  try {
    const session = await auth();

    // Prisma를 사용하여 footprints 조회
    const userWithFootprints = await prisma.user.findUnique({
      where: { id: session?.user?.id },
      include: { footprints: true },
    });

    if (!userWithFootprints) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(userWithFootprints.footprints);
  } catch {
    return NextResponse.json(
      { message: "Failed to fetch footprints" },
      { status: 500 },
    );
  }
}
export async function POST(req: Request) {
  try {
    const session = await auth();
    const { title, latitude, longitude } = await req.json();

    if (!title || latitude === undefined || longitude === undefined) {
      return NextResponse.json(
        { message: "발자국을 저장하는데 필요한 정보가 포함되지 않았습니다." },
        { status: 400 },
      );
    }

    const newFootprint = await prisma.footprint.create({
      data: {
        title,
        latitude,
        longitude,
        user: { connect: { id: session?.user?.id } },
      },
    });

    return NextResponse.json(newFootprint, { status: 201 });
  } catch {
    return NextResponse.json(
      { message: "발자국 찍기에 실패했습니다." },
      { status: 500 },
    );
  }
}
