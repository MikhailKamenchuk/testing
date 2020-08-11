export const addImage = imgSrc => {
    const p = new Promise((resolve, reject) => {
        const imgElem = document.createElement('img');
        imgElem.src = imgSrc;
        imgElem.setAttribute('alt', 'My photo');

        const containerElem = document.querySelector('.page');
        containerElem.append(imgElem);

        const onImgLoaded = () => {
            const {width, height} = imgElem;
            resolve({width, height})
        }

        imgElem.addEventListener('load', onImgLoaded);
        imgElem.addEventListener('error', () => reject(new Error('Image load is failed...')));
    });
    return p
}

// addImage()
// callack example
// const onImageLoaded = (error, imgElem) => {
//     if (error) {
//         console.log(error);
//         return;
//     }
//     const { width, height } = imgElem;
//     const sizeElem = document.querySelector('.image-size');
//     sizeElem.textContent = `${width} x ${height}`;
// }

// test call
// addImage("hts://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg")
// .then(data => console.log(data))
// .catch(error => console.log(error));