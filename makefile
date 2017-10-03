electron :
	babel src/main --copy-files --source-maps --plugins=transform-es2015-modules-commonjs --extensions .es6,.es --out-dir build/main