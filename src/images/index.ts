const numOfFeaturedImages = 3;
const featured = "featured";

const IMAGES: any[] = [];

for (let i = 1; i <= numOfFeaturedImages; i++) {
    IMAGES.push(require(`./${featured}-${i}.jpg`));
}

export default IMAGES;
