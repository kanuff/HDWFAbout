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
        const margin = this.margin

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
                .attr("stroke-width", "2px")
            .data([data])
                .attr("class", "line")
                .attr("d", line);

        svg.append("line")
            .attr("x1", 0)
            .attr("y1", yscl(-5))
            .attr("x2", width)
            .attr("y2", yscl(-5))
            .attr("fill", "none")
            .attr("stroke", "red")
            .attr("stroke-width", "1px")
            .attr("class", "bad-line")
            .style("stroke-dasharray", ("3, 3"))

        svg.append("line")
            .attr("x1", 0)
            .attr("y1", yscl(5))
            .attr("x2", width)
            .attr("y2", yscl(5))
            .attr("fill", "none")
            .attr("stroke", "green")
            .attr("stroke-width", "1px")
            .attr("class", "good-line")
            .style("stroke-dasharray", ("3, 3"))
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
        console.log(d3.select(".chart-title"))
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
            .attr("y1", yscl(5))
            .attr("x2", width)
            .attr("y2", yscl(5))
            .attr("display", d => {
                if (yscl(5) < 0) {
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
            .attr("y1", yscl(-5) )
            .attr("x2", width)
            .attr("y2", yscl(-5))
            .attr("display", d => {
                if (yscl(-5) > height) {
                    return "none"
                } else {
                    return "inherit"
                }
            } )

        // const main = d3.select("#main")
        // let startDate = parseTime(d3.min(xdata))
        // let endDate = parseTime(d3.max(xdata))


        // main.append("div")
        //     .html(
        //     // `${startDate.getDay()}` + "-" +
        //         "...Between " +
        //         `${startDate.toLocaleString('default', { month: 'short' })}` + " And " +
        //         `${endDate.toLocaleString('default', { month: 'short' })}`
        //     )
        //     .attr("class","date")

        const createDots = svg.selectAll(".dot")
            .data(scatterData)
            .enter().append("circle")
            .attr("class", "dot");
            
        createDots
            .on("click", d => {
                window.open(d.url, "_blank")
            })
            .on("mouseover", function(d) {
                d3.selectAll(".dot")
                    .style("fill", function(d){
                        if (d.y >= 5) {
                            return "green"
                        } else if (d.y <= -5) {
                            return "red"
                        } else {
                            return "white"
                        }
                    })
                    .style("opacity", function(d){
                        if (d.y >= 5) {
                            return "0.5"
                        } else if (d.y <= -5) {
                            return "0.5"
                        } else {
                            return "0.3"
                        }
                    })
                d3.select(this)
                    .style("opacity", 1)
                    .style("fill", "lightblue");
                singleArticleInfo.transition()
                    .duration(200)
                    .style("opacity", 1);
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

        createDots
            .transition()
            .ease(d3.easeExp)
            .duration(2000)
            .attr("cx", d => { return xscl(parseTime(d.x)) })
            .attr("cy", d => { return yscl(d.y) })
            .attr("r", d => {return 40 * d.relevance})
            .attr("id", (d,i) => {return "dot_" + i})
            .style("opacity", d => {
                if (d.y >= 5) {
                    return "0.5"
                } else if (d.y <= -5) {
                    return "0.5"
                } else {
                    return "0.3"
                }
            })
            .style("fill", d => {
                if (d.y >= 5) {
                    return "green"
                } else if (d.y <= -5) {
                    return "red"
                } else {
                    return "white"
                }
            });


        const updateDots = svg.selectAll(".dot")
            .data(scatterData)

        updateDots
            .transition()
            .ease(d3.easeExp)
            .duration(2000)
            .attr("class", "dot")
            .attr("cx", d => { return xscl(parseTime(d.x)) })
            .attr("cy", d => { return yscl(d.y) })
            .attr("r", d => { return 40 * d.relevance })
            .style("opacity", d => {
                if (d.y >= 5) {
                    return "0.5"
                } else if (d.y <= -5) {
                    return "0.5"
                } else {
                    return "0.3"
                }
            })
            .style("fill", d => {
                if (d.y >= 5) {
                    return "green"
                } else if (d.y <= -5) {
                    return "red"
                } else {
                    return "white"
                }
            });

        svg.selectAll(".dot")
            .data(scatterData)
            .exit().remove();
    }
}