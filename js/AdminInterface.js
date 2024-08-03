var Exames=[];
var box = ``;
DisplayExams();
var createBtnElement = document.querySelector("#createTest");
createBtnElement.addEventListener('click',()=>
{
    // window.open("preTestForm.html" , "_self");
    window.location.href = "preTestForm.html"
})
function moveToPreTest()
{
    window.open("preTestForm.html" , "_self");
}

function UpdateExam(index)
{
    var url = `update.html?id=${index}`
     window.open(url,"_self")
}

function RemoveExam(index)
{
    Exames.splice(index, 1);
    console.log(Exames)
    localStorage.setItem("Exams" , JSON.stringify(Exames))
    DisplayExams()
}


function DisplayExams()
{
    box=``;
    if(localStorage.getItem("Exams") != null )
        {
            Exames= JSON.parse(localStorage.getItem("Exams"));
            console.log(Exames)
            for (let index = 0; index < Exames.length; index++) {
            box+=
            `
                 <div class="col-md-3">
                            <div class="card">
                                <div class="card-body text-center">
                                  <input value="${index}" hidden></input>
                                  <h5 class="card-title">${Exames[index].Name} !</h5>
                                  <a href="#" class="btn custom-btn" onclick="UpdateExam(${index})">Update Exam</a>
                                  <a href="#" class="btn custom-btn" onclick="RemoveExam(${index})">Remove Exam</a>
                                </div>
                              </div>
                        </div> 
        
            `
            }
            box+=`<button id="createTest" onclick="moveToPreTest()" class="btn custom-btn">Create Exam</button>`
            document.getElementById("row").innerHTML = box;
        }
}