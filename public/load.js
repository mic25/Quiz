$(document).ready(function(){
    $('.answer').each(function(){
        $(this).removeAttr('disabled');
    });
    var correct = 0;
    var incorrect = 0;
    var questions = $('.question');
    for(var i = 1; i < questions.length; i++){
        $(questions[i]).hide();
    }
    $('button.ok').click(function(e) {
        var $this = $(this);
        var answers = $this.parents('.question').find('.answer');
        var data = {};
        data.id = $this.parents('.question').attr('id');
        data.answers = [];
        answers.each(function(){
            $(this).attr('disabled', true);
            var name = $(this).attr('name');
            var answer = {};
            if($(this).is(':checked')){
                answer.key = name;
                answer.value = true;
            }else{
                answer.key = name;
                answer.value = false;
            }
            data.answers.push(answer);
        });

        $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: '/service',
            xhrFields: {
              withCredentials: true
            },
            success: function(response) {
                var correctAnswer = true;
                for(var i = 0; i < response.length; i++){
                    if(response[i].value == true){
                        // answer with class response[i].key green
                        answers.each(function(){
                           if($(this).hasClass(response[i].key)) {
                               $(this).parents('.answerbox').css('background-color', 'rgba(122,212,118,0.55)');
                           }
                        });
                    }else{
                        // answer with class response[i].key red
                        answers.each(function(){
                            if($(this).hasClass(response[i].key)) {
                                $(this).parents('.answerbox').css('background-color', 'rgba(212,122,118,0.55)');
                            }
                        });
                        correctAnswer = false
                    }
                }
                if(correctAnswer){
                    correct += 1;
                }else{
                    incorrect += 1;
                }
                $('.correct').text(correct);
                $this.hide();
                $this.parents('.question').find('button.next').show();
            }
        });
    });
    $('button.next').click(function(){
        var $this = $(this);
        var question =  $this.parents('.question');
        question.hide();
        for(var i = 0; i < questions.length; i++){
            if($(question).is($(questions[i]))){
                var nextQuestion = $(questions[i+1]);
                nextQuestion.show();
                nextQuestion.find('.answer').each(function(){
                    $(this).removeAttr('disabled');
                });
            }
        }
    });
    $('button.restart').click(function(){
        location.reload(true);
    });
});