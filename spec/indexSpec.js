/* jshint node: true, jasmine: true */
/* globals inject */
'use strict';

var metamap = require('../src/index.js');

// metalsmith stub.
var metalsmith = {

    collections: {
        'articles': [
            {'name': 'article 1'},
            {'name': 'article 2'},
            {'name': 'article 3', 'layout': 'other.html'}
        ],
        'others': [
            {'name': 'other 1'}
        ]
    },

    metadata: function () {
        
        return { collections: this.collections }; 
    }
};

describe('Test metamap', function () {

    var opts = {
        'articles': {
            layout: 'article.html'
        }
    };
    var metamapFunc = metamap(opts);
    var res = metamapFunc({}, metalsmith,  function () { return true; });

    var articles = metalsmith.collections.articles;
    var others   = metalsmith.collections.others;

    it('returns true', function () {
        expect(res).toBe(true);
    }); 

    it('sets layout for articles 1 & 2 to article.html', function () {
        expect(articles[0].layout).toBeDefined();
        expect(articles[1].layout).toBeDefined();
        expect(articles[0].layout).toBe('article.html');
        expect(articles[1].layout).toBe('article.html');
    });

    it('does not change layout for article 3', function () {
       expect(articles[2].layout).toBe('other.html'); 
    });

    it('does not set layout for others', function () {
        expect(others[0].layout).not.toBeDefined();
    });

    console.log(metalsmith.collections);

});
