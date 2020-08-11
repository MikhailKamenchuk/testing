import { addImage } from './addImage.js';

export const addImageV2 = imgSrc => {
    const p = new Promise((resolve, reject) => {
        addImage(imgSrc, (err, script) => {
            err ? reject(err) : resolve(script)
        })
    });
    return p
}

// test call
// addImageV2("https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg")
// .then(data => console.log(data))
// .catch(error => console.log(error));