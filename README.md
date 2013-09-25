open-buildtools
=============

To include:

1. SASS
2. bower
3. jshint
4. uglify
5. grunt

Setup instructions
--------------------

*Make sure node.js is installed*

1. Clone repo
2. Run `npm install` inside open-buildtools
3. Add `open-buildtools\node_modules\.bin` to your path
4. Edit Gruntfile.js to add options or extra tasks
5. Run `grunt`

Notes
-------------------- 
* Gruntfile.js contains the config for grunt tasks
* Don't use npm submodule 
* If code doesn't pass linting, it doesn't get packed with uglify
* Uglify minifies and combines js into build.min.js (or whatever filename is specified in Gruntfile.js)
* bower manager js packages, the output directory and other options are specified in .bowerrc 