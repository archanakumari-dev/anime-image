const button=document.getElementById("button");
const image=document.getElementById("anime-image");
const animeContainerEl=document.getElementById("anime-container")
const animeName=document.getElementById("anime-name")

button.addEventListener("click",async function(event){
    try {
        // button=disabled;
        button.disabled=true;
        button.innerText="Loading.."
        const url=await fetch("https://nekos.best/api/v2/neko");
        const json=await url.json();
        const randomImageURL=json.results[0].url;
        image.src=randomImageURL; 
        const randomAnimeName=json.results[0].artist_name;
        animeName.innerText=randomAnimeName;
        animeContainerEl.style.display="block";
        button.innerText="Get Anime"
        button.disabled=false;
    } catch (error) {
        console.log(error);
    }
})