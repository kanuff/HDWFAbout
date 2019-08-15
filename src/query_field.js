import { fetchEverythingFor } from './news'
import { processData } from './sentiment';


export default (props) => {
    const form = document.createElement("form");
    
    const queryInput = document.createElement("input");
    queryInput.setAttribute("type", "text");
    queryInput.setAttribute("class", "query-field");
    
    
    form.appendChild(queryInput)
    form.addEventListener("input", () => debouncedTyping(event, props, queryInput))
    form.addEventListener("submit", () => {
        event.preventDefault();
        // const chart = props.chart
        
        // const value = queryInput.value;
        // console.log(`I WAS SUBMITTED WITH THE TEXT ${value}`)
        // fetchEverythingFor(value)
        //     .then(response => {
        //        const payload = {}
        //        payload.query = value
        //        payload.articles = response.articles
        //        return payload
        //     })
        //     .then( payload => processData(payload) ) // should return array of objects, x is datetime, y is sentiment score
        //     .then( (payload) => {
        //         console.log("Rerendering");
        //         chart.render(payload)
        //     })
    })

                            
    return (
        form
    )
}


const handleTyping = (event,props, queryInput) => {
    event.preventDefault();
    const chart = props.chart
    const value = queryInput.value;
    console.log(`I WAS SUBMITTED WITH THE TEXT ${value}`)
    fetchEverythingFor(value)
        .then(response => {
            const payload = {}
            payload.query = value
            payload.articles = response.articles
            return payload
        })
        .then(payload => processData(payload)) // should return array of objects, x is datetime, y is sentiment score
        .then((payload) => {
            console.log("Rerendering");
            chart.render(payload)
        })
}


// Use for testing, pulled sourced from: https://codeburst.io/throttling-and-debouncing-in-javascript-646d076d0a44
const debounce = (delay, fn) => {
    let timerId;
    return function (...args) {
        if (timerId) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
            fn(...args);
            timerId = null;
        }, delay);
    }
}

const debouncedTyping = debounce(1000, handleTyping);

