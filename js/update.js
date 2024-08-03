var params = new URLSearchParams(window.location.search);
var id = params.get('id');
var Exams =[];

if(localStorage.getItem("Exams") != null)
{
    Exams = JSON.parse(localStorage.getItem("Exams"))
}
var updatedExam = Exams[id];

var QuestionElement =  document.querySelector("#testForm");

var ElementBox = ``;

function DisplayQuestions()
{
  for (let index = 0; index < updatedExam.Examquestions.length; index++) {

    ElementBox+=
    `
           <div class="mb-5 question border-bottom border-black border-3 pb-5">
                      <input type="text" class="form-control rounded-0 border-0 border-bottom" name="q1" value="${updatedExam.Examquestions[index].header}"/>
                      <div class="input-group my-5">
                          <input type="text" class="form-control me-2" value="${updatedExam.Examquestions[index].answers[0]}" id="0">
                          <input type="text" class="form-control me-2" value="${updatedExam.Examquestions[index].answers[1]}"  id="1" >
                          <input type="text" class="form-control me-2" value="${updatedExam.Examquestions[index].answers[2]}"  id="2">
                          <input type="text" class="form-control me-2" value="${updatedExam.Examquestions[index].answers[3]}"  id="3">
                        </div>
                        <label for="RightAnswer" class="ms-1 mb-3">Right Answer</label>
                        <select id="RightAnswer" class="form-select" aria-label="Default select example">
                          <option selected value="0">Answer 1</option>
                          <option value="1">Answer 2</option>
                          <option value="2">Answer 3</option>
                          <option value="3">Answer 4</option>
                        </select>
                  </div>
    `
    
  }
  
  ElementBox += `<button type="submit" id="sub"  onclick="Update(event)" class="btn custom-btn rounded-pill px-4">Update</button>`
  QuestionElement.innerHTML = ElementBox;
};
var updatedQuestions =new Array();
function GetUpdatedExameInput()
{
   var QuestionDivs = QuestionElement.querySelectorAll("#testForm .question")
   for (let index = 0; index < QuestionDivs.length; index++) {
    var Answers = QuestionDivs[index].querySelectorAll(".input-group input");
    var CorrectAnswer = QuestionDivs[index].querySelector("#RightAnswer")
    var AnswersValue = [];
    for (let index = 0; index < Answers.length; index++) {
      AnswersValue.push(Answers[index].value)
      
    }
    var Question =
    {
      header : QuestionDivs[index].querySelector("input").value,
      answers : AnswersValue,
      correctAnswer : AnswersValue[CorrectAnswer.value]
    };
    updatedQuestions.push(Question)

   }
   return updatedQuestions;
}

DisplayQuestions();

function Update (event)
{
  event.preventDefault();
   var test = GetUpdatedExameInput()

   updatedExam.Examquestions = test;
   localStorage.setItem("Exams" , JSON.stringify(Exams));
  // window.open("AdminInterface.html" , "_self")
  location.replace("AdminInterface.html" );

}

function IsValid(value)
{
  if(value != "")
  {
    return true;
  }else 
  {
    return false;
  }
}
