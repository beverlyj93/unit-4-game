// Global Variables
var randomNumber = 0;

// On Page Load
$(document).ready(function() {
    onGameLoad();
})

$('img').click(function() {
    
})

// Functions

function onGameLoad() {
    for(var i = 1; i < 5; i++) {
        $('#crystal-' + i).attr("value", Math.floor(Math.random() * 10));
    }
}