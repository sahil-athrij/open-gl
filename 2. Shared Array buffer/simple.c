#include<stdio.h>
#include<stdlib.h>

// int hello(char * s){
//     int i = 0;
//     for(i=0; s[i]!='\0'; i++);
//     return i;
// }

int hello() {
    char * space = malloc(4);
    *space = 'a';
    *(space + 1) = 'b';
    *(space + 2) = 'c';
    *(space + 3) = 'd';
    return (int) space;
}

