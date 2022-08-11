$(document).ready(function() {

   var currentTime = moment(); 
$('#currentDay').text(currentTime.format('LL'))

$('.saveBtn').on('click', function(){
    var key = 'hour-' + $(this).siblings('textarea').attr('id')
    console.log(key)
    var value = $(this).siblings('textarea').val()
    localStorage.setItem(key, value)
})

$('#9').val(localStorage.getItem('hour-9')) 
$('#10').val(localStorage.getItem('hour-10')) 
$('#11').val(localStorage.getItem('hour-11')) 
$('#12').val(localStorage.getItem('hour-12')) 
$('#13').val(localStorage.getItem('hour-13')) 
$('#14').val(localStorage.getItem('hour-14')) 
$('#15').val(localStorage.getItem('hour-15')) 
$('#16').val(localStorage.getItem('hour-16')) 
$('#17').val(localStorage.getItem('hour-17')) 

$('.description').each(function(){
    
    var hour = Number($(this).attr('id'))
    
    var plannerTime = moment().hour(hour).minute(0).second(0);
    

    if(plannerTime.hour() < currentTime.hour()) {
        $(this).css('background-color', 'grey')  
    } else if(plannerTime.hour() === currentTime.hour()) {
        $(this).css('background-color', 'red')  
    } else if(plannerTime.hour() > currentTime.hour()) {
        $(this).css('background-color', 'lightgreen')
    }
    
})




 










// !date at the top of the page moment.js
// !click listener for save button
    // !set a key and get the value
    // !save to local storage
// !saved data to persist 
    // !from local storage
    // !put this data on the page
// !set past present future colors
    // !get actual time of day
    // !loop thru the set time blocks
        // !get the time of the time block
        // !compare to actual time
        // !based on comparison make past present or future color
})