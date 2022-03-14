


const detailContainer = document.querySelector(".museumProducts");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);


//i think -just as with the response and details making a fetch- that the querystring goes inside the params which then goes inside the id
//the script.js has the innerhtml-stuff inside an "a href" because the entire card is cliackable, inside of the card we already have clicked what there is to click, entire card, entire innerHTML, every card contains all of the innerHTML, again and again, the contents of the a href is copied into every card, one card represetns all of them

const id = params.get("id");

console.log(id);


const url = "https://www.sciencemuseum.one/wp-json/wc/store/products/" + id;

console.log(url);

async function fetchGame() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        createHtml(details);
       
      
    }
    catch(error) {
        console.log(error);
        detailContainer.innerHTML = message("error", error);
    }
    
}

fetchGame();

function createHtml(details) {

    var i;
        for (var i = 1; i <details.length; i++ );
    detailContainer.innerHTML = `<h1>${details.name}</h1>
                                <div class="details-image" 
                                         style="background-image: url(${details.images[i].src});"></div>
                                         <h4 class="name">$${details.prices.price}</h4> 
                                <div class="details-description">${details.description}</div>
                               
                             `;
}
