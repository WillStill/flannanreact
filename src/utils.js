import { isles } from './data.js';

export function getImageUrl(isles) {
    return (
        '.images/' +
        isles.imageId +
        's.jpg'
    );
}
