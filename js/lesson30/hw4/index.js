const addImage = (url, callback) => {
    const img = document.createElement('img');
    img.setAttribute('alt', 'User avatar');
    img.src = url;

    const pageElem = document.querySelector('.page');
    pageElem.append(img);
    
    const onImageLoaded = () => {
        const { width, height } = img;
        callback(null, { width, height });
    }
    
    const onImageLoadError = () => callback('Image load failed');
    
    img.addEventListener('load', onImageLoaded);
    
    img.addEventListener('error', onImageLoadError);
};

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