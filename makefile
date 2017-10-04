ifeq ($(OS),Windows_NT)
	UNAME := win32
else
	UNAME := $(shell uname)
endif

DRET : renderer

electron :
ifeq ($(UNAME), win32)
	.\node_modules\.bin\babel src/main --copy-files --source-maps --plugins=transform-es2015-modules-commonjs --extensions .es6,.es --out-dir build/main
else
endif

renderer :
ifeq ($(UNAME), win32)
	.\node_modules\.bin\webpack-dev-server --config webpack.dev.js --open
else
endif
	
main :
ifeq ($(UNAME), win32)
	.\node_modules\.bin\electron .
else
endif

both :
ifeq ($(UNAME), win32)
	concurrently ".\node_modules\.bin\electron ." ".\node_modules\.bin\webpack-dev-server --config webpack.dev.js --open"
else
endif