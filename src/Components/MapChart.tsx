import React, { memo } from "react";
import {
    ZoomableGroup,
    ComposableMap,
    Geographies,
    Geography,
    Annotation
} from "react-simple-maps";
import geoUrl from '../Datasets/provincesTopo.json';
import { getText } from '../Utils/index';

const MapChart = ({ 
    setTooltipContent, 
    language 
}: { 
    setTooltipContent: Function;
    language: 'NL' | 'FR';
}) => (
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
                            let kutOfNiet = getText(language, 'KUT')

                            if(gns_region === 'BE13') {
                                fill='#005'
                                kutOfNiet = getText(language, 'Ja eigenlijk wel oke')
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
                                        setTooltipContent(getText(language, `${NAME} — ${kutOfNiet}`));
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
                        dx={-20}
                        dy={-110}
                        connectorProps={{
                            stroke: "#FF5533",
                            strokeWidth: 3,
                            strokeLinecap: "round"
                        }}
                    >
                        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#F53">
                        {getText(language, "Antwerpen, eigenlijk gewoon Nederlands")}
                        </text>
                    </Annotation>
                    <Annotation
                        subject={[5.41314, 50.9954]}
                        dx={30}
                        dy={-200}
                        connectorProps={{
                            stroke: "#FF5533",
                            strokeWidth: 3,
                            strokeLinecap: "round"
                        }}
                    >
                        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#F53">
                        {getText(language, "Limburg, Letterlijk dezelfde naam als de Nederlandse provincie")}
                        </text>
                    </Annotation>
                    <Annotation
                    subject={[4.53709, 50.8709]}
                        dx={80}
                        dy={-190}
                        connectorProps={{
                            stroke: "#FF5533",
                            strokeWidth: 3,
                            strokeLinecap: "round"
                        }}
                    >
                        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#F53">
                        {getText(language, "Vlaams-Brabant, Bijna net zo goed als Noord-Brabant")}
                        </text>
                    </Annotation>
                    <Annotation
                    subject={[3.83186, 50.9749]}
                        dx={55}
                        dy={-120}
                        connectorProps={{
                            stroke: "#FF5533",
                            strokeWidth: 3,
                            strokeLinecap: "round"
                        }}
                    >
                        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#F53">
                        {getText(language, "Oost Vlaanderen, Ten oosten van West-Vlaanderen")}
                        </text>
                    </Annotation>
                    <Annotation
                        subject={[3.02202, 51.0312]}
                        dx={-25}
                        dy={-80}
                        connectorProps={{
                            stroke: "#FF5533",
                            strokeWidth: 3,
                            strokeLinecap: "round",
                        }}
                    >
                        <text x="-8" textAnchor="middle" alignmentBaseline="after-edge" fill="#F53">
                        {getText(language, "West Vlaanderen, Ten westen van Oost-Vlaanderen")}
                        </text>
                    </Annotation>
                    <Annotation
                    subject={[4.88712, 50.3244]}
                        dx={-35}
                        dy={110}
                        connectorProps={{
                            stroke: "#FF5533",
                            strokeWidth: 3,
                            strokeLinecap: "round",
                        }}
                    >
                        <text x="-8" textAnchor="end" alignmentBaseline="after-edge" fill="#F53">
                        {"Wallonië - 💩"}
                        </text>
                    </Annotation>
                </ZoomableGroup>
            </ComposableMap>
        </>
    );

export default memo(MapChart);
