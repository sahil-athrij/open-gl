canvas = document.getElementById('overlay')
ctx = canvas.getContext('2d')

// Change it to match phone resolution
canvas.width = 1080
canvas.height = 2400

// This is what detector code scales the image before feature detection
const width = canvas.width/3.75
const height = canvas.height/3.75

ctx.fillStyle = 'red';
ctx.strokeStyle = 'black';

ctx.fill()
ctx.stroke()

// Imagine i have a draw function that draws these 
// features to the pixel buffer of canvas dimension

// Code to simulate draw of subpart
const ALLOC_SIZE = canvas.width * canvas.height * 4
const pixBuffer = new Uint8ClampedArray(ALLOC_SIZE)

const index = (x, y, z) => {
    return (z + (y * 4) + (x * 4 * canvas.width))
}

let k = 0
for (let i = 0; i < canvas.height; i++){
    for (let j = 0; j <  canvas.width; j++){
        pixBuffer[index(i,j,0)] = k
        pixBuffer[index(i,j,1)] = 0.5 * k
        pixBuffer[index(i,j,2)] = 255
        pixBuffer[index(i,j,3)] = 150
    }
    k += 1
}
k=0
for (let i = 0; i < height; i++){
    for (let j = 0; j <  width; j++){
        pixBuffer[index(i,j,0)] = k
        pixBuffer[index(i,j,1)] = 0.5 * k
        pixBuffer[index(i,j,2)] = 150
        pixBuffer[index(i,j,3)] = 255
    }
    k += 1
}

const imageData = new ImageData(pixBuffer, canvas.width)
ctx.putImageData(imageData, 0, 0)



function drawRotatedImage(ctx) {
    // ctx.clearRect(0, 0, width, height);
    ctx.save();

    ctx.scale(1,-1);
    // ctx.transform(1,0,1,-1,0,0);
    ctx.drawImage(canvas, 0, 0,width,height,0,0,width,-height);

    ctx.restore();


}

function drawRotatedImageScaleToFull(ctx) {
    // ctx.clearRect(0, 0, width, height);
    ctx.save();

    ctx.scale(1,-1);
    // ctx.transform(1,0,1,-1,0,0);
    ctx.drawImage(canvas, 0, 0,width,height,0,0,canvas.width,-canvas.height);

    ctx.restore();


}


drawRotatedImageScaleToFull(ctx);

// I need to scale and flip it to fit the screen