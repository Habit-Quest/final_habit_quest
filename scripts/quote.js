fetch('https://api.paperquotes.com/quotes/?language=en&limit=30&offset=10&tags=love%2Clife')
    .then(response => response.json())
    .then(results => {
        const quote = results.results
        const rand = Math.floor(Math.random() * quote.length);
        const randQuote = results.results[rand];
        

        const p = document.createElement('p'); 
        p.textContent = `${randQuote.quote} - ${randQuote.author}`;
        const h1 = document.querySelector("h1");
        h1.insertAdjacentElement("afterend", p);
    })