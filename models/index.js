const bookshelf = require('../bookshelf')

const Poster = bookshelf.model('Poster', {
    tableName:'posters'
});

module.exports = { Poster };

// refer to parallel lab 3 
//to create rows in the Posters table