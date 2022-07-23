#include <stdio.h>
#include <GLES2/gl2.h>
#include <GLES2/gl2ext.h>
#include <emscripten.h>
#include <stdlib.h> // pulls in declaration of malloc, free

extern "C" {

    
    GLubyte *data = (GLubyte *) malloc(4);

    EMSCRIPTEN_KEEPALIVE
    GLuint testFunction(){
        EM_ASM({
            console.log('it works')
        });

        GLuint id;
        unsigned int fbo;
        glGenTextures(1, &id);
        glGenFramebuffers(1,&fbo);
        glBindTexture(GL_TEXTURE_2D, id);
        glBindFramebuffer(GL_FRAMEBUFFER,fbo);
        glFramebufferTexture2D(GL_TEXTURE_2D,GL_COLOR_ATTACHMENT0,GL_TEXTURE_2D,id,0);
        glReadPixels(0,0,1,1,GL_RGBA, GL_UNSIGNED_BYTE, data);
        EM_ASM({
                    console.log($0)
                }, *(data+3));

        return id;
    }
}