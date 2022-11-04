let participantNum = 1;

function formTemplate(participantNum) {
    return `
<section class="participant${participantNum}">
            <p>Participant ${participantNum}</p>
            <div class="item">
              <label for="fname"> First Name<span>*</span></label>
              <input id="fname${participantNum}" type="text" name="fname" value="" required />
            </div>
            <div class="item activities">
              <label for="activity">Activity #<span>*</span></label>
              <input id="activity${participantNum}" type="text" name="activity" />
            </div>
            <div class="item">
              <label for="fee">Fee ($)<span>*</span></label>
              <input id="fee${participantNum}" type="number" name="fee" />
            </div>
            <div class="item">
              <label for="date">Desired Date <span>*</span></label>
              <input id="date${participantNum}" type="date" name="date" />
            </div>
            <div class="item">
              <p>Grade</p>
              <select>
                <option selected value="" disabled selected></option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
              </select>
            </div>
          </section> `}

function buildParticipant() {
    participantNum++
    const htmlParticipant = formTemplate(participantNum);
    document.querySelector('#add').insertAdjacentHTML('beforebegin', htmlParticipant)
}

document.querySelector('#add').addEventListener('click', buildParticipant)

function totalFees() {
    // the selector below lets us grab any element that has an id that begins with "fee"
    let feeElements = document.querySelectorAll("[id^=fee]");
    console.log(feeElements);
    // querySelectorAll returns a NodeList. It's like an Array, but not exactly the same.
    // The line below is an easy way to convert something that is list-like to an actual Array so we can use all of the helpful Array methods...like reduce
    // The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in inserts those list items into a new Array.
    feeElements = [...feeElements];
    // sum up all of the fees. Something like Array.reduce() could be very helpful here :) Or you could use a Array.forEach() as well.
    
    const sum = feeElements.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
    ); // calculate total! 
    // once you have your total make sure to return it!
    return sum;
  }

let Name = document.getElementById("adult_name");

const info= {
    name: Name,// pull from form,
    cost: totalFees(),// total fees,
    participantNum: participantNum
}


function successTemplate(info) {
    // HTML of message at end
    return `
        <p>Thank you ${info.name} for registering. You have registered ${info.participantNum} participants and owe $${info.cost} in Fees. </p>
    `
  }

function submitForm(event) {
    event.preventDefault();
    console.log("The form is working");
    // do the rest of the stuff
    document.getElementById("formEl").classList.add('hide');

    console.log(info)

    // display sucess 
    const displayVar = successTemplate(info);
    // insert message into summary id
    document.querySelector('#summary').insertAdjacentHTML('afterbegin', displayVar);
}

// if issues target form (Add id to form element HTML)
document.querySelector('#submitButton').addEventListener('click', submitForm);
