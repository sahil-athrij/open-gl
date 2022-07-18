all: test

test:
	emcc main.cc -s MODULARIZE=1 -s 'EXPORT_NAME="XRCReady"' -s FULL_ES2=1 -s 'EXPORTED_RUNTIME_METHODS=["GL"]'