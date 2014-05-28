/*
 * grunt-text2js
 * https://github.com/honmaaax/grunt-text2js
 *
 * Copyright (c) 2014 Hitoshi Honma
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt){
    grunt.registerMultiTask('text2js', 'Compile Text to JS', function(){
        var _options = this.data;
        // ファイル読み込み
        var _text = grunt.file.read(_options.src);
        // エスケープ
        var _escaped = JSON.stringify(_text);
        // テンプレートに置換
        var _output;
        if( _options.amd ){
            _output = "define({" + _options.namespace + ":" + _escaped + "});";
        } else {
            _output = _options.namespace + "=" + _escaped + ";";
        }
        // JSファイルに書き込み
        grunt.file.write(_options.dest, _output);
    });
};