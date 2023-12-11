import { isles } from './data.js';
import Map from './images/FlannanMap.jpg';
import './App.css';
import React, {useEffect, useState} from "react";

function App() {
    const [visibleDiv, setVisibleDiv] = useState('');
    const [backgroundStyle, setBackgroundStyle] = useState({
        backgroundSize: 'cover',
    });

    useEffect(() => {
        const handleScroll = () => {
            const divIds = isles
                .map((islegroup) => islegroup[Object.keys(islegroup)].map((island) => island.name))
                .flat();

            for (const id of divIds) {
                const div = document.getElementById(id);
                if (div) {
                    const rect = div.getBoundingClientRect();
                    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                        setVisibleDiv(id);
                        break;
                    }
                }
            }
        };

        // Attach the event listener
        window.addEventListener('scroll', handleScroll);

        // Remove the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Get the background image URL for the currently visible div
    const getBgImgURL = () => {
        const currentIsland = isles
            .map((islegroup) => islegroup[Object.keys(islegroup)])
            .flat()
            .find((island) => island.name === visibleDiv);

        const bgImageURL = currentIsland ? currentIsland.bgImageURL : '';
        console.log('Background Image URL:', bgImageURL); // Log the background image URL

        // Update the background style with 'cover'
        setBackgroundStyle({
            ...backgroundStyle,
            background: `url(${bgImageURL})`,
        });

        return bgImageURL;
    };


    // Access a Nested Dict Value
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

    return (
        <>

            <div
                className="backgroundImg"
                id=""
                style={backgroundStyle}
            ></div>


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
