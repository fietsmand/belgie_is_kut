import React, { memo } from "react";
import {
    ZoomableGroup,
    ComposableMap,
    Geographies,
    Geography,
    Annotation
} from "react-simple-maps";
import geoUrl from '../Datasets/provincesTopo.json';

const MapChart = ({ setTooltipContent }: { setTooltipContent: Function }) => (
        <>
            <ComposableMap data-tip="" projectionConfig={{ 
                scale: 10000,
                
            }}
                height={600}
            >
                <ZoomableGroup
                    center={[4.5, 51]}
                >
                    <Geographies geography={geoUrl}>
                        {({ geographies }) => geographies.map(geo =>  {
                            const { name_nl: NAME, gns_region } = geo.properties;

                            let fill = "#D00";
                            let kutOfNiet = 'KUT'

                            if(gns_region === 'BE13') {
                                fill='#005'
                                kutOfNiet='Ja eigenlijk wel oke'
                            }

                            if(gns_region === 'NL11') {
                                fill='#FFF'
                            }

                            return (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    onMouseEnter={() => {
                                        console.log('🚀: props', geo.properties);
                                        setTooltipContent(`${NAME} — ${kutOfNiet}`);
                                    }}
                                    onMouseLeave={() => {
                                        setTooltipContent('');
                                    }}
                                    style={{
                                        default: {
                                            fill,
                                            outline: "#eee",
                                            border: '1px solid #000'
                                        },
                                        hover: {
                                            fill: "#F53",
                                            outline: "#000",
                                            border: '10px solid #000'
                                        },
                                        pressed: {
                                            fill: "#E42",
                                            outline: "none",

                                        }
                                    }}
                                />
                            )}
                        )}
                    </Geographies>
                    <Annotation
                    subject={[4.72122, 51.2485]}
                        dx={-90}
                        dy={-30}
                        connectorProps={{
                            stroke: "#FF5533",
                            strokeWidth: 3,
                            strokeLinecap: "round"
                        }}
                    >
                        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#F53">
                            {"Antwerpen, eigenlijk gewoon Nederlands"}
                        </text>
                    </Annotation>
                    <Annotation
                    subject={[5.41314, 50.9954]}
                        dx={30}
                        dy={-90}
                        connectorProps={{
                            stroke: "#FF5533",
                            strokeWidth: 3,
                            strokeLinecap: "round"
                        }}
                    >
                        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#F53">
                            {"Limburg, Letterlijk dezelfde naam als de Nederlandse provincie"}
                        </text>
                    </Annotation>
                </ZoomableGroup>
            </ComposableMap>
        </>
    );

export default memo(MapChart);
