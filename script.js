$(".display").click(function(){
    let answer1=$(".q1").val();
    let answer2=$(".q2").val();
    let answer3=$(".q3").val();
    $("img").show();
    
    $(".fortune-display").append("<li>" +"If we are watching " + answer1 +  " then we can watch it " + ((((24-answer3)/answer2))*365) + " times in a year." + "</li>" );
});