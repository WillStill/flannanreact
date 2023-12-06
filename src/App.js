import { isles } from './data.js';
import Map from './images/FlannanMap.jpg';
import './App.css';



function App() {



    // // Access a Nested Dict Value
    // const westIslesArray = isles.find(isle => isle.hasOwnProperty('Western Isles'))['Western Isles'];
    // const secondDictionaryItem = westIslesArray[1];
    // const secondDictionaryName = secondDictionaryItem.name;
    // // OR const secondDictionaryName = isles.find(isle => isle.hasOwnProperty('westisles'))['westisles'][1].name;
    //
    // console.log(secondDictionaryName); // Output: Roaireim
    // console.log(secondDictionaryItem); // Output: Roaireim

    // Iterate for every island
    const IslandInfo = ({ isles }) => ( //
        <>
            {/*For Each Islegroup in Isles Array */}
            {isles.map((islegroup) => (
                <>
                    {/*Print the IsleGroup Name*/}
                    <h2>{Object.keys(islegroup)}</h2>
                    {/*For Each Isle In IsleGroup with Key*/}
                    {islegroup[Object.keys(islegroup)].map((island) => (
                        // Print Island Information
                        <>
                            <h3>{island.name}</h3>
                            <p>{island.desc}</p>
                            <img

                                src= {island.imageURL}
                                alt="Island Visualization"
                                className="photo"
                                width="300px"
                            />
                        </>
                    ))}
                </>
            ))}
        </>
    );


    return (
        <>
            <div>
                <img
                    src= {Map}
                    alt="Map of Flannan Isles or the Seven Hunters"
                    className="photo"
                    width="100%"
                />
            </div>

            <div>
                <IslandInfo isles={isles} />
            </div>




            <h1>Howdy!</h1>
            <p>I'm just beginning to delve into what is possible with React. </p>
            <h2>What I've tried so far:</h2>
            <ul>
                <li>Getting a list of filepaths in `./images/` with JSX (JSX can't look at filesystems/servers, I meant to do this with React)</li>
                <li>Created a Javascript file to get a list of filepaths in `./images/` (Deleted)</li>
                <li><s>Have JSX execute Javascript file (It can't?)</s> Other js files can be executed if those files have a function, the function has `export` in the definition, and referencing those files are done properly (I need curly braces but I'm not sure if it's only with curly braces)</li>
                <li>(I don't want to list the name for every image file) I DID IT! A data file with information (can include image info) is iterated through to post info in html</li>
                <li>use emojis? &#x1F604; (this should work exactly like coding in html)</li>
                <li>Created an array of image paths after manually importing them</li>
            </ul>
            <p>I know there's a way to use Node.js and import the filepath list but its going to take more time than I have.</p>
            <h2>To Do</h2>
            <ul>
                <li>Finish making the gallery</li>
                <li>Find or make Codeblocks with css</li>
                <li>Create CSS</li>

            </ul>

            {/*<ul>{listItems}</ul>*/}



            {/*Beginning Gallery*/}
            {/*{imagePaths.map((image, index) => (*/}
            {/*    <img*/}
            {/*        key={index}*/}
            {/*        src= {image}*/}
            {/*        alt="Funny Thing"*/}
            {/*        className="photo"*/}
            {/*        width="300px"*/}
            {/*    />*/}
            {/*))}*/}

        </>
    );
}

export default App;
