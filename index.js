
let like = 0;
const likeButton = document.getElementById("div2");
const likeCount = document.getElementById("div3");
const x = document.getElementById("div4");


const request = async (date) => {    
    
    const url = `https://api.nasa.gov/planetary/apod?api_key=FDILPqKRkGX1Rj5cMaMMKZ6pr7kVac1ay7SdYvxb&date=${date}`
    let req = await fetch(url)
    let res = await req.json()
    return res;
}

const p = document.getElementById('div1');

function logSubmit(event) {
    let givenDate = event.target.fname.value;
    let data = request(givenDate);
    
    data.then(function(result){
        const img1 = document.createElement("img");
        img1.id = "img12";
        img1.src = result.url;
        p.appendChild(img1) 

        //adding like button
       
        likeButton.style.visibility = "visible";
        likeCount.style.visibility = "visible";
        x.style.visibility = "visible";
        p.appendChild(likeButton)    
        
        likeDiv = document.getElementById('button1')
        console.log(likeDiv)
    })

   event.preventDefault()
   
 }

likeButton.addEventListener('click', ()=>{
    console.log("hello")
    likeCount.innerHTML = `${++like} likes`;
});

likeCount.addEventListener('click', ()=>{
    like = 0;
    likeCount.innerHTML = like;
});

x.addEventListener('click', ()=>{
    document.getElementById("div1").remove("img")
    x.style.visibility = "hidden";
});


form.addEventListener('submit', logSubmit);
