import * as React from "react"
import Svg, { G, Path, Circle } from "react-native-svg"

export const SvgBack = (props) => {
    return(
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h24v24H0z" />
      <G fill="#2CBD3E" transform="translate(1 1)">
        <Circle cx={11} cy={11} r={9} fillOpacity={0.24} />
        <Path
          fillRule="nonzero"
          d="M8.414 10H16a1 1 0 0 1 0 2H8.414l2.293 2.293a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 1.414L8.414 10ZM11 22C4.925 22 0 17.075 0 11S4.925 0 11 0s11 4.925 11 11-4.925 11-11 11Zm0-2a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
        />
      </G>
    </G>
  </Svg>
);
};


