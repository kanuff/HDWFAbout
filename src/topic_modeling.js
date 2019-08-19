const w2v = require('word2vec');


const model = w2v.loadModel(__dirname + `/vectors.txt`, function(error,model) {
    console.log(model)
})