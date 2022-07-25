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

for (let i = 0; i < height; i++){
    for (let j = 0; j <  width; j++){
        pixBuffer[index(i,j,0)] = 100
        pixBuffer[index(i,j,1)] = 200
        pixBuffer[index(i,j,2)] = 150
        pixBuffer[index(i,j,3)] = 255
    }
}

const imageData = new ImageData(pixBuffer, canvas.width)
ctx.putImageData(imageData, 0, 0)


// I need to scale and flip it to fit the screen