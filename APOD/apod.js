const apodUrl = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"

async function getApod(url){
    const results = await fetch(url);
    if (results.ok){
        const data = await results.json()
        console.log(data)
        insertHtml(data);
    }
}

function apodTemplate(data){
    return`
    <dev id="image">
        <img src=${data.url} alt=${data.title}/>
    </dev>
    <dev id="info">
        <h2>${data.title}</h2>
        <h3>${data.date}</h3>
        <p>${data.explanation}</p>
    </dev>`
}

function insertHtml(data) {
    const html = apodTemplate(data);
    document.querySelector("#apiPhotoInfo").insertAdjacentHTML('afterbegin', html);
}

getApod(apodUrl)

function showError(){
    // select element (qs)
    const element = document.querySelector("#errorMessage");
    // remove hide class 
    element.remove("#hide");
}

function hideError(){
    // select element (qs)
    const element = document.querySelector("#errorMessage");
    // add hide class 
    element.add("#hide");
}

showError()

// try except with code 400 
// display msg in 