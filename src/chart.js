import {
    conditionalColor,
    conditionalDisplay,
    conditionalOpacity,
    conditionalTitleColor,
    fillArticleInfo,
    handleDotUX
} from './chart_utils'

const sortDate = (a, b) => {
    const date1 = new Date(a.x)
    const date2 = new Date(b.x)
    if (date1 >= date2) {
        return 1
    } else {
        return -1
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
        const formattedDate = `${date.getFullYear()}` + "-" + `0${date.getMonth() +1}` + "-" + `${date.getDate()}`
        dates.push({[formattedDate]: {x: formattedDate, y: null}})
        currentDate.addDay()
    }
    return dates
}

const mergeOnDates = (dataset, daterange) => {
    const merged = []
    daterange.forEach((date,i) => {
        const d1 = new Date(dataset[i].x)
        const d2 = new Date(date)
        debugger

    })
}


export default class Chart{
    constructor(props){
        this.data = props.data
        this.margin = {
            top: 50,
            right: 80,
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
        const today = new Date()
        this.startDate = new Date(today.setDate(today.getDate() - 31))
        this.endDate = new Date();
        this.dateRange = generateDateRange(this.startDate, this.endDate)
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
        const { svg, height, width, good, bad } = this
        const xdata = []
        const ydata = []
        data.forEach(datum => {
            xdata.push(datum.x)
            ydata.push(datum.y)
        })
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
            .curve(d3.curveBundle.beta(0.85));

        svg.append("text")
            .attr("y", yscl(good) - 5 )
            .attr("x", 15)
            .attr("class", "good-label")
            .attr("text-anchor", "right")
            .style("fill", "rgba(0, 128, 0, 0.6)")
            .text("+ sentiment")

        svg.append("text")
            .attr("y", yscl(bad) + 15 )
            .attr("x", 15)
            .attr("class", "bad-label")
            .attr("text-anchor", "right")
            .style("fill", "rgba(200, 0, 0, 0.6)")
            .text("- sentiment")

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

        // draw the line
        svg.append('path')
            .attr("fill", "none")
            .attr("stroke", "lightgrey")
            .attr("stroke-width", "1.5px")
            .attr("stroke-linecap", "round")
            .data([data])
            .attr("class", "line")
            .attr("d", line);
    }

    render(payload){
        const { scatterData, total } = payload
        const { svg, height, width, good, bad } = this
        const ydata = []
        const xdata = []
        const singleArticleInfo = d3.select(".article-info-container")


        const prelineData = Object.assign(
            [],
            this.dateRange,
            payload.lineData
        )

    
        debugger

        const plineData = []
        prelineData.forEach(outerDatum => {
            plineData.push(Object.values(outerDatum))
        })
        const lineData = plineData.flat().sort(sortDate)
        debugger


        conditionalTitleColor(total);

        scatterData.forEach(datum => {
            ydata.push(datum.y)
            xdata.push(datum.x)
        })

        const parseTime = d3.timeParse("%Y-%m-%d")
        const xFormat = "%b-%d";
        const xscl = d3.scaleTime()
            .domain(d3.extent(lineData, d => { return parseTime(d.x) }))
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
            .attr("x", 15)
            .attr("display", () => conditionalDisplay(yscl(good), 0, false))

        svg.select(".bad-label")
            .transition()
            .ease(d3.easeExp)
            .duration(2000)
            .attr("y", yscl(bad) + 15)
            .attr("x", 15)
            .attr("display", () => conditionalDisplay(yscl(bad), height, true))

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
            // .defined(d => {
            //     debugger
            //     if (d.y) {
            //         return true
            //     } else {
            //         return false
            //     }
            // })
            .curve(d3.curveBundle.beta(0.85));

        const path = svg.selectAll('.line');
        debugger
        path
            .data([lineData])
            .transition()
            .ease(d3.easeExp)
            .duration(2000)
            .attr("class", "line")
            .attr("d", line)

        svg.select(".good-line")
            .transition()
            .ease(d3.easeExp)
            .duration(2000)
            .attr("x1", 0)
            .attr("y1", yscl(good))
            .attr("x2", width)
            .attr("y2", yscl(good))
            .attr("display", () => conditionalDisplay(yscl(good), 0, false))

        svg.select(".bad-line")
            .transition()
            .ease(d3.easeExp)
            .duration(2000)
            .attr("x1", 0)
            .attr("y1", yscl(bad) )
            .attr("x2", width)
            .attr("y2", yscl(bad))
            .attr("display", () => conditionalDisplay(yscl(bad), height, true))
            
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
                    .style("fill", d => conditionalColor(d, good, bad))
                    .style("opacity", d => conditionalOpacity(d, good, bad))
                d3.select(this)
                    .style("opacity", 1)
                    .style("fill", "lightblue");
                fillArticleInfo(singleArticleInfo, d)
            })

        createDots
            .transition()
            .ease(d3.easeExp)
            .duration(2000)
            .attr("cx", d => { return xscl(parseTime(d.x)) })
            .attr("cy", d => { return yscl(d.y) })
            .attr("r", d => {
                if (d.title === total.highScore.title) {
                    return 1
                }
                return 40 * d.relevance
            })
            .attr("id", (_,i) => {return "dot_" + i})
            .style("opacity", d => conditionalOpacity(d, good, bad))
            .style("fill", d => conditionalColor(d, good, bad));

        const updateDots = svg.selectAll(".dot")
            .data(scatterData)

        let bigDot;
        updateDots
            .transition()
            .ease(d3.easeExp)
            .duration(2000)
            .attr("class", "dot")
            .attr("cx", d => { return xscl(parseTime(d.x)) })
            .attr("cy", d => { return yscl(d.y) })
            .attr("r", function(d, i){
                let r;
                if (d.title === total.highScore.title) {
                    bigDot = d3.select(this)
                    handleDotUX(d, bigDot, singleArticleInfo);
                    r = 100 * d.relevance
                } else {
                    r = 40 * d.relevance
                }
                return r
            })
            .style("opacity", d => conditionalOpacity(d, good, bad) )
            .style("fill", d => conditionalColor(d, good, bad));

        svg.selectAll(".dot")
            .data(scatterData)
            .exit().remove();
    }
}