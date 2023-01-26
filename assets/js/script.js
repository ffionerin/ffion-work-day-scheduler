// display date at the top of the planner in the same format as the gif example
var dateDisplayEl = $('#currentDay');
function displayTime() {
    var dateToday = moment().format('dddd MMMM Do');
    dateDisplayEl.text(dateToday);
}

displayTime()



var currentTime = new Date();

// iterate through all elements with the class "textarea" to find the corresponding "hour"
$('.textarea').each(function() {
    var hour = $(this).closest('tr').find('.hour').text();
    var hourSplit = hour.split(':');
    var hourNum = parseInt(hourSplit[0]);
  
  // add the css classes of past, present or future dependant on the current time of day
    if (hourNum < currentTime.getHours()) {
      $(this).addClass('past');
    } else if (hourNum === currentTime.getHours()) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
  });



// save the user's input into local storage
$('.saveBtn').on('click', function() {
    var textareaVal = $(this).closest('tr').find('.textarea').val();
    var hour = $(this).closest('tr').find('.hour').text();
    localStorage.setItem(hour, textareaVal);
  }); 
  
  // retrieve the data from local storage and set it to the corresponding textarea
  $('.textarea').each(function() {
    var hour = $(this).closest('tr').find('.hour').text();
    $(this).val(localStorage.getItem(hour));
  });


