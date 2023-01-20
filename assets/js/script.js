
var dateDisplayEl = $('#currentDay');

function displayTime() {
    var dateToday = moment().format('dddd MMMM Do');
    dateDisplayEl.text(dateToday);
}

displayTime()
