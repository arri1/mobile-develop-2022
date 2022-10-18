import * as React from "react"
import Svg, { G, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

export const LabOneSvg = (props) => (
    <Svg width={48} height={48} xmlns="http://www.w3.org/2000/svg" {...props}>
        <G fill="none" fillRule="evenodd" strokeLinecap="round">
            <Path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
            <G stroke="#000" strokeWidth={2.5}>
                <G strokeLinejoin="round">
                    <Path d="M15 26V15a3 3 0 1 1 6 0v11" />
                    <Path d="M39 25v6.5C39 37.851 33.851 43 27.5 43h-1C20.149 43 15 37.851 15 31.5V25" />
                    <Path d="M21 29v-5a3 3 0 0 1 6 0v5M27 29v-5a3 3 0 0 1 6 0v5M33 29v-5a3 3 0 0 1 6 0v5" />
                </G>
                <Path d="M28 15a9.968 9.968 0 0 0-1.958-5.945A9.986 9.986 0 0 0 18 5a9.986 9.986 0 0 0-8.042 4.055A9.968 9.968 0 0 0 8 15" />
            </G>
        </G>
    </Svg>
)
