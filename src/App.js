import { isles } from './data.js';
import Map from './images/FlannanMap.jpg';
import './App.css';
import React, {useEffect, useState} from "react";

function App() {

    // ACCESS ISLAND INFORMATION
    // // Iterate for every island

    const IslandInfo = ({ isles }) => ( //
        <>
            {/*For Each Islegroup in Isles Array */}
            {isles.map((islegroup) => (
                <>
                    {/*Print the IsleGroup Name*/}
                    <h2 class="isleGroup">{Object.keys(islegroup)}</h2>
                    {/*For Each Isle In IsleGroup with Key*/}
                    {islegroup[Object.keys(islegroup)].map((island) => (
                        // Print Island Information
                        <div id={island.name}>
                            <img
                                src= {island.imageURL}
                                alt="Island Visualization"
                                className="isleImg"
                            />

                            <h3 class="isleName">{island.name + ' ' + island.enName}</h3>
                            <p>{island.desc}</p>
                        </div>
                    ))}
                </>
            ))}
        </>
    );

    const backgroundImgURL = isles[0][Object.keys(isles[0])][0].bgImageURL;
    const islandName = isles[0][Object.keys(isles[0])][0].name;

    return (
        <>

            {/*<div className="backgroundImg"*/}
            {/*     id="Replace with island.name here"*/}
            {/*     style={{*/}
            {/*         background: 'url(' + Replace with island.bgImageURL here + ')',*/}
            {/*         backgroundSize: 'cover'*/}
            {/*     }}*/}
            {/*/>*/}

            <div
                className="backgroundImg"
                id= {islandName}
                style={{
                    background: `url(${backgroundImgURL})`,
                    backgroundSize: 'cover',
                }}
            />

            <div class="introCont">
                <img
                    src= {Map}
                    alt="Map of Flannan Isles or the Seven Hunters"
                    className="introImg"
                />
            </div>



            <main>
                <IslandInfo isles={isles} />
            </main>

        </>
    );
}

export default App;
