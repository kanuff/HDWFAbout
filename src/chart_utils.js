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

const conditionalColor = (d, good, bad) => {
    if (d.y >= good) {
        return "green"
    } else if (d.y <= bad) {
        return "red"
    } else {
        return "white"
    }
}

const fillArticleInfo = (singleArticleInfo, d) => {
    singleArticleInfo.select(".article-title")
        .html(
            `${d.title}`
        );
    singleArticleInfo.select(".article-author")
        .html(
            `${d.author}`
        );
    singleArticleInfo.select(".article-sentiment")
        .html(
            `${d.y}`
        );
    singleArticleInfo.select(".article-relevance")
        .html(
            `${d.relevance}`
        );
    singleArticleInfo.select(".article-description")
        .html(
            `${d.description}`
        );
}

const handleDotUX = (d, bigDot, singleArticleInfo) => {
    setTimeout(() => {
        bigDot
            .transition()
            .ease(d3.easeElastic)
            .duration(2500)
            .attr("r", 40 * d.relevance)
            .style("fill", "lightblue")
            .style("opacity", 1);
        setTimeout(() => {
            fillArticleInfo(singleArticleInfo, d);
            singleArticleInfo
                .style("background-color", "rgba(255,255,255,0.3)")
            setTimeout(() => {
                singleArticleInfo
                    .style("background-color", "transparent")
            }, 500)
        }, 800)
    }, 1800)
}

export {
    conditionalTitleColor,
    conditionalDisplay,
    conditionalOpacity,
    conditionalColor,
    fillArticleInfo,
    handleDotUX
}