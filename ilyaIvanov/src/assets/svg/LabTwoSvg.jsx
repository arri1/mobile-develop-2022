import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

export const LabTwoSvg = (props) => (
    <Svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props}>
        <G fill="none" fillRule="evenodd">
            <Path
                fill="#FFF"
                fillOpacity={0.01}
                fillRule="nonzero"
                d="M0 0h24v24H0z"
            />
            <Path
                d="M2.5 3.5A1.5 1.5 0 0 1 4 2h12a1.5 1.5 0 0 1 1.5 1.5V22H4a1.5 1.5 0 0 1-1.5-1.5v-17ZM17.5 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8.5A1.5 1.5 0 0 1 20 22h-2.5V12Z"
                stroke="#212121"
                strokeLinejoin="round"
                strokeWidth={2}
            />
            <Path
                stroke="#212121"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.5 6h4M5.5 9.5h6"
            />
        </G>
    </Svg>
)

