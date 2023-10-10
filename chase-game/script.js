/* events */
window.addEventListener("load", () => {
  doLoadImage();
});

/* functions */

// manage multiple image loads
function getImageLoadPromise(url) {
  return new Promise((resolve, reject) => {
    // create a new image object
    let image = new Image();
    // set src property to location of image
    image.src = url;
    // connect the onload event to the kept parameter
    image.onload = () => resolve(image);
    // connect the onerror event to the broken parameter
    image.onerror = () => reject(new Error("Could not load" + url));
  });
}

// handle multiple image promises
async function getImages(imageUrls) {
  // initialize an empty promise list
  let promiseList = [];

  // loop through list of image urls
  for (let url of imageUrls) {
    // create image load promise and add to promise list
    promiseList[promiseList.length] = getImageLoadPromise(url);
  }

  // wait for all promises to be fulfilled
  let result = await Promise.all(promiseList);
  // return list of images
  return result;
}

async function doLoadImage() {
  // get DOM element for canvas
  const canvas = document.querySelector("canvas");

  if (canvas.getContext) {
    // get object for drawing area
    const context = canvas.getContext("2d");
    // get array of image urls
    let imageUrls = [
      "./assets/cheese.png",
      "./assets/cracker.png",
      "./assets/tomato.png",
      "./assets/background.png",
    ];

    // get images
    let images = await getImages(imageUrls);

    // set x draw coordinate to 0
    let x = 0;
    // set y draw coordinate to 0
    let y = 0;

    // loop through the images
    for (let image of images) {
      // draw the image
      context.drawImage(image, x, y);
      // move x across by the width of the image
      x = x + image.width;
      // move y down by the height of the image
      y = y + image.height;
    }
  }
  // error handling
  else {
    alert("Graphics not supported");
  }
}
