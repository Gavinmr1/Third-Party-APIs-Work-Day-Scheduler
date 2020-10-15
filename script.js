
    var date = moment().format("dddd, MMMM Do, YYYY");
    $("#currentDay").text(date);
    
    $(".saveBtn").on("click", function (event) {
        
        event.preventDefault();
        console.log(this);
        var textarea = $(this).siblings(".entry").val();
        var time = $(this).parent().attr("id");
        
        localStorage.setItem(time, textarea);
    });
    
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
   
    function time() {
        var currentHour = moment().hour();
       
        $(".time-block").each(function () {
            var blockSpace = parseInt($(this).attr("id").split("hour")[1]);
            console.log( blockSpace, currentHour)
           
            
            if (blockSpace < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            
            else if (blockSpace === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        });
    }
    
    time();
