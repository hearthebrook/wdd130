const favoriteFoods = ["Watermellon", " Tomatoes", " Peaches", " Chocolate"]; 

const para = document.createElement("p");
para.textContent = `My Favorite foods:  ${favoriteFoods}`;

document.body.appendChild(para);

favoriteFoods.shift();

para.textContent = `My Favorite foods:  ${favoriteFoods}`;

favoriteFoods.push(" Cinnamon Bears");

para.textContent = `My Favorite foods:  ${favoriteFoods}`;

// Date and Time
const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
    ];


var currentdate = new Date(); 
console.log(currentdate);
day = currentdate.getDay();


const todayElement = document.querySelector("#displayToday");
todayElement.textContent = weekday[day];