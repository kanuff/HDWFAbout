// mimic react style

export default class Chart{
    constructor(props){
        this.data = props.data
        this.margin = {
            top: 50,
            right: 50,
            bottom: 70,
            left: 20,
        }
        this.cutoff = 3
        this.good = this.cutoff
        this.bad = this.cutoff * -1
        this.width = 900 - this.margin.left - this.margin.right;
        this.height = 500 - this.margin.top - this.margin.bottom;
        this.svg = d3.select('svg')
            .attr('width', this.width + this.margin.left + this.margin.right)
            .attr('height', this.height + this.margin.top + this.margin.bottom)
            .style('background-color', 'rgba(255,255,255, 0.1)')
            .append("g")
            .attr("transform", `translate(${this.margin.left}, ${this.margin.top})`)
    }

    dummyData(){
        const dummyData = []
        const dataLength = 15;
        const mag = 25;
        for (let x = 0; x < dataLength; x++) {
            const y = Math.floor(Math.random() * 2 * mag) - mag;
            const datum = {x, y};
            dummyData.push(datum);
        }
        return dummyData
    }

    build(data){
        const xdata = []
        const ydata = []
        data.forEach(datum => {
            xdata.push(datum.x)
            ydata.push(datum.y)
        })
        const width = this.width
        const height = this.height
        const good = this.good
        const bad = this.bad

        //create the chart object
        const svg = this.svg

        const xscl = d3.scaleLinear()
            .domain([0, d3.max(xdata)])
            .range([0, width]);
        this.xscl = xscl
        
        const yscl = d3.scaleLinear()
        .domain([d3.max(ydata), d3.min(ydata)])
        .range([0, height]);
        this.yscl = yscl

        const x_axis = d3.axisBottom()
                        .scale(xscl)

        const y_axis = d3.axisLeft()
                        .scale(yscl)

        svg.append("g")
            .attr("transform", `translate(0,${(yscl(0))})`)
            .attr("class", `xaxis`)
            .call(x_axis)

        svg.append("g")
            .attr("class", `yaxis`)
            .call(y_axis);

        // create line generator

        const line = d3.line()
            .x( d => { return xscl(d.x) } )
            .y( d => { return yscl(d.y) } )
            .curve(d3.curveMonotoneX);

        // draw the line
        svg.append('path')
                .attr("fill", "none")
                .attr("stroke", "whitesmoke")
                .attr("stroke-width", "1.5px")
            .data([data])
                .attr("class", "line")
                .attr("d", line);

        svg.append("line")
            .attr("x1", 0)
            .attr("y1", yscl(bad))
            .attr("x2", width)
            .attr("y2", yscl(bad))
            .attr("fill", "none")
            .attr("stroke", "red")
            .attr("stroke-width", "1px")
            .attr("class", "bad-line")
            .style("stroke-dasharray", ("3, 3"))

        svg.append("line")
                .attr("x1", 0)
                .attr("y1", yscl(good))
                .attr("x2", width)
                .attr("y2", yscl(good))
                .attr("fill", "none")
                .attr("stroke", "green")
                .attr("stroke-width", "1px")
                .attr("class", "good-line")
                .style("stroke-dasharray", ("3, 3"));

        svg.append("text")
            .attr("y", yscl(good) - 5 )
            .attr("x", width-100)
            .attr("class", "good-label")
            .attr("text-anchor", "right")
            .style("fill", "rgba(0, 128, 0, 0.6)")
            .text("+ sentiment")

        svg.append("text")
            .attr("y", yscl(bad) + 15 )
            .attr("x", width-100)
            .attr("class", "bad-label")
            .attr("text-anchor", "right")
            .style("fill", "rgba(200, 0, 0, 0.6)")
            .text("- sentiment")
        
    }



