var score =0;
var questionIndex =0;

function Question(question, options, answer){
    this.question = question;
    this.options = options;
    this.answer = answer;
}

const questions = [
    new Question('What is full form of js?',['javaScript', 'javas', 'json', 'java'],'javaScript'),
    new Question('Which is not a database?',['MySQL','PostGres','MsSQL','js'],'js'),
    new Question('Which is not a programming language?',['java','javascript','c','sql'],'sql'),
    new Question('How can styling be added?',['inline','element','tag','all the above'],'all the above')

]

function displayQuestions(){
    var len = questions.length;
    if(questionIndex<len){
    var currQues = questions[questionIndex];
    document.getElementById('question').innerHTML = currQues.question;
    currQues.options.forEach((element, index )=> {
        document.getElementById('choice'+index).innerHTML=element;
        var btn = document.getElementById('btn'+index);
        btn.onclick = function(){
            if(currQues.answer===element){
                score++;
            }
            questionIndex++;
            displayQuestions();
        }
    });


    var ind = questionIndex+1
    document.getElementById('progress').innerHTML= 'Question '+ind+' of '+len;
}
else
{
    var result = '<h1> Results </h1>';
    result+= "<h2 id='score'> Your scores: " + score + ".And mark percentage is: "+(score/len*100)+"%"+"</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = result;
}
}


displayQuestions();