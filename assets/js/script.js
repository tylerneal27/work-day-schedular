$(document).ready(function() {

   var time = moment().format('lll'); 
$('#currentDay').text(time)

$('.saveBtn').on('click', function(){
    var key = $(this).parent().attr('id')
    console.log(key)
    var value = $(this).siblings('textarea').val()
    localStorage.setItem(key, value)
})

$('#hour-9 textarea').val(localStorage.getItem('hour-9')) 






 










// !date at the top of the page moment.js
// !click listener for save button
    // !set a key and get the value
    // !save to local storage
// saved data to persist 
    // from local storage
    // put this data on the page
//set past present future colors
    // get actual time of day
    // loop thru the set time blocks
        // get the time of the time block
        // compare to actual time
        // based on comparison make past present or future color
})