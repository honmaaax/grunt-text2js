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
        // エスケープ＆テンプレートに置換して代入
        var _escaped = _text.replace(/'/g, "\\'");
        var _string;
        if( _options.amd ){
            _string = "define(" + _escaped + ");";
        } else {
            _string = _options.namespace + "='" + _escaped + "';";
        }
        // JSファイルに書き込み
        grunt.file.write(_options.dest, _string);
    });
};