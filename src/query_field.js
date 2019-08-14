import { fetchEverythingFor } from './news'
import { processData } from './sentiment';


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
            .then(response => {
                // console.log(response.articles)
                
               return response.articles
            })
            .then( articles => processData(articles) ) // should return array of objects, x is datetime, y is sentiment score
            .then( (payload) => {
                console.log("Rerendering");
                chart.render(payload)
            })


    })

                            
    return (
        form
    )
}
