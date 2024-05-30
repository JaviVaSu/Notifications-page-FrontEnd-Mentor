$(document).ready(function() {
    let pasos = 0;
    
    $("#mark").click(function(){
        switch(pasos){
            case 0:
                $("#number").html("0");
                $("#mark").html("Mark all as unread");
                $("#new-notification1").css("background-color", "var(--White)");
                $("#new-notification2").css("background-color", "var(--White)");
                $("#new-notification3").css("background-color", "var(--White)");
                pasos = 1;
                break;
            case 1:
                $("#number").html("3");
                $("#mark").html("Mark all as read");
                $("#new-notification1").css("background-color", "var(--Light-grayish-blue-1)");
                $("#new-notification2").css("background-color", "var(--Light-grayish-blue-1)");
                $("#new-notification3").css("background-color", "var(--Light-grayish-blue-1)"); 
                pasos = 0;
                break;   
        }
    });
});