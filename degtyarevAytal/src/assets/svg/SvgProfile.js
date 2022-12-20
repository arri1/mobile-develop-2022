import * as React from "react"
import Svg, { G, Path, Defs } from "react-native-svg"

export const SvgProfile = props => {
  return (
    <Svg class='profile'
    width={28}
    height={31}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#a)" fill="#292D32">
      <Path d="M14 12.75c-3.17 0-5.75-2.58-5.75-5.75S10.83 1.25 14 1.25 19.75 3.83 19.75 7s-2.58 5.75-5.75 5.75Zm0-10A4.26 4.26 0 0 0 9.75 7 4.26 4.26 0 0 0 14 11.25 4.26 4.26 0 0 0 18.25 7 4.26 4.26 0 0 0 14 2.75ZM22.59 22.75c-.41 0-.75-.34-.75-.75 0-3.45-3.52-6.25-7.84-6.25S6.16 18.55 6.16 22c0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-4.27 4.19-7.75 9.34-7.75 5.15 0 9.34 3.48 9.34 7.75 0 .41-.34.75-.75.75Z" />
    </G>
    <Defs></Defs>
  </Svg>
  );
};

export default SvgProfile;
