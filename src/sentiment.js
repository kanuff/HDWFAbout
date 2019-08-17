import Sentiment from 'sentiment'


export const processData = ({articles, value}) => {
    const payload = {}
    const sentiment = new Sentiment();
    const processingData = [];
    const ratio = 0.6
    debugger
    articles.forEach(article => {
        const datum = {}
        datum.content = article.content || ""
        datum.title = article.title || "Unnamed"
        datum.author = article.author || datum.title
        datum.source = article.source.name
        datum.url = article.url
        datum.image = article.urlToImage
        datum.description = article.description || "Unavailable";
        
        const contentSentiment = sentiment.analyze(datum.content)
        const titleSentiment = sentiment.analyze(datum.title)
        
        const comparative = contentSentiment.comparative < 0.08 ? Math.abs(contentSentiment.comparative)/0.75 : contentSentiment.comparative //THIS IS ONLY A PLACEHOLDER, update to more meaningfully accurate metric after basics
        datum.relevance = Math.round(comparative * 1000)/1000
        datum.x = article.publishedAt.split("T")[0]
        const score = (datum.relevance/0.25) * (Math.round(((contentSentiment.score * ratio) + (titleSentiment.score * (1-ratio))) * 1000) /1000);
        datum.y = Math.round(score * 1000)/1000
        processingData.push(datum)
    })
    payload.scatterData = processingData;
    payload.lineData = averageDayScores(processingData);
    payload.total = calculateTotals(processingData);

    return payload
}

const calculateTotals = data => {
    const total = {}
    total.highScore = data[0];
    data.forEach(datum => {
        total.score = total.score ? total.score + datum.y : datum.y
        total.count = total.count ? total.count + 1 : 1
        total.highScore = Math.abs(datum.y) > Math.abs(total.highScore.y) ? datum : total.highScore
    })
    total.average = total.score/total.count;
    return total
}

const averageDayScores = data => {
    const processedData = {}
    const count = {}
    data.forEach(datum => {
        processedData[datum.x] = processedData[datum.x] ? processedData[datum.x] + datum.y : datum.y;
        count[datum.x] = count[datum.x] ? count[datum.x] + 1 : 1
    })

    const averagedData = []
    Object.keys(processedData).forEach(date => {
        averagedData.push({[date]: {x: date, y: Math.round((processedData[date] / count[date]) * 1000) / 1000}});
    })
    
    const sortedAveragedData = averagedData.sort(sortDate)
    return sortedAveragedData
}

const sortDate = (a, b) => {
    const date1 = new Date(a.x)
    const date2 = new Date(b.x)
    if (date1 >= date2){ 
        return 1
    } else {
        return -1
    }
}

