all: test

test:
	emcc simple.c -O2 -s WASM=1 -s SIDE_MODULE=1 -o simple.wasm

