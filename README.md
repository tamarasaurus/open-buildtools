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

1. Clone repo
2. Install node.js
3. Run `npm install` inside open-buildtools
4. Add `open-buildtools\node_modules\.bin` to your path
5. Edit Gruntfile.js to add options or extra tasks
6. Run `grunt`

Notes
--------------------
* Don't use npm submodule 
* If code doesn't pass linting, it doesn't get packed with uglify
* Uglify minifies and combines js into build.min.js (or whatever config)