    render(payload){
        const data = payload.lineData;
        const scatterData = payload.scatterData;
        const total = payload.total
        let svg = this.svg;
        const ydata = []
        const xdata = []
        const height = this.height
        const width = this.width
        const good = this.good
        const bad = this.bad

        console.log(total)
        d3.select(".chart-title")
            .data([total])
                .transition()
                .ease(d3.easeExp)
                .duration(2000)
                .style("color", d => {
                    console.log(d3.select("Inside the function"))
                    if (d.average > 0.13) {
                        return `rgba(${40 * Math.sqrt(d.average)}, ${128 * Math.sqrt(d.average)}, ${40 * Math.sqrt(d.average)}, 0.97)`
                    } else if (d.average < -0.13) {
                        return `rgba(${128 * Math.sqrt(Math.abs(d.average))}, ${40 * Math.sqrt(Math.abs(d.average))}, ${40 * Math.sqrt(Math.abs(d.average))}, 0.97)`
                    } else {
                        return `rgba(${255 * Math.sqrt(Math.abs(d.average))}, ${255 * Math.sqrt(Math.abs(d.average))}, ${255 * Math.sqrt(Math.abs(d.average))}, 0.8)`
                    }
                })

        const singleArticleInfo = d3.select(".article-info-container")

        scatterData.forEach(datum => {
            ydata.push(datum.y)
            xdata.push(datum.x)
        })

        const parseTime = d3.timeParse("%Y-%m-%d")
        const xFormat = "%b-%d";
        const xscl = d3.scaleTime()
            .domain(d3.extent(data, d => { return parseTime(d.x) }))
            .range([0, width]);

        const x_axis = d3.axisBottom()
            .scale(xscl)
            

        const yscl = d3.scaleLinear()
            .domain([d3.max(ydata), d3.min(ydata)])
            .range([0, height]);

        const y_axis = d3.axisLeft()
            .scale(yscl)

        svg.select(".xaxis")
                .transition()
                .ease(d3.easeExp)
                .duration(2000)
            .attr("transform", `translate(0,${yscl(0)})`)
            .call(x_axis.tickFormat(d3.timeFormat(xFormat)))
                .selectAll("text")
                .attr("y", 0)
                .attr("x", 9)
                .attr("dy", ".35em")
                .attr("transform", "rotate(90)")
                .style("text-anchor", "start")
                .style("fill", "white")

        svg.select(".good-label")
            .transition()
            .ease(d3.easeExp)
            .duration(2000)
            .attr("y", yscl(good) - 5)
            .attr("x", width - 100)
            .attr("display", () => {
                if (yscl(good) < 0) {
                    return "none"
                } else {
                    return "inherit"
                }
            })
        svg.select(".bad-label")
            .transition()
            .ease(d3.easeExp)
            .duration(2000)
            .attr("y", yscl(bad) + 15)
            .attr("x", width - 100)
            .attr("display", () => {
                if (yscl(bad) > height) {
                    return "none"
                } else {
                    return "inherit"
                }
            })

        svg.select(".yaxis")
            .transition()
            .ease(d3.easeExp)
            .duration(2000)
            .call(y_axis)
            .selectAll("text")
            .style("fill", "white")

        const line = d3.line()
            .x(d => { return xscl(parseTime(d.x)); })
            .y(d => { return yscl(d.y); })
            .curve(d3.curveMonotoneX);

        svg.selectAll('.line')
            .data([data])
                .transition()
                .ease(d3.easeExp)
                .duration(2000)
                .attr("class", "line")
                .attr("d", line);

        svg.select(".good-line")
            .transition()
            .ease(d3.easeExp)
            .duration(2000)
            .attr("x1", 0)
            .attr("y1", yscl(good))
            .attr("x2", width)
            .attr("y2", yscl(good))
            .attr("display", d => {
                if (yscl(good) < 0) {
                    return "none"
                } else {
                    return "inherit"
                }
            })

        svg.select(".bad-line")
            .transition()
            .ease(d3.easeExp)
            .duration(2000)
            .attr("x1", 0)
            .attr("y1", yscl(bad) )
            .attr("x2", width)
            .attr("y2", yscl(bad))
            .attr("display", d => {
                if (yscl(bad) > height) {
                    return "none"
                } else {
                    return "inherit"
                }
            } )

        

        const createDots = svg.selectAll(".dot")
            .data(scatterData)
            .enter().append("circle")
            .attr("class", "dot")
            
        createDots
            .on("click", d => {
                window.open(d.url, "_blank")
            })
            .on("mouseover", function(d) {
                d3.selectAll(".dot")
                    .style("fill", function(d){
                        if (d.y >= good) {
                            return "green"
                        } else if (d.y <= bad) {
                            return "red"
                        } else {
                            return "white"
                        }
                    })
                    .style("opacity", function(d){
                        if (d.y >= good) {
                            return "0.5"
                        } else if (d.y <= bad) {
                            return "0.5"
                        } else {
                            return "0.3"
                        }
                    })
                d3.select(this)
                    .style("opacity", 1)
                    .style("fill", "lightblue");
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
            })

        let bigDot;
        createDots
            .transition()
            .ease(d3.easeExp)
            .duration(2000)
            .attr("cx", d => { return xscl(parseTime(d.x)) })
            .attr("cy", d => { return yscl(d.y) })
            .attr("r", (d,i) => {
                if (d.title === total.highScore.title) {
                    bigDot = "dot_" + i
                    return 1
                }
                return 40 * d.relevance
            })
            .attr("id", (d,i) => {
                return "dot_" + i
            })
            .style("opacity", d => {
                if (d.y >= good) {
                    return "0.5"
                } else if (d.y <= bad) {
                    return "0.5"
                } else {
                    return "0.3"
                }
            })
            .style("fill", d => {
                if (d.y >= good) {
                    return "green"
                } else if (d.y <= bad) {
                    return "red"
                } else {
                    return "white"
                }
            });

        const updateDots = svg.selectAll(".dot")
            .data(scatterData)
                // .each( function(d) {
                //     d3.select(this)
                //     .attr("class", "iwasselected")
                // })

        updateDots
            .transition()
            .ease(d3.easeExp)
            .duration(2000)
            .attr("class", "dot")
            .attr("cx", d => { return xscl(parseTime(d.x)) })
            .attr("cy", d => { return yscl(d.y) })
            .attr("r", function(d, i){
                if (d.title === total.highScore.title) {
                    bigDot = "dot_" + i
                    setTimeout(() => {
                        d3.select(this)
                            .transition()
                            .ease(d3.easeElastic)
                            .duration(2500)
                            .attr("r", 40 * d.relevance)
                            .style("fill", "lightblue" )
                            .style("opacity", 1);
                        setTimeout(() =>{
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
                            singleArticleInfo
                                // .transition()
                                // .ease(d3.easeLinear)
                                // .duration(500)
                                .style("background-color", "rgba(255,255,255,0.3)")
                            setTimeout(() => {
                                singleArticleInfo
                                    .style("background-color", "transparent")  
                            }, 500)
                        }, 800)
                        
                    }, 1800)
                    return 100 * d.relevance
                }
                return 40 * d.relevance
            })
            .style("opacity", d => {
                if (d.y >= good) {
                    return "0.5"
                } else if (d.y <= bad) {
                    return "0.5"
                } else {
                    return "0.3"
                }
            })
            .style("fill", d => {
                if (d.y >= good) {
                    return "green"
                } else if (d.y <= bad) {
                    return "red"
                } else {
                    return "white"
                }
            });

        svg.selectAll(".dot")
            .data(scatterData)
            .exit().remove();
        
        // setTimeout(() => {
        //     console.log("ENTERED TIMEOUT")
        //     const pulsar = d3.select(`#${bigDot}`)
        //     console.log(bigDot)
        //     pulsar
        //         .transition()
        //         .ease(d3.easeElastic)
        //         .duration(2000)
        //         .attr("r", 20)
        // }, 2000)
    }
}