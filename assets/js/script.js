// display date at the top of the planner in the same format as the gif example
var dateDisplayEl = $('#currentDay');

function displayTime() {
    var dateToday = moment().format('dddd MMMM Do');
    dateDisplayEl.text(dateToday);
}

displayTime()

// need to add these classes dynamically, depending on what time it is - parseInt, present and future
 
// * Present timeblocks for standard business hours when the user scrolls down.
 
// * Color-code each timeblock based on past, present, and future when the timeblock is viewed.


// * Save the event in local storage when the save button is clicked in that timeblock.

// * Persist events between refreshes of a page

// <!-- 
//   To enable the user to input and save their tasks to local storage, you can use JavaScript and jQuery. For example, you
//   can use the jQuery .on() method to attach an event handler to the save button, and use the localStorage.setItem()
//   method to save the inputted tasks to local storage. For example:

//   $('#save').on('click', function() { -->