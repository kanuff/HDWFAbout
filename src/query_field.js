import { fetchEverythingFor } from './news'


export default (props) => {
    const form = document.createElement("form");
    
    const queryInput = document.createElement("input");
    queryInput.setAttribute("type", "text");
    queryInput.setAttribute("class", "query-field");
    
    
    form.appendChild(queryInput)
    form.addEventListener("submit", () => {
        event.preventDefault();
        const chart = props.chart
        
        const value = queryInput.value;
        console.log(`I WAS SUBMITTED WITH THE TEXT ${value}`)
        fetchEverythingFor(value)
            .then(data => {
                console.log(data.articles)
                props.articles = data.articles
            })//.then( data => processData(data) ) // should return array of objects, x is datetime, y is sentiment score
            .then( (processedData) => {
                console.log("Rerendering");
                //chart.render(processedData)
                chart.render([
                    { x: 0, y: 3 },
                    { x: 4, y: 2 },
                    { x: 5, y: 1 },
                ])
            })


    })

                            
    return (
        form
    )
}
