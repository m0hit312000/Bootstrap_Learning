'use strict';

module.exports = function(grunt) {
   
    require('time-grunt')(grunt);
    require('jit-grunt')(grunt);
    
    grunt.initConfig({
     sass:{
        dist: {
            files: {
                'css/style.css': 'css/style.scss'
            }
        }  
     },
     watch: {
         files: 'css/*.css',
         tasks: ['sass']
     },
     browserSync: {
         dev: {
             bsFiles: {
                 src: [
                     'css/*.css',
                     '*.html',
                     'js/*.js'
                 ]
             },
             options: {
                 watchTask: true,
                 server: {
                     baseDir: './'
                 }
             }
         }
     }

    });
    grunt.registerTask('css',['sass']);
    grunt.registerTask('default',['browserSync','watch']);
}