import React, { memo } from "react";
import {
    ZoomableGroup,
    ComposableMap,
    Geographies,
    Geography
} from "react-simple-maps";
import geoUrl from '../Datasets/provincesTopo.json';

const rounded = (num: number) => {
    if (num > 1000000000) {
        return Math.round(num / 100000000) / 10 + "Bn";
    } else if (num > 1000000) {
        return Math.round(num / 100000) / 10 + "M";
    } else {
        return Math.round(num / 100) / 10 + "K";
    }
};

const MapChart = ({ setTooltipContent }: { setTooltipContent: Function }) => {
    console.log('HNALO');
    
    return (
        <>
            <ComposableMap data-tip="" projectionConfig={{ 
                scale: 10000,
                
            }}>
                <ZoomableGroup
                    center={[5, 50.64]}
                    onZoomStart={() => {
                        
                    }}
                >
                    <Geographies geography={geoUrl}>
                        {({ geographies }) => {
                                console.log('HANLO2');
                                
                                return geographies.map(geo => {
                                console.log('🚀: MapChart -> geo', geo);

                                return (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    onMouseEnter={() => {
                                        const { name_nl: NAME, POP_EST } = geo.properties;
                                        setTooltipContent(`${NAME} — KUT`);
                                    }}
                                    onMouseLeave={() => {
                                        setTooltipContent("");
                                    }}
                                    style={{
                                        default: {
                                            fill: "#D6D6DA",
                                            outline: "none"
                                        },
                                        hover: {
                                            fill: "#F53",
                                            outline: "none"
                                        },
                                        pressed: {
                                            fill: "#E42",
                                            outline: "none"
                                        }
                                    }}
                                />
                            )}
                        )}}
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
        </>
    );
};

export default memo(MapChart);
