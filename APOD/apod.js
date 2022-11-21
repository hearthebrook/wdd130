const apodUrl = "https://api.nasa.gov/planetary/apod?api_key=0UieBswOrvrViwGPhI6ypg1tdwR9iF8tKV6eT2yJ"

async function getApod(url){
    const results = await fetch(url);
    if (results.ok){
        const data = await results.json()
        console.log(data)
        insertHtml(data);
        hideError();
    }
    else {
        showError();
    }
}

function apodTemplate(data){
    return`
    <div id="image">
        <img src=${data.url} alt=${data.title}/>
    </div>
    <div id="info">
        <h2>${data.title}</h2>
        <h3>${data.date}</h3>
        <p>${data.explanation}</p>
    </div>`
}

function insertHtml(data) {
    document.querySelector('#apiPhotoInfo').innerHTML = "";
    const html = apodTemplate(data);
    document.querySelector("#apiPhotoInfo").insertAdjacentHTML('afterbegin', html);
}

//getApod(apodUrl)

function showError(){
    // select element (qs)
    const element = document.querySelector(".errorMessage");
    // remove hide class 
    element.classList.remove("hide")
    //element.remove("#hide");
}

function hideError(){
    // select element (qs)
    const element = document.querySelector(".errorMessage");
    // add hide class 
    element.classList.add("hide");
}

function getApodByDate(event) {
    event.preventDefault();
    let date = document.getElementById("date");
    let urlByDate = apodUrl + `&date=${date.value}`;
    console.log('The event listener is working');
    getApod(urlByDate);
}
getApod(apodUrl);

document.querySelector("#getImage").addEventListener('click', getApodByDate)