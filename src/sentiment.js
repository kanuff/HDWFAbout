
import Sentiment from 'sentiment'


export const processData = (data) => {
    const payload = {}
    const sentiment = new Sentiment();
    console.log(data)
    const processingData = [];
    data.forEach(article => {
        const datum = {}
        datum.x = article.publishedAt.split("T")[0]
        datum.content = article.content || ""
        datum.title = article.title || ""
        datum.source = article.source.name
        datum.url = article.url
        datum.y = (sentiment.analyze(datum.content).score * 0.7) + (sentiment.analyze(datum.title).score * 0.3)
        processingData.push(datum)
    })
    payload.scatterData = processingData;
    const processedData = averageDayScores(processingData);
    payload.lineData = processedData

    return payload
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
        averagedData.push({ x: date, y: processedData[date] / count[date]});
    })
    
    const sortedAveragedData = averagedData.sort(sortDate)
    
    // console.log(sortedAveragedData)

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

