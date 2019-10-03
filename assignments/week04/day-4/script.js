$(document).ready(function(){
    var api  = "https://raw.githubusercontent.com/attainu/attainu-eagle/master/assignments/week-4/day-4/quiz.json";
    $.ajax({
        method: "GET",
        url: api,
        success: function(response) {
            var quizObject=JSON.parse(response);

            //To generate question
            var randomNumber = Math.floor( Math.random() * 10 )
            var questionElem = quizObject[randomNumber].question;
            $(".card").append(questionElem);


            //To check answer on clicking submit button
            $("button").on("click",function() {
                var answer = $("#answer").val();
                if(answer === quizObject[randomNumber].answer) {
                    alert("Correct Answer");
                    location.reload();
                }else {
                    alert("Incorrect Answer");
                }
            });

            //For counter
            var counter = 0;
            setInterval(function(){
            var i= 30 - counter;
            $(".timer").text(i + " Seconds Left");
            counter++;
            if(i == 0){
                alert("Time is up!!!");
                location.reload();
            }
            }, 1000);
 
        },
        error: function(error) {
            console.log("Error occured when displayin question",error);
        }

        
    })
});