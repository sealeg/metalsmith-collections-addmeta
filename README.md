# metalsmith-collections-addmeta

A [Metalsmith](http://www.metalsmith.io/) plugin to add metadata to every file in a collection.

Requires [metalsmith-collections](https://github.com/segmentio/metalsmith-collections).

## Installation

```
$ npm install metalsmith-collections-addmeta
```

## Usage

```js
var collections = require('metalsmith-collections');
var addmeta     = require('metalsmith-collections-addmeta');

metalsmith
    .use(collections({
        article: {
            pattern: 'articles/*.md'
        }
    }))
    .use(addmeta({
        article: {
            layout: 'article.html'
        }
    }))
```

Adds a `layout` property to every file in the `article` collection.

Note that if a file already has a property set, from front matter for
example, then that property will be preserved. In the example above, if 
`articles/stuff.md` had `layout: stuff.html` in it's front matter, the 
`layout` property for that file would still be set to `stuff.html` after
the plugin has finished processing.

## License

MIT

