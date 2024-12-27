interface Props {
  fill?: string;
  size?: string;
}

const CameraIcon = ({ fill = "#F0F0EE", size = "48" }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="none"
      version="1.1"
      width={size}
      height={size}
      viewBox="0 0 48 48"
    >
      <defs>
        <clipPath id="master_svg0_10_8222/10_7693">
          <rect x="0" y="0" width={size} height={size} rx="0" />
        </clipPath>
      </defs>
      <g clipPath="url(#master_svg0_10_8222/10_7693)">
        <g>
          <g>
            <path
              d="M10,10L26,10L30,6L38,6C40.2,6,42,7.8,42,10L42,38C42,40.2091,40.2091,42,38,42L10,42C7.79086,42,6,40.2091,6,38L6,14C6,11.79086,7.79086,10,10,10ZM10,38L10,14L38,14L38,38L10,38Z"
              fillRule="evenodd"
              fill={fill}
              fillOpacity="1"
            />
          </g>
          <g>
            <path
              d="M24,34Q24.19639,34,24.39254,33.9904Q24.58869,33.9807,24.78414,33.9615Q24.97958,33.9422,25.17384,33.913399999999996Q25.36811,33.8846,25.56072,33.8463Q25.75334,33.808,25.94384,33.7602Q26.1343,33.7125,26.3223,33.6555Q26.510199999999998,33.5985,26.6951,33.5324Q26.880000000000003,33.4662,27.061500000000002,33.391Q27.2429,33.3159,27.4204,33.231899999999996Q27.598,33.1479,27.7712,33.0554Q27.9444,32.9628,28.1128,32.8618Q28.2813,32.7609,28.4446,32.6518Q28.6079,32.5426,28.7656,32.4257Q28.923299999999998,32.3087,29.0751,32.1841Q29.227,32.0595,29.372500000000002,31.927599999999998Q29.518,31.7957,29.6569,31.6569Q29.7957,31.518,29.927599999999998,31.372500000000002Q30.0595,31.227,30.1841,31.0751Q30.3087,30.923299999999998,30.4257,30.7656Q30.5426,30.6079,30.6518,30.4446Q30.7609,30.2813,30.861800000000002,30.1128Q30.9628,29.9444,31.0554,29.7712Q31.1479,29.598,31.2319,29.4204Q31.3159,29.2429,31.391,29.061500000000002Q31.4662,28.880000000000003,31.532400000000003,28.6951Q31.5985,28.510199999999998,31.6555,28.3223Q31.7125,28.1343,31.760199999999998,27.94384Q31.808,27.75334,31.8463,27.56072Q31.8846,27.36811,31.9134,27.17384Q31.9422,26.97958,31.9615,26.78414Q31.9807,26.58869,31.9904,26.39254Q32,26.19639,32,26Q32,25.80361,31.9904,25.60746Q31.9807,25.41131,31.9615,25.21586Q31.9422,25.02042,31.9134,24.82616Q31.8846,24.63189,31.8463,24.43928Q31.808,24.24666,31.760199999999998,24.05616Q31.7125,23.86565,31.6555,23.67772Q31.5985,23.48979,31.532400000000003,23.30488Q31.4662,23.119970000000002,31.391,22.93853Q31.3159,22.757089999999998,31.2319,22.57956Q31.1479,22.40203,31.0554,22.228830000000002Q30.9628,22.05563,30.861800000000002,21.88718Q30.7609,21.71873,30.6518,21.55544Q30.5426,21.39215,30.4257,21.23441Q30.3087,21.07666,30.1841,20.92485Q30.0595,20.77304,29.927599999999998,20.62753Q29.7957,20.48201,29.6569,20.34315Q29.518,20.20428,29.372500000000002,20.07239Q29.227,19.9405,29.0751,19.81592Q28.923299999999998,19.69133,28.7656,19.57434Q28.6079,19.457349999999998,28.4446,19.34824Q28.2813,19.23914,28.1128,19.13817Q27.9444,19.03721,27.7712,18.94463Q27.598,18.852053,27.4204,18.768086Q27.2429,18.684118,27.061500000000002,18.608964Q26.880000000000003,18.533809,26.6951,18.467647Q26.510199999999998,18.401486,26.3223,18.344477Q26.1343,18.287469,25.94384,18.23975Q25.75334,18.192031,25.56072,18.153718Q25.36811,18.115404,25.17384,18.0865879Q24.97958,18.0577717,24.78414,18.0385222Q24.58869,18.0192727,24.39254,18.00963635Q24.19639,18,24,18Q23.80361,18,23.60746,18.00963635Q23.41131,18.0192727,23.21586,18.0385222Q23.02042,18.0577717,22.82616,18.0865879Q22.63189,18.115404,22.43928,18.153718Q22.24666,18.192031,22.05616,18.23975Q21.86565,18.287469,21.67772,18.344477Q21.48979,18.401486,21.30488,18.467647Q21.119970000000002,18.533809,20.93853,18.608964Q20.757089999999998,18.684118,20.57956,18.768086Q20.40203,18.852053,20.228830000000002,18.94463Q20.05563,19.03721,19.88718,19.13817Q19.71873,19.23914,19.55544,19.34824Q19.39215,19.457349999999998,19.23441,19.57434Q19.07666,19.69133,18.92485,19.81592Q18.77304,19.9405,18.62753,20.07239Q18.48201,20.20428,18.34315,20.34315Q18.20428,20.48201,18.07239,20.62753Q17.9405,20.77304,17.81592,20.92485Q17.69133,21.07666,17.57434,21.23441Q17.457349999999998,21.39215,17.34824,21.55544Q17.23914,21.71873,17.13817,21.88718Q17.03721,22.05563,16.94463,22.228830000000002Q16.852053,22.40203,16.768086,22.57956Q16.684118,22.757089999999998,16.608964,22.93853Q16.533809,23.119970000000002,16.467647,23.30488Q16.401486,23.48979,16.344477,23.67772Q16.287469,23.86565,16.23975,24.05616Q16.192031,24.24666,16.153718,24.43928Q16.115404,24.63189,16.0865879,24.82616Q16.0577717,25.02042,16.0385222,25.21586Q16.0192727,25.41131,16.00963635,25.60746Q16,25.80361,16,26Q16,26.19639,16.00963635,26.39254Q16.0192727,26.58869,16.0385222,26.78414Q16.0577717,26.97958,16.0865879,27.17384Q16.115404,27.36811,16.153718,27.56072Q16.192031,27.75334,16.23975,27.94384Q16.287469,28.1343,16.344477,28.3223Q16.401486,28.510199999999998,16.467647,28.6951Q16.533809,28.880000000000003,16.608964,29.061500000000002Q16.684118,29.2429,16.768086,29.4204Q16.852053,29.598,16.94463,29.7712Q17.03721,29.9444,17.13817,30.1128Q17.23914,30.2813,17.34824,30.4446Q17.457349999999998,30.6079,17.57434,30.7656Q17.69133,30.923299999999998,17.81592,31.0751Q17.9405,31.227,18.07239,31.372500000000002Q18.20428,31.518,18.34315,31.6569Q18.48201,31.7957,18.62753,31.927599999999998Q18.77304,32.0595,18.92485,32.1841Q19.07666,32.3087,19.23441,32.4257Q19.39215,32.5426,19.55544,32.6518Q19.71873,32.7609,19.88718,32.8618Q20.05563,32.9628,20.228830000000002,33.0554Q20.40203,33.1479,20.57956,33.231899999999996Q20.757089999999998,33.3159,20.93853,33.391Q21.119970000000002,33.4662,21.30488,33.5324Q21.48979,33.5985,21.67772,33.6555Q21.86565,33.7125,22.05616,33.7602Q22.24666,33.808,22.43928,33.8463Q22.63189,33.8846,22.82616,33.913399999999996Q23.02042,33.9422,23.21586,33.9615Q23.41131,33.9807,23.60746,33.9904Q23.80361,34,24,34ZM24,30Q24.19651,30,24.39207,29.9807Q24.58763,29.9615,24.78036,29.923099999999998Q24.97309,29.8848,25.16114,29.8278Q25.34918,29.770699999999998,25.53073,29.6955Q25.71228,29.6203,25.88559,29.5277Q26.0589,29.4351,26.2223,29.3259Q26.3857,29.2167,26.537599999999998,29.092Q26.689500000000002,28.967399999999998,26.828400000000002,28.828400000000002Q26.967399999999998,28.689500000000002,27.092,28.537599999999998Q27.2167,28.3857,27.3259,28.2223Q27.4351,28.0589,27.5277,27.88559Q27.6203,27.71228,27.6955,27.53073Q27.770699999999998,27.34918,27.8278,27.16114Q27.8848,26.97309,27.923099999999998,26.78036Q27.9615,26.58763,27.9807,26.39207Q28,26.19651,28,26Q28,25.80349,27.9807,25.60793Q27.9615,25.41237,27.923099999999998,25.21964Q27.8848,25.02691,27.8278,24.83886Q27.770699999999998,24.65082,27.6955,24.46927Q27.6203,24.28772,27.5277,24.11441Q27.4351,23.941110000000002,27.3259,23.777720000000002Q27.2167,23.61433,27.092,23.46243Q26.967399999999998,23.31052,26.828400000000002,23.17157Q26.689500000000002,23.03262,26.537599999999998,22.90796Q26.3857,22.78329,26.2223,22.674120000000002Q26.0589,22.56495,25.88559,22.47231Q25.71228,22.37968,25.53073,22.304479999999998Q25.34918,22.22928,25.16114,22.172240000000002Q24.97309,22.1152,24.78036,22.07686Q24.58763,22.03852,24.39207,22.01926Q24.19651,22,24,22Q23.80349,22,23.60793,22.01926Q23.41237,22.03852,23.21964,22.07686Q23.02691,22.1152,22.83886,22.172240000000002Q22.65082,22.22928,22.46927,22.304479999999998Q22.28772,22.37968,22.11441,22.47231Q21.941110000000002,22.56495,21.777720000000002,22.674120000000002Q21.61433,22.78329,21.46243,22.90796Q21.31052,23.03262,21.17157,23.17157Q21.03262,23.31052,20.90796,23.46243Q20.78329,23.61433,20.674120000000002,23.777720000000002Q20.56495,23.941110000000002,20.47231,24.11441Q20.37968,24.28772,20.304479999999998,24.46927Q20.22928,24.65082,20.172240000000002,24.83886Q20.1152,25.02691,20.07686,25.21964Q20.03852,25.41237,20.01926,25.60793Q20,25.80349,20,26Q20,26.19651,20.01926,26.39207Q20.03852,26.58763,20.07686,26.78036Q20.1152,26.97309,20.172240000000002,27.16114Q20.22928,27.34918,20.304479999999998,27.53073Q20.37968,27.71228,20.47231,27.88559Q20.56495,28.0589,20.674120000000002,28.2223Q20.78329,28.3857,20.90796,28.537599999999998Q21.03262,28.689500000000002,21.17157,28.828400000000002Q21.31052,28.967399999999998,21.46243,29.092Q21.61433,29.2167,21.777720000000002,29.3259Q21.941110000000002,29.4351,22.11441,29.5277Q22.28772,29.6203,22.46927,29.6955Q22.65082,29.770699999999998,22.83886,29.8278Q23.02691,29.8848,23.21964,29.923099999999998Q23.41237,29.9615,23.60793,29.9807Q23.80349,30,24,30Z"
              fillRule="evenodd"
              fill={fill}
              fillOpacity="1"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default CameraIcon;
