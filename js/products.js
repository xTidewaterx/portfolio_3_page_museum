const resultsContainer = document.querySelector(".results");


const url = "https://www.sciencemuseum.one/wp-json/wc/store/products/";  //https://www.sciencemuseum.one/wp-json/wc/v2 //https://www.sciencemuseum.one/wp-json/wc/v2 this is actually something, route

async function fetchGames() {

    try {
        const response = await fetch(url);
        const json = await response.json();

        console.log(json);
        console.log(json.id);
      
        
        var i;
        for (var i = 0; i <json.length; i++ )  //loop is essential
        
    
       
    {console.log(json[i].images[0].src)};
    
     
    

        resultsContainer.innerHTML = "";

       //different map structure, less variables to get access, forEach gets each of the indexes, from 0, all of them
       //it used the variable games.foreach, here, we are immediately within the indexes, so all we need is the const that awaits the json to use with variableName.forEach
        json.forEach(function(flowers) {
            var i;
            for (var i = 0; i <1; i++ )  //loop is essential
        
            resultsContainer.innerHTML += `<a href="productsdetails.html?id=${flowers.id}" class="card">
                                                <div class="productImage" style="background-image: url(${flowers.images[i].src});"></div>
                                                <div class="details">
                                                    <h4 class="name">${flowers.name}</h4> 
                                                      <h4 class="name">$${flowers.prices.price}</h4> 
                                                                                                                                                                                                        
                                                </div>
                                            </a>`;
        });
      

        //all of the div is clickable, however, what is transferred is different, that goes into the querystring, although you can see that all of the area is a div that goes into details.html
    }
    catch(error) {
        console.log(error);
        resultsContainer.innerHTML = message("error", error);
    }
    
}

fetchGames();



console.log(json.images.src);
