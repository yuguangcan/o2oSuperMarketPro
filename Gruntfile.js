// Generated on 2014-04-04 using generator-webapp 0.4.8
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/**/*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        config: {
            // Configurable paths
            app: 'app',
            dist: 'dist',
            module: 'shop'
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= config.dist %>/*',
                        '!<%= config.dist %>/.git*'
                    ]
                }]
            }
        },

        // Compiles Sass to CSS and generates necessary files if requested
        compass: {
            options: {
                sassDir: '<%= config.app %>/static/styles',
                cssDir: '.tmp/static/<%= config.module %>/styles',
                generatedImagesDir: '.tmp/static/<%= config.module %>/images/generated',
                imagesDir: '<%= config.app %>/static/images',
                javascriptsDir: '<%= config.app %>/static/scripts',
                fontsDir: '<%= config.app %>/static/styles/fonts',
                httpImagesPath: '/static/<%= config.module %>/images',
                httpGeneratedImagesPath: '/static/<%= config.module %>/images/generated',
                httpFontsPath: '/static/<%= config.module %>/styles/fonts',
                noLineComments: true,
                relativeAssets: false,
                assetCacheBuster: false
            },
            dist: {
                options: {
                    generatedImagesDir: '<%= config.app %>/static/images/generated'
                }
            },
        },

        // Renames files for browser caching purposes
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= config.dist %>/static/<%= config.module %>/scripts/**/*.js',
                        '<%= config.dist %>/static/<%= config.module %>/styles/**/*.css',
                        '<%= config.dist %>/static/<%= config.module %>/images/**/*.*',
                        '<%= config.dist %>/static/<%= config.module %>/styles/fonts/**/*.*'
                    ]
                }
            }
        },

        //requirejs support
        requirejs: {
            dist: {
                options: {
                    optimize: 'none',
                    preserveLicenseComments: false,
                    generateSourceMaps: false,
                    removeCombined: true,
                    useStrict: true,
                    baseUrl: '<%= config.app %>/static/scripts',
                    mainConfigFile: '<%= config.app %>/require-config.js',
                    dir: '<%= config.dist %>/static/<%= config.module %>/scripts',
                    keepBuildDir: true
                }
            }
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            options: {
                dest: '<%= config.dist %>'
            },
            html: '<%= config.app %>/template/**/*.{html,tpl}'
        },

        // Performs rewrites based on rev and the useminPrepare configuration
        usemin: {
            options: {
                assetsDirs: ['<%= config.dist %>', '<%= config.dist %>/static/<%= config.module %>/images']
            },
            html: ['<%= config.dist %>/template/**/*.{html,tpl}'],
            css: ['<%= config.dist %>/static/<%= config.module %>/styles/**/*.css']
        },

        // The following *-min tasks produce minified files in the dist folder
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/static/images',
                    src: '**/*.{gif,jpeg,jpg,png}',
                    dest: '<%= config.dist %>/static/<%= config.module %>/images'
                }]
            }
        },

        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/static/images',
                    src: '**/*.svg',
                    dest: '<%= config.dist %>/static/<%= config.module %>/images'
                }]
            }
        },

        htmlmin: {
            dist: {
                options: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true,
                    removeCommentsFromCDATA: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= config.dist %>',
                    src: 'template/**/*.{html,tpl}',
                    dest: '<%= config.dist %>'
                }]
            }
        },


        // By default, your `index.html`'s <!-- Usemin block --> will take care of
        // minification. These next options are pre-configured if you do not wish
        // to use the Usemin blocks.
        // cssmin: {
        //     dist: {
        //         files: {
        //             '<%= config.dist %>/styles/main.css': [
        //                 '.tmp/styles/**/*.css',
        //                 '<%= config.app %>/styles/**/*.css'
        //             ]
        //         }
        //     }
        // },
        // uglify: {
        //     dist: {
        //         files: {
        //             '<%= config.dist %>/scripts/scripts.js': [
        //                 '<%= config.dist %>/scripts/scripts.js'
        //             ]
        //         }
        //     }
        // },
        // concat: {
        //     dist: {}
        // },

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= config.app %>/static',
                    dest: '<%= config.dist %>/static/<%= config.module %>',
                    src: [
                        'images/**/*.webp',
                        'images/generated/*.*',
                    ]
                },
                {
                    expand: true,
                    dot: true,
                    cwd: '<%= config.app %>/template',
                    dest: '<%= config.dist %>/template/<%= config.module %>',
                    src: [
                        '**/*.{html,tpl}'
                    ]
                }]
            },
            styles: {
                expand: true,
                dot: true,
                cwd: '.tmp/static/<%= config.module %>/styles/',
                dest: '<%= config.dist %>/static/<%= config.module %>/styles',
                src: '**/*.css'
            }
        },

        // Run some tasks in parallel to speed up build process
        concurrent: {
            dist: [
                'compass',
                'imagemin',
                'svgmin'
            ]
        }
    });

    grunt.registerTask('build', [
        'clean:dist',
        'useminPrepare',
        'compass',
        'copy:styles',
        'concat',
        'cssmin',
        'requirejs:dist',
        'copy:dist',
        'rev',
        'usemin'
        ]);


    grunt.registerTask('default', [
        'build'
    ]);

};
