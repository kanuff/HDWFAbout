// mimic react style

export default class Chart{
    constructor(props){
        this.data = props.data
    }
}

Chart.dummyData = () => {
    const dummyData = []
    const dataLength = 10;
    const mag = 15;
    for (let x = 0; x < dataLength; x++) {
        const y = Math.floor(Math.random() * 2 * mag) - mag;
        const datum = [x, y];
        dummyData.push(datum);
    }
    return dummyData
}

Chart.build = (data) => {
    const xdata = []
    const ydata = []
    data.forEach(datum => {
        xdata.push(datum[0])
        ydata.push(datum[1])
    })
    const margin = {
        top: 50,
        right: 25,
        bottom: 50,
        left:40,
    }
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    //create the chart object
    // let svg = document.createElement("svg")
    const svg = d3.select('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .style('background-color', 'lightblue')
        .append("g")
            .attr("transform", `translate(${margin.left}, ${margin.top})`)

    const xscl = d3.scaleLinear()
        .domain([0, d3.max(xdata)])
        .range([0, width]);

    const yscl = d3.scaleLinear()
        .domain([d3.max(ydata), d3.min(ydata)])
        .range([0, height]);

    const x_axis = d3.axisBottom()
                    .scale(xscl)
    const y_axis = d3.axisLeft()
                    .scale(yscl)

    svg.append("g")
        .attr("transform", `translate(0,${(height/2)})`)
        .attr("class", `xaxis`)
        .call(x_axis)

    svg.append("g")
        .attr("class", `yaxis`)
        .call(y_axis);

    // create line generator
    const line = d3.line()
        .x((d, i) => (xscl(i)))
        .y((d,i) => (yscl(d)))
        .curve(d3.curveMonotoneX);

    // draw the line
    svg.append("path")
            .attr("fill", "none")
            .attr("stroke", "black")
            .attr("stroke-width", "2px")
        .datum(ydata)
            .attr("class", "line")
            .attr("d", line);
}

Chart.update = (data) => {
    const svg = d3.select('svg')
    const ydata = []
    data.forEach(datum => {
        ydata.push(datum[1])
    })

    svg.data(data)
        .enter().append("path")
            .attr("fill", "none")
            .attr("stroke", "black")
            .attr("stroke-width", "2px")
        .datum(ydata)
            .attr("class", "line")
            .attr("d", line);

}

Chart.render = ({ data }) => {
    const svg = d3.select('svg').data(data)
    const ydata = []
    data.forEach(datum => {
        ydata.push(datum[1])
    })

    svg.enter().append('path')
            .attr("fill", "none")
            .attr("stroke", "black")
            .attr("stroke-width", "2px")
        .datum(ydata)
            .attr("class", "line")
            .attr("d", line);
    svg.exit().remove();
}