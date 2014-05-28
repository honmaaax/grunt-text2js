/*
 * grunt-text2js
 * https://github.com/honmaaax/grunt-text2js
 *
 * Copyright (c) 2014 Hitoshi Honma
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt){
    grunt.initConfig({
        text2js: {
            dist: {
                src: "./test/test.txt",
                dest: "./test/test.js",
                namespace: "testing",
                amd: true
            }
        }
    });

    grunt.loadTasks('tasks');
};