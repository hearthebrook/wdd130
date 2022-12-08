const baseurl = "https://api.quotable.io/";

function quoteTemplate(quote){
    return `
        <p>
        "
        ${quote.content}
        "
        </p>
        <p class="author">--${quote.author}</p>`;
}

async function getQuote(url){
    // fetch
    try {
    const response = await fetch(url+'random');
    if (response.ok) {
        const data = await response.json();
        return data;
    }
    } catch (error) {
        console.log(error);
    }
}

async function renderQuote(selector){
    const quote = await getQuote(baseurl);
    const element = document.querySelector(selector);
    const html = quoteTemplate(quote);
    element.innerHTML = html;
    console.log(quote)

}




renderQuote("#quote");




// when clicked: render new quote.
/*
document.querySelector('#newQuote').addEventListener('click', function(e) {
    renderQuote("#quoteContainer")
});
*/