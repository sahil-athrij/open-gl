let isXRCActive = false
let XRC = null
let drawCtx = null


const createContext = () => {

    const canvas = document.getElementById('camera')
    if (canvas){
        drawCtx = canvas.getContext('webgl2')
    }

    const handle = XRC.GL().registerContext(drawCtx, drawCtx.getContextAttributes())
    XRC.GL.makeContextCurrent(handle)

}

const XRCPromise = window.WebAssembly ? new Promise((resolve) => {
    XRCReady().then((Module) => {
        const xrc = Object.assign({}, Module, {then: undefined})
        isXRCActive = true
        resolve(xrc)
    })
})
: Promise.resolve({})

const XRCPromise_ = XRCPromise.then((xrc_) => {
    XRC = xrc_
    createContext()
    id = XRC._testFunction()

    newTexture = drawCtx.createTexture()
    // copyTexture = drawCtx.createTexture()
    copyTexture = XRC.GL.textures[id]

    drawCtx.bindTexture(drawCtx.TEXTURE_2D, newTexture)
    const pixel = new Uint8Array([0, 0, 255, 255]);  // opaque blue
    drawCtx.texImage2D(drawCtx.TEXTURE_2D, 0, drawCtx.RGBA,
            1, 1, 0, drawCtx.RGBA, drawCtx.UNSIGNED_BYTE,
            pixel);

    readback_framebuffer = drawCtx.createFramebuffer()

    new_framebuffer = drawCtx.createFramebuffer()

    const width = 1
    const height = 1

    const texture_bytes = width*height*4

    let readback_pixels = new Uint8Array(texture_bytes);
    // gl_.bindTexture(gl_.TEXTURE_2D, texture);

    drawCtx.bindFramebuffer(drawCtx.FRAMEBUFFER, readback_framebuffer);
    drawCtx.framebufferTexture2D(drawCtx.FRAMEBUFFER, drawCtx.COLOR_ATTACHMENT0,
        drawCtx.TEXTURE_2D, newTexture, 0);

    drawCtx.bindTexture(drawCtx.TEXTURE_2D, null);
    drawCtx.bindTexture(drawCtx.TEXTURE_2D, copyTexture);

    drawCtx.copyTexImage2D(drawCtx.TEXTURE_2D, 0, drawCtx.RGBA, 0, 0, width, height, 0)

    drawCtx.bindFramebuffer(drawCtx.FRAMEBUFFER, null);

    drawCtx.bindFramebuffer(drawCtx.FRAMEBUFFER, new_framebuffer);

    drawCtx.framebufferTexture2D(drawCtx.FRAMEBUFFER, drawCtx.COLOR_ATTACHMENT0,
        drawCtx.TEXTURE_2D, copyTexture, 0);

    drawCtx.readPixels(0, 0, width, height,
            drawCtx.RGBA, drawCtx.UNSIGNED_BYTE, readback_pixels);

    console.log(readback_pixels)
})






