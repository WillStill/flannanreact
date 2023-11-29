
export function getImagePaths() {
    const fs = require('fs');
    const path = require('path');

    const directoryPath = './images';

    fs.readdir(directoryPath, (files) => {
        const fileNames = files.map(file => path.join(directoryPath, file));
        return(fileNames)
    });
}