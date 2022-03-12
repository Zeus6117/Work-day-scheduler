//setting events variable to an empty array
var events = [];

function createEvents(eventText) {
    //create elements that make up the event
    var eventText = $("textarea").text(textInput);
    //append elements to parent
    eventText.append(eventText);
}

function loadEvents() {
 //setting variable count equal to 8
 for (let count = 8; count < 19; count++) {
    //getting the count number from localStorage
    localStorage.getItem(count);
    //setting countString equal to the getItem(count)
    let countString = localStorage.getItem(count);
    if (countString) {
      //the ID for that count is pulled and it will place the value of countString
      $("#" + count).val(countString);
    }
  }
}

//save events to localStorage
function saveEvents(clickedButton) {
    events[$(clickedButton).parent().attr("data-hour")] = $("data-hour").val();
  }

//set up time/clock element
var time = document.getElementById("currentDay");
function currentDay() {
  time.textContent = new Date().toString();
}

//refresh every second
setInterval(currentDay, 1000)

//use moment.js to add the text content of the current month, day, year
function checkEvent() {
    var clockEl = moment().hours();
  
    //set up the event for all time blocks
    $(".event-category").each(function () {
      var timeBlock = parseInt($(this).attr("data-hour"));
  
      //if timeBlock is less than clockEl, will add past class
      if (timeBlock < clockEl) {
        $(this).addClass("past");
  
        //else if timeBlock is equal to the clockEl, will add present class & remove past class
      } else if (timeBlock === clockEl) {
            $(this).removeClass("past");
            $(this).addClass("present");
  
        //else if conditional for if timeBlock is equal to the clockEl, will add future class & remove either past or present
      } else if (timeBlock > clockEl) {
         $(this).removeClass("past");
         $(this).removeClass("present");
         $(this).addClass("future");
      }
    });
  }

  setInterval(checkEvent, 1000);

  //when you click a card, allows user to edit
  $(".event-category").on("click", function () {
    var text = "";
  
    var textInput = $("<textarea>").val(text);
  
    textInput.trigger("focus");
  });

  //save to localStorage when saveBtn is clicked
$('.saveBtn').on("click", function () {
      var text = $(this).siblings('.description').val();

      localStorage.setItem($(this).parent().attr("data-hour"), text);
      loadEvents();
  });

  //calls loadEvents()
  loadEvents();