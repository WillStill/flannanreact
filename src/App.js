import { isles } from './data.js';
import Map from './images/FlannanMap.jpg';
import './App.css';
import React, { useEffect, useState } from "react";

import sprite from "./images/FlannanMapSymbolsNoNS.svg";
import Blacksmith from './images/islandSVG/Blacksmith2.svg';
import _Path from './images/Path.jpg';

function App() {
    useEffect(() => {
        document.title = "Flannan Isles Page"
    }, [])

    const [isWarningVisible, setIsWarningVisible] = useState(true);
    const handleDismiss = () => {
        setIsWarningVisible(false);
    };

    // IsleSVG Component for rendering the SVG for each island
    // const IsleSVG = ({ isles }) => (
    //     <div className="svgCont">
    //         {isles.map((islegroup, index) => (
    //             // Loop through each island and return all SVGs inside a single div
    //             islegroup[Object.keys(islegroup)].map((island, idx) => (
    //                 <svg className="mapSVG" key={idx}>
    //                     <use xlinkHref={`${sprite}#${island.osname}`} />
    //                 </svg>
    //             ))
    //         ))}
    //     </div>
    // );


    // IslandInfo Component for rendering information for each island
    const IslandInfo = ({ isles }) => (
        <>
            {isles.map((islegroup, index) => (
                <div key={index}>
                    <h2 className="isleGroup">{Object.keys(islegroup)}</h2>

                    {islegroup[Object.keys(islegroup)].map((island, idx) => {
                        let fullname = null;
                        let details = null;
                        let imagedetails = null;

                        // Check if island has an English name and display accordingly
                        if (island.osname && island.enName) {
                            fullname = <h3 className="isleName">{island.osname + ' ("' + island.enName + '")'}</h3>;
                        } else {
                            fullname = <h3 className="isleName">{island.osname}</h3>;
                        }

                        // Show additional island details if available
                        if (island.aliases || island.size || island.imageURL || island.category) {
                            details = (
                                <div className="detailsGroup">
                                    {island.aliases && <h4 className="details">Alias: {island.aliases}</h4>}
                                    {island.size && <h4 className="details"> Size: {island.size}</h4>}
                                    <h4 className="details">Category: {island.category}</h4>
                                </div>
                            );
                        }

                        // Show island image and caption
                        imagedetails = (
                            <div className="imageGroup">
                                {island.imageURL &&
                                    <img src={island.imageURL} alt="Island Visualization" className="isleImg" />}
                                <p className="caption">{island.caption}</p>
                            </div>
                        );

                        return (
                            <div id={island.osname} key={idx}>
                                {fullname}
                                {details}
                                {imagedetails}
                                <p>{island.desc}</p>
                            </div>
                        );
                    })}
                </div>
            ))}
        </>
    );

    return (
        <>
            <div
                className="backgroundImg"
                style={{
                    background: `url(${_Path})`,
                    backgroundSize: 'cover',
                }}
            />

            {isWarningVisible && (
                <div className="WarnCont">
                    <div className="warning">
                        <p>
                            This site is <b>FICTION</b> and part of a world-building exercise. Please don't take
                            anything on this page as truth.
                        </p>
                        <p onClick={handleDismiss} className="dismiss">
                            &#10006;
                        </p>
                    </div>
                </div>
            )}

            <h1>Flannan Isles or Seven Hunters</h1>
            <div className="introCont">


                {/*<IsleSVG isles={isles} />*/}

                {/*<img alt="" className="mapSVG" src={sprite}/>*/}
                <img
                    src={Map}
                    alt="Map of Flannan Isles or the Seven Hunters"
                    className="introImg"
                />
                <div className="svgContainer">

                    <object className="mapSVG" data={sprite}>
                        {/*<img alt="" src={sprite}/>*/}
                    </object>
                </div>
            </div>

            <main>
                <p>Isle information was acquired and modified from <a
                    href="https://maps.walkingclub.org.uk/hills/12762/sgeir-righinn">SWC Maps</a>, <a
                    href="https://mapcarta.com/17644342">Mapcarta</a>, and <a
                    href="https://en.wikipedia.org/wiki/Flannan_Isles">Wikipedia</a>.</p>
                <IslandInfo isles={isles}/>
            </main>
        </>
    );
}

export default App;
