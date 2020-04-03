import React, { memo } from "react";
import {
    ZoomableGroup,
    ComposableMap,
    Geographies,
    Geography
} from "react-simple-maps";
import geoUrl from '../Datasets/provincesTopo.json';

const MapChart = ({ setTooltipContent }: { setTooltipContent: Function }) => (
        <>
            <ComposableMap data-tip="" projectionConfig={{ 
                scale: 10000,
                
            }}>
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
                </ZoomableGroup>
            </ComposableMap>
        </>
    );

export default memo(MapChart);
