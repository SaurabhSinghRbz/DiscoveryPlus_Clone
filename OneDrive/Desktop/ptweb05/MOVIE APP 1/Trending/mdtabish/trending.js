let API_KEY = "359d8bcbedfc54a371aebda653aeed99";

async function getData(){
    try{ 
    let response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);
    let data = await response.json();
    console.log(data.results);
    displayTrendingMovie(data.results);
    }catch(err){
        console.log(err);
    }
}

getData();

function displayTrendingMovie(data){
    data.forEach((movie) => {
        let movieCard = document.createElement("div");
        let title = document.createElement("p");
        title.innerText = movie.title;
        movieCard.append(title);
        document.getElementById("movieContainer").append(movieCard);
    })
}



async function getSearch(){
    try{  
    let inputVal = document.getElementById("searchInput").value;
    let res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${inputVal}`);
    let data = await res.json();
    console.log(data);
    displaySearchData(data);
    }catch(error){
        console.log(error);
    }
}

  let timerId;
function debouncing(callback , delay){
   if(timerId){
       clearTimeout(timerId);
   }

   timerId = setTimeout(callback ,delay);
   
}

document.getElementById("searchInput").addEventListener("input" , function(){
     debouncing(getSearch , 1000);
})

function displaySearchData(data){
    document.getElementById("searchBox").innerHTML = "";
     if(data.results == 0){
        document.getElementById("searchBox").textContent = "No results found";
     }
    data.results.forEach((item) =>{
          let card = document.createElement("p");
          card.textContent = item.title;
          card.addEventListener("click" , function(){
                localStorage.setItem("searchMovieId" , JSON.stringify(item.id));
                displayClickedMovie(item.id);
          })
          card.style.cursor = "pointer";
          document.getElementById("searchBox").append(card);
          document.getElementById("searchBox").style.display = "block";
    })
}


async function displayClickedMovie(id){
    document.getElementById("movieDetails").style.display = "block";
    document.getElementById("movieDetails").innerHTML = "";
        try{  
        let res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
        let data = await res.json();
         console.log(data);
         let title = document.createElement("p");
         title.textContent = `Movie name :  ${data.title}`;
         let release = document.createElement("p");
         release.textContent = `Release date :  ${data.release_date}`;
         let rating = document.createElement("p");
         rating.textContent = `Rating :  ${data.vote_average}`;
         document.getElementById("movieDetails").append(title , release , rating);


        }catch(error){
            console.log(error);
        }
    


}