// mimic react style

export default class Chart{
    constructor(props){
        this.data = props.data
        this.margin = {
            top: 50,
            right: 25,
            bottom: 50,
            left: 40,
        }
        this.width = 600 - this.margin.left - this.margin.right;
        this.height = 400 - this.margin.top - this.margin.bottom;
        this.svg = d3.select('svg')
            .attr('width', this.width + this.margin.left + this.margin.right)
            .attr('height', this.height + this.margin.top + this.margin.bottom)
            .style('background-color', 'lightblue')
            .append("g")
            .attr("transform", `translate(${this.margin.left}, ${this.margin.top})`)
    }

    dummyData(){
        const dummyData = []
        // const dataLength = Math.floor(Math.random() * 25) + 3;
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
            .attr("transform", `translate(0,${(height/2)})`)
            .attr("class", `xaxis`)
            .call(x_axis)

        svg.append("g")
            .attr("class", `yaxis`)
            .call(y_axis);

        // create line generator

        const line = d3.line()
            .x( d => { console.log(d); return xscl(d.x) } )
            .y( d => { return yscl(d.y) } )
            .curve(d3.curveMonotoneX);


        // draw the line
        svg.append('path')
                .attr("fill", "none")
                .attr("stroke", "red")
                .attr("stroke-width", "2px")
            .data([data])
                .attr("class", "line")
                .attr("d", line);
    }

    render(data){
        const svg = this.svg;
        const ydata = []
        const xdata = []
        const height = this.height
        const width = this.width

        data.forEach(datum => {
            ydata.push(datum.y)
            xdata.push(datum.x)
        })

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

        svg.select(".xaxis")
            .transition()
            .ease(d3.easeExp)
            .duration(2000)
            .call(x_axis);

        svg.select(".yaxis")
            .transition()
            .ease(d3.easeExp)
            .duration(2000)
            .call(y_axis);


        const line = d3.line()
            .x(d => { console.log(d); return xscl(d.x) })
            .y(d => { return yscl(d.y) })
            .curve(d3.curveMonotoneX);

        svg.selectAll('.line')
                .attr("fill", "none")
                .attr("stroke", "black")
                .attr("stroke-width", "2px")
            .data([data])
                .attr("class", "line")
                .transition()
                .ease(d3.easeExp)
                .duration(2000)
                .attr("d", line);

        svg.selectAll('path')
            .exit().remove();
    }
}