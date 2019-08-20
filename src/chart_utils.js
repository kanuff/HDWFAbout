const conditionalTitleColor = (total) => {
    d3.select(".chart-title")
        .data([total])
        .transition()
        .ease(d3.easeExp)
        .duration(2000)
        .style("color", d => {
            if (d.average > 0.13) {
                return `rgba(${40 * Math.sqrt(d.average)}, ${128 * Math.sqrt(d.average)}, ${40 * Math.sqrt(d.average)}, 0.97)`
            } else if (d.average < -0.13) {
                return `rgba(${128 * Math.sqrt(Math.abs(d.average))}, ${40 * Math.sqrt(Math.abs(d.average))}, ${40 * Math.sqrt(Math.abs(d.average))}, 0.97)`
            } else {
                return `rgba(${255 * Math.sqrt(Math.abs(d.average))}, ${255 * Math.sqrt(Math.abs(d.average))}, ${255 * Math.sqrt(Math.abs(d.average))}, 0.8)`
            }
        })
    d3.select("#second-title")
        .data([total])
        .transition()
        .ease(d3.easeExp)
        .duration(2000)
        .style("color", d => {
            if (d.average > 0.13) {
                return `rgba(${40 * Math.sqrt(d.average)}, ${128 * Math.sqrt(d.average)}, ${40 * Math.sqrt(d.average)}, 0.97)`
            } else if (d.average < -0.13) {
                return `rgba(${128 * Math.sqrt(Math.abs(d.average))}, ${40 * Math.sqrt(Math.abs(d.average))}, ${40 * Math.sqrt(Math.abs(d.average))}, 0.97)`
            } else {
                return `rgba(${255 * Math.sqrt(Math.abs(d.average))}, ${255 * Math.sqrt(Math.abs(d.average))}, ${255 * Math.sqrt(Math.abs(d.average))}, 0.8)`
            }
        })
}

const conditionalDisplay = (attr_value, cutoff, greaterThan = true) => {
    switch (greaterThan) {
        case true:
            if (attr_value > cutoff) {
                return "none"
            } else {
                return "inherit"
            }
        case false:
            if (attr_value < cutoff) {
                return "none"
            } else {
                return "inherit"
            }
        default:
            return "inherit"
    }
}

const conditionalOpacity = (d, good, bad) => {
    if (d.y >= good) {
        return "0.5"
    } else if (d.y <= bad) {
        return "0.5"
    } else {
        return "0.3"
    }
}

const conditionalColor = (d, good, bad, opacity=1) => {
    if (d.y >= good) {
        return `rgba(0,128,0, ${opacity}`
    } else if (d.y <= bad) {
        return `rgba(255,0,0, ${opacity}`
    } else {
        return `rgba(255,255,255, ${opacity}`
    }
}

const fillArticleInfo = (singleArticleInfo, d) => {
    singleArticleInfo.select(".article-title")
        .text(
            `${d.title}`
    ).transition()
        .ease(d3.easeExp)
        .duration(1700)
        .style("color", "rgba(255,255,255, 0.5)");
    singleArticleInfo.select(".article-author")
        .text(
            `${d.source}`
    ).transition()
        .ease(d3.easeExp)
        .duration(1700)
        .style("color", "rgba(255,255,255, 0.5)");
    // singleArticleInfo.select(".article-sentiment")
    //     .text(
    //         `${d.y}`
    //     );
    // singleArticleInfo.select(".article-relevance")
    //     .text(
    //         `${d.relevance}`
    //     );
    singleArticleInfo.select(".article-description")
        .text(
            `${d.description}`
        )
        .transition()
        .ease(d3.easeExp)
        .duration(1700)
        .style("color", "rgba(255,255,255, 0.5)")

    singleArticleInfo.select(".article-image")
        .attr("src", `${d.image}`)
    singleArticleInfo.select(".read-more")
        .attr("href", `${d.url}`)
}

