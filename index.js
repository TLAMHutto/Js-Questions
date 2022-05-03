$.ajax({
    url: "./jsQuestions.json",
    method: "GET",
    success: function(data){
        var randomObject = data[Math.floor(Math.random() * data.length)];
        var question = randomObject.question;
        var answer = randomObject.answer;
        $(".question").append(question);
        $(".answer").append(answer);
    }
});
$("#btnFlip").on('click' ,function(){
    $(".flip-card .flip-card-inner").toggleClass("flipped");
    
});
//when #btnNext is clicked, the next question is displayed
$("#btnNext").on('click', function(e){
    e.preventDefault();
    $.ajax({
        url: "./jsQuestions.json",
        method: "GET",
        success: function(data){
            var randomObject = data[Math.floor(Math.random() * data.length)];
            var question = randomObject.question;
            var answer = randomObject.answer;
            $(".question").empty().append(question);
            $(".answer").empty().append(answer);
        }
    });
}
);



