const w2v = require('word2vec');

// This file creates the vector library used for topic matching/relevance scoring. You can
// redefine the vectors by changing the text inside of "/training_text.txt"

const training_file = __dirname + `/training_text.txt`;
const phrases_location = __dirname + `/phrases.txt`;
const output_location = __dirname + `/vectors.txt`;

w2v.word2phrase(training_file, phrases_location, {
    threshold: 5,
    debug: 2,
    minCount: 2
})

w2v.word2vec(training_file, output_location, {
    cbow: 1,
    size: 200,
    window: 8,
    negative: 25,
    hs: 0,
    sample: 1e-4,
    threads: 20,
    iter: 15,
    minCount: 2
})

