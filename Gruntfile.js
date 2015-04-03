'use strict';

module.exports = function(grunt) {

  // Init configuration object.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Describe tasks.
    /////////////////////////////////////////////////
    watch: {
      sass: {
        // You can use html snippets.
        files: ['**/*.{scss,sass}', 'assets/scss/**/*.html'],
        // Tasks to be watched.
        tasks: ['sass', 'uglify']
      }
    },


    sass: {
      dist: {
        files: [{
          // Dynamic mappings, allow the below options.
          expand: true,
          // Instead naming files individually, specify entire folders.
          // Source.
          cwd: 'assets/scss',
          src: ['*.scss'],
          // Destination.
          dest: 'css',
          ext: '.css'
        }]
      }
    },


    // Minify the js files from src folder and move them to build folder.
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      // In case of many js files define the task dynamically
      // see http://gruntjs.com/configuring-tasks#building-the-files-object-dynamically
      build: {
        src: 'assets/sjs/<%= pkg.name %>.js',
        dest: 'js/<%= pkg.name %>.min.js'
      }
    },

  });
  
  // Load tasks plugins.
  /////////////////////////////////////////////////
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Here set the running task.
  /////////////////////////////////////////////////
  grunt.registerTask('default', ['watch', 'uglify:build']);
};