const handleDotUX = (d, bigDot, singleArticleInfo, speed = 1, intialize_duration = 0) => {
    const delay = 2000 + intialize_duration
    console.log(delay)
    if (speed >= 1){
        // setTimeout(() => {
            bigDot
                .transition()
                .delay(delay)
                .ease(d3.easeElastic)
                .duration(2500)
                .attr("r", 8)
                .style("fill", "darkblue")
                .style("opacity", 1);
            if(speed >= 1){
                // setTimeout(() => {
                    singleArticleInfo
                    .transition()
                    .delay(delay + 500)
                    .duration(800)
                    .style("background-color", "rgba(0, 0, 139, 0.5)");

                    fillArticleInfo(singleArticleInfo, d);

                    singleArticleInfo
                        .transition()
                        .delay(delay + 1350)
                        .duration(800)
                        .style("background-color", "transparent")
                // }, 800*speed)
            }
        // }, delay*speed)
    } else {
        bigDot
            .style("fill", "darkblue")
            .style("opacity", 1);
        bigDot
            .transition()
            .ease(d3.easeLinear)
            .duration(300)
            .attr("r", 8)
        fillArticleInfo(singleArticleInfo, d);
    }
}

Date.prototype.addDay = function () {
    this.setDate(this.getDate() + 1)
}

const generateDateRange = (startDate, endDate) => {
    const dates = []
    let currentDate = startDate
    while (currentDate < endDate) {
        const date = new Date(currentDate)
        const formattedDate = `${date.getFullYear()}` + "-" + `0${date.getMonth() + 1}` + "-" + `${date.getDate()}`
        dates.push({ [formattedDate]: { x: formattedDate, y: null } })
        currentDate.addDay()
    }
    return dates
}

const sortDate = (a, b) => {
    const date1 = new Date(a.x)
    const date2 = new Date(b.x)
    if (date1 >= date2) {
        return 1
    } else {
        return -1
    }
}

const mergeLineData = (dateRange, lineData) => {
    const mergedData = Object.assign([], dateRange, lineData)
    const unkeyedData = []
    mergedData.forEach(outerDatum => {
        unkeyedData.push(Object.values(outerDatum))
    })
    return unkeyedData.flat().sort(sortDate)
}



const initialRender = (svg, intialize_duration, total) => {
    // d3.select("#chart")
    //     .transition()
    //     .ease(d3.easeCubic)
    //     .duration(intialize_duration)
    //     .style("box-shadow", "1px 1px 5px 0px black")
    // d3.select("#articles-list")
    //     .transition()
    //     .ease(d3.easeCubic)
    //     .duration(intialize_duration)
    //     .style("box-shadow", "1px 1px 5px 0px black")
    // d3.select(".article-info")
    //     .transition()
    //     .ease(d3.easeCubic)
    //     .duration(intialize_duration)
    //     .style("box-shadow", "1px 1px 5px 0px black")

    // svg.select(".xaxis > path")
    //     .transition("appear")
    //     .ease(d3.easeCubic)
    //     .duration(intialize_duration)
    //     .style("opacity", 1)

    // svg.selectAll(".xaxis > .tick > line")
    //     .transition("appear")
    //     .ease(d3.easeCubic)
    //     .duration(intialize_duration)
    //     .style("opacity", 1)
    
    // svg.select(".yaxis")
    //     .transition("appear")
    //     .ease(d3.easeCubic)
    //     .duration(intialize_duration)
    //     .style("opacity", 1)

    d3.select("#main")
        .transition("appear")
        .ease(d3.easeCubic)
        .duration(intialize_duration*0.8)
        .style("top", "0px")
        // .style("background", "rgba(0,0,0,0.05)")

    d3.select(".article-image")
        .transition("appear")
        .delay(500)
        .ease(d3.easeCubic)
        .duration(intialize_duration + 300)
        .style("opacity", 1)
    

    d3.select(".info-container")
        .transition("appear")
        .delay(500)
        .ease(d3.easeCubic)
        .duration(intialize_duration+300)
        .style("opacity", 1)

    return false


}


export {
    conditionalTitleColor,
    conditionalDisplay,
    conditionalOpacity,
    conditionalColor,
    fillArticleInfo,
    handleDotUX,
    generateDateRange,
    sortDate,
    mergeLineData,
    initialRender
}