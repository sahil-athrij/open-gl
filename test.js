let isXRCActive = false
let XRC = null
let drawCtx = null


const createContext = () => {

    const canvas = document.getElementById('camera')
    if (canvas){
        drawCtx = canvas.getContext('webgl2')
    }

    const handle = XRC.GL.registerContext(drawCtx, drawCtx.getContextAttributes())
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
    console.log(id)
})






