all: test

test:
	emcc main.cc -s MODULARIZE=1 -s 'EXPORT_NAME="XRCReady"'