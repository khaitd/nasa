

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
       console.log(result.url)
        const img1 = document.createElement("img");
        img1.src = result.url;
        p.appendChild(img1) 
    
    })
   event.preventDefault()
 }

 
form.addEventListener('submit', logSubmit);
