import { fetchEverythingFor } from './news'


export default (props) => {

    const form = document.createElement("form");

    const queryInput = document.createElement("input");
    queryInput.setAttribute("type", "text");
    queryInput.setAttribute("class", "query-field");


    form.appendChild(queryInput)
    form.addEventListener("submit", () => {
        event.preventDefault();
        const value = queryInput.value;
        console.log(`I WAS SUBMITTED WITH THE TEXT ${value}`)
        fetchEverythingFor(value)
            .then(data => {
                console.log(data.articles)
                props.articles = data.articles
                console.log(props)
            })
    })

                            
    return (
        form
    )
}
