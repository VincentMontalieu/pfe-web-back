module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        express: {
            options: {
                port: 4000
            },
            build: {
                options: {
                    script: 'bin/www.js'
                }
            }
        },

        watch: {
            all: {
                files: ['./**/*.js'],
                tasks: ['express:build:stop', 'express:build'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.registerTask('serve', function(){
        grunt.task.run(['express:build','watch']);
    });

};