
const quoteText = document.querySelector(".quote"),
    authorName = document.querySelector(".author .author-name")
    quoteBtn = document.querySelector("button");
    
    function randomQuote(){
        fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
            console.log(result)
            quoteText.innerText = result.content;
            authorName.innerText =  result.author
        }); //  API is still yet to cover in syllabus.
    }
    
    quoteBtn.addEventListener("click", randomQuote);
    
    var myDate = new Date();
        var hrs = myDate.getHours();
    
        var greet;
    
        if (hrs < 12)
            greet = 'morning';
        else if (hrs >= 12 && hrs <= 17)
            greet = 'afternoon';
        else if (hrs >= 17 && hrs <= 24)
            greet = 'night';
    
        document.getElementById('greet-time').innerHTML =   `Let's  start our ` + 
              greet + ` with   new quote` ;