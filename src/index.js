/* jshint node: true */
'use strict';

var _every   = require('lodash/every');
var _each    = require('lodash/each');
var _has     = require('lodash/has');
var _indexOf = require('lodash/indexOf');

module.exports = function plugin(opts) {

    return function (files, metalsmith, done) {
        var collections = metalsmith.metadata().collections;
        var complete = _every(opts, function (metadata, collName) {
            if (_has(collections, collName)) {
                var collFiles = collections[collName];
                _each(collFiles, function (file) {
                    _each(metadata, function (meta, metaName) {
                        if (false === _has(file, metaName)) {
                            file[metaName] = meta;
                        }
                    });
                });
            }

            return true;
        });

        return complete && done();
    };
};
