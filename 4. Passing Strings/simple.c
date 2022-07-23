#include<stdio.h>
#include<stdlib.h>

void hello(char * str) {

    for (char* i = str; *i != '\0'; i++){
        if (*i < 123 && *i > 96)
            *i -= 32;
    }

//     char * str = (char*) malloc()
//     int * space = (int*) malloc(16);
//     int * dummy = (int*) malloc(4);
//     *dummy = 6;
//
//     *space = 1;
//     *(space + 1) = 2;
//     *(space + 2) = (int) dummy;
//     *(space + 3) = 4;
//
// //     return 1;
//     return (int) str;
}

