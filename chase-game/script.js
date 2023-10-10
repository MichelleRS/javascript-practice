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

function doLoadImage() {
  // get DOM element for canvas
  const canvas = document.querySelector("canvas");
  if (canvas.getContext) {
    // get object for drawing area
    const context = canvas.getContext("2d");
    // get image load promise
    let imagePromise = getImageLoadPromise("./assets/cheese.png");
    // draw image
    imagePromise.then((image) => context.drawImage(image, 0, 0));
    // error handling
    imagePromise.catch((error) => alert(error));
  }
  // error handling
  else {
    alert("Graphics not supported");
  }
}
