//start html/css before loading moment.js or error will occur
$(document).ready(function () {
    //display date
    var date = moment().format("dddd, MMMM Do, YYYY");
    $("#currentDay").text(date);
    //saves entry on time block when clicked
    $(".saveBtn").on("click", function (event) {
        //prevents default when refreshed
        event.preventDefault();
        console.log(this);
        var textarea = $(this).siblings(".entry").val();
        var time = $(this).parent().attr("id");
        //sets items in local storage
        localStorage.setItem(time, textarea);
    });
    //loads any saved data from storage
    $("#hour8 .entry").val(localStorage.getItem("hour8"));
    $("#hour9 .entry").val(localStorage.getItem("hour9"));
    $("#hour10 .entry").val(localStorage.getItem("hour10"));
    $("#hour11 .entry").val(localStorage.getItem("hour11"));
    $("#hour12 .entry").val(localStorage.getItem("hour12"));
    $("#hour1 .entry").val(localStorage.getItem("hour1"));
    $("#hour2 .entry").val(localStorage.getItem("hour2"));
    $("#hour3 .entry").val(localStorage.getItem("hour3"));
    $("#hour4 .entry").val(localStorage.getItem("hour4"));
    $("#hour5 .entry").val(localStorage.getItem("hour5"));
    $("#hour6 .entry").val(localStorage.getItem("hour6"));
    //time function
    function time() {
        var currentHour = moment().hour();
        //based on time, loop through block spaces
        $(".time-block").each(function () {
            var blockSpace = parseInt($(this).attr("id").split("hour")[1]);
            console.log( blockSpace, currentHour)
            //tells user which time blocks are in the past(gray), present(red), future(green) by adding and removing color.
            //past block(gray)
            if (blockSpace < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            //present block(red)
            else if (blockSpace === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            //future block(green)
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        });
    }
    //call time function
    time();
});