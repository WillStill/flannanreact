import image1 from './images/catstare.gif';
import image2 from './images/beans.PNG'
import image3 from './images/ena.gif'
import image4 from './images/ahittweet.png'
import image5 from './images/harlowcat.svg'
import './App.css';

function Main() {

    const imagePaths = [
        image1,
        image2,
        image3,
        image4,
        image5
    ];

    return (
        <>
            <h1>Howdy!</h1>
            <p>I'm just beginning to delve into what is possible with JSX. </p>
            <h2>What I've tried so far:</h2>
            <ul>
                <li>Getting a list of filepaths in `./images/` with JSX (It can't look at filesystems/servers)</li>
                <li>Created a Javascript file to get a list of filepaths in `./images/` (Deleted)</li>
                <li>Have JSX execute Javascript file (It can't?)</li>
                <li>(I don't want to list the name for every image file)</li>
                <li>use emojis? &#x1F604; (it works like html)</li>
                <li>Created an array of image paths after manually importing them</li>
            </ul>
            <p>I know there's a way to use Node.js and import the filepath list but its going to take more time than I have.</p>
            <h2>To Do</h2>
            <ul>
                <li>Finish making the gallery</li>
                <li>Find or make Codeblocks with css</li>
                <li>Create CSS</li>

            </ul>
            {imagePaths.map((image, index) => (
                <img
                    key={index}
                    src= {image}
                    alt="Funny Picture"
                    className="photo"
                    width="300px"
                />
            ))}

        </>
    );
}

export default Main;
