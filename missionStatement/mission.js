document.querySelector("#theme-select").addEventListener('change', ChangeTheme);

let body = document.querySelector("body");

function ChangeTheme(event) {
    if (event.target.value == "dark") {
        body.classList.add("dark");
    }
    else {
        body.classList.remove("dark")
    }
}

/*
const themeSelector = // replace with code to select dropdown element out of the HTML
function changeTheme() {
    //check to see what the current value of our select is. The current value is conveniently found in themeSelector.value!
    
    // if the value is dark then:
        // add the dark class to the body
        // change the source of the logo to point to the white logo.
    // otherwise
        // remove the dark class
        // make sure the logo src is the blue logo.
}           
// add eventlistener to the themeSelector element here. Use the changeTheme function as the event handler function.
*/