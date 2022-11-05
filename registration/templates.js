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

function successTemplate(info) {
// HTML of message at end
return `
    <p>Thank you ${info.name} for registering. You have registered ${info.participantNum} participants and owe $${info.cost} in Fees. </p>
`
}