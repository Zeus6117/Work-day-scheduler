//setting events variable to an empty array
var events = [];

function createEvents(eventText) {
    //create elements that make up the event
    var eventText = $('textarea').text(textInput);
    //append elements to parent
    eventText.append(eventText);
}

function loadEvents() {

}

//save events to localStorage
function saveEvents(clickedButton) {
    events[$(clickedButton).parent().attr("data-hour")] = $("data-hour").val();
  }

//clock element
var clock = document.getElementById('currentDay');

function currentDay() {
    time.textContent = new Date().toString();
}

//refresh every second
setInterval(currentDay, 1000)
