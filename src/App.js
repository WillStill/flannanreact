import { isles } from './data.js';
import Map from './images/FlannanMap.jpg';
import './App.css';
import React, {useEffect, useState} from "react";

import _Path from './images/Path.jpg'

function App() {


    const [isWarningVisible, setIsWarningVisible] = useState(true);
    const handleDismiss = () => {
        setIsWarningVisible(false);
    };

    useEffect(() => {
        document.title = "Flannan Isles Page"

    }, [])



        // // Access a Nested Dict Value
    // const westIslesArray = isles.find(isle => isle.hasOwnProperty('Western Isles'))['Western Isles'];
    // const secondDictionaryItem = westIslesArray[1];
    // const secondDictionaryName = secondDictionaryItem.name;
    // // OR const secondDictionaryName = isles.find(isle => isle.hasOwnProperty('westisles'))['westisles'][1].name;
    //
    // console.log(secondDictionaryName); // Output: Roaireim
    // console.log(secondDictionaryItem); // Output: Roaireim


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
                    {islegroup[Object.keys(islegroup)].map((island) => {
                        let fullname = null;
                        let details = null;
                        let imagedetails = null;

                        // This checks if the island has an english name, if true: show both names, if false: show ordinance survey name
                        if (island.osname && island.enName) {
                            fullname = <h3 className="isleName">{island.osname + ' ("' + island.enName + '")'}</h3>
                        } else {
                            fullname = <h3 className="isleName">{island.osname}</h3>
                        }

                        // this displays
                        if (island.aliases || island.size || island.imageURL || island.category) {
                            details = (
                                <div className="detailsGroup">
                                    {island.aliases && <h4 className="details">Alias: {island.aliases}</h4>}
                                    {island.size && <h4 className="details"> Size: {island.size}</h4>}
                                    <h4 className="details">Category: {island.category}</h4>
                                </div>
                            );
                        }


                        imagedetails = (
                            <div className="imageGroup">
                                {island.imageURL &&
                                    <img src={island.imageURL} alt="Island Visualization" className="isleImg"/>}
                                    <p className="caption">{island.caption}</p>
                            </div>
                        );


                        return (
                            <div id={'#' + island.osname}>
                                {fullname}
                                {details}
                                {imagedetails}
                                <p>{island.desc}</p>
                            </div>
                        );
                    })}
                </>
            ))}
        </>

    );

//id: 11,
//osname: 'Eilean a\' Gobha',
//enName: 'Isle of the Blacksmith',
//aliases: '',
//desc: 'Fitting for the name given to it, Eilean a\' Gobha holds two bothies, one occupied by a smith during the 7th Century. The bothy now remains unoccupied, with most possessions having been left behind to collect dust. The island lies just south of Roaiream, and is aptly described as being a grass-topped plateau.',
//size: '',
//category: 'Isle',
//imageURL: _EileanGhobha,
//bgImageURL: _OldShieling




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
                // id= {islandName}
                style={{
                    background: 'url(' + _Path + ')',
                    backgroundSize: 'cover',
                }}
            />

            {isWarningVisible && (
                <div className="WarnCont">
                    <div className="warning">
                        <p>
                            This site is <b>FICTION</b> and part of a world-building exercise. Please don't take anything on
                            this page as truth.
                        </p>
                        <p onClick={handleDismiss} className="dismiss">
                            &#10006;
                        </p>
                    </div>
                </div>
            )}

            <h1>Flannan Isles or Seven Hunters</h1>
            <div class="introCont">
                <img
                    src={Map}
                    alt="Map of Flannan Isles or the Seven Hunters"
                    className="introImg"
                />
            </div>


            <main>
                <p>Isle information was aquired and modified from <a href="https://maps.walkingclub.org.uk/hills/12762/sgeir-righinn">SWC Maps</a>, <a href="https://mapcarta.com/17644342">Mapcarta</a>, and <a href="https://en.wikipedia.org/wiki/Flannan_Isles">Wikipedia</a>.</p>
                <IslandInfo isles={isles}/>
            </main>

        </>
    );
}

export default App;