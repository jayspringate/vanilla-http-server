'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    simplemocha: {
      options: {
      globals: ['should'],
      timeout: 3000,
      ignoreLeaks: false,
      ui: 'bdd',
      reporter: 'tap'
    },
    all: { 
      src: ['test/**/*.js'] 
    }
  },
    jshint: {
      dev: {
        src: ['Gruntfile.js', 'server.js', 'test/**/*.js']
      },
      options: {
        node: true,
        globals: {
          describe: true,
          it: true,
          before: true,
          after: true,
          beforeEach: true,
          afterEach: true
        }
      }
    },
    watch: {
      configFiles: {
        files: ['Gruntfile.js'],
        options: {
          reload: true,
          event: ['changed']
        }
      },
      scripts: {
        files: ['**/*.js', 'test/**/*.js'],
        tasks: ['jshint, test'],
        options: {
          event: ['added', 'deleted', 'changed']
        },
      },
    },
  });
  grunt.registerTask('test', ['jshint', 'simplemocha']);
  grunt.registerTask('default', ['test']);
  grunt.registerTask('default', 'simplemocha');
};
