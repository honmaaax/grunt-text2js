/*
 * grunt-text2js
 * https://github.com/honmaaax/grunt-text2js
 *
 * Copyright (c) 2014 Hitoshi Honma
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt){
    var options = {};
    var text2js = function(file){
        // ファイル読み込み
        var _text = grunt.file.read(file.src);
        // エスケープ
        var _escaped = JSON.stringify(_text);
        // テンプレートに置換
        var _output;
        if( options.amd ){
            _output = "define({" + options.namespace + ":" + _escaped + "});";
        } else {
            _output = options.namespace + "=" + _escaped + ";";
        }
        // JSファイルに書き込み
        grunt.file.write(file.dest, _output);
    };
    grunt.registerMultiTask('text2js', 'Compile Text to JS', function(){
        options = this.data;
        if( options.files ){
            options.files.forEach(function(file){
                text2js(file);
            });
        } else {
            text2js(options);
        }
    });
};