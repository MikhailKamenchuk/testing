export const addImage = (imgSrc, callback) => {
    // TODO write your code here
    
    const imgElem = document.createElement('img');
    imgElem.src = imgSrc;
    imgElem.setAttribute('alt', 'My photo');

    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);
    
    const onImgLoaded = () => {
        callback(null, imgElem)
    }
    
    imgElem.addEventListener('load',  onImgLoaded);
    imgElem.addEventListener('error', () => callback('Image load is failed...'));
}

// addImage()
// callack example
const onImageLoaded = (error, imgElem) => {
    if (error) {
        console.log(error);
        return;
    }
    const { width, height } = imgElem;
    const sizeElem = document.querySelector('.image-size');
    sizeElem.textContent = `${width} x ${height}`;
}

// test call
addImage("https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg", onImageLoaded);