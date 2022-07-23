#include<stdio.h>
#include<stdlib.h>

int hello() {
    int * space = (int*) malloc(16);
    int * dummy = (int*) malloc(4);
    *dummy = 6;

    *space = 1;
    *(space + 1) = 2;
    *(space + 2) = (int) dummy;
    *(space + 3) = 4;

//     return 1;
    return (int) space;
}

