var www = 'test';
 
var appFiles = [ 'Gruntfile.js', 'app.js', www + '*.js', www + '/uglify/*.js' ];
module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      options: {
          curly: true,
          eqeqeq: true,
          eqnull: true,
          browser: true,
          globals: {
            jQuery: true
          },
        },
      all: appFiles
    },
    uglify: {
      grxnet: {
        src: [ www + '/uglify/*.js'],
        dest: www + '/uglify/build.min.js'
      }
    },
    watch: {
      scripts: {
        files: www + '/**/*.js',
        tasks: ['jshint'],
        options: {
          interrupt: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.task.registerTask('default', ['jshint', 'uglify']);


 
};