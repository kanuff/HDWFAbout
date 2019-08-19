const w2v = require('word2vec');


const model = w2v.loadModel(__dirname + `/vectors.txt`, (error, model) => {
    return model;
})


const relevancy = (phrase, topic) => {
   w2v.loadModel(__dirname + `/vectors.txt`, function (error, model) {
    //    console.log(topic)
    //    console.log(model)
       const topicVec = model.getVector(topic).values
    //    console.log(topicVec)
       const wordArr = phrase.split(" ")
       let phraseVec = new Array(topicVec.length).fill(1)
    //    console.log(phraseVec)
       wordArr.forEach((word) => {
           const wordVec = model.getVector(word) ? model.getVector(word).values : new Array(topicVec.length).fill(1)
           phraseVec = multiplyVec(phraseVec, wordVec)
       })
    //    console.log("Similarity below")
       return cosineSimilarity(topicVec, phraseVec)
    })
}

const multiplyVec = (vec_1, vec_2) => {
    if (vec_1.length !== vec_2.length){
        // console.log(vec_1)
        // console.log(vec_2)
        console.log("Vectors must be same shape!") 
    } else {
        const newVec = Object.assign([], vec_1)
        for(let i = 0; i < vec_1.length; i++){
            newVec[i] = (newVec[i] * vec_2[i])
        }
        return newVec
    }
}

const cosineSimilarity = (vec_1, vec_2) => {
    sim = ( dot(vec_1, vec_2) / ( mag(vec_1) * mag(vec_2) ) );
    console.log(sim);
    return sim
}

const mag = vec => {
    let sum = 0;
    vec.forEach(num => {
        sum += Math.pow(num, 2)
    })
    return Math.sqrt(sum)
}

const dot = (vec_1, vec_2) => {
    let product = 0;
    for(let i = 0; i < vec_1.length; i++){
        product += vec_1[i]*vec_2[i]
    }
    return product
}

const phrase = "noble"
const topic = "queen"
const relevance = relevancy(phrase, topic)
console.log(relevance)

// export {
//     model
// }