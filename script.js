
var output = document.getElementById('left');
var config = {
    questions: true
}
var values = [];
var answers = [];
var acertos = 0;



function onClick1() {
    const inputObject = document.getElementById('input1');
    var input = inputObject.value.toUpperCase();
    

    if(config.questions) {
        values.push(input);
        console.log(values)
        output.innerHTML += `<div class='neutra' id='Q${values.length}'>Questão ${values.length} - ${input}</div>`;
        inputObject.value = null;
        inputObject.placeholder = `Questão ${values.length + 1} - Resposta`
        inputObject.focus();
    }
    else {
        if(answers.length < values.length) {
            answers.push(input)
            inputObject.value = null;
            inputObject.placeholder = `Questão ${answers.length + 1} - Gabarito`
            inputObject.focus();
        } 
        if(answers.length + 1 > values.length){
            onClick2()
        }
    }

}

function onClick2() {
    if(!config.questions) {
        values.forEach((value, index) => {
            if(value === answers[index]) {
               let element = document.getElementById(`Q${index+1}`);
               element.className = 'correta';
               acertos++
            }
            else {
                let element = document.getElementById(`Q${index+1}`);
               element.className = 'errada';
            }

            if(index === values.length -1) {
                const resultsBox = document.getElementById('resultsBox');
                const porcentagemAcertos = Math.round((acertos * 100)/values.length)
                resultsBox.innerHTML = `<div class='text'>Acertos: ${acertos}</div><div class='text'>${porcentagemAcertos}%</div>`
            }
        })
    }
    const inputObject = document.getElementById('input1');
    config.questions = false;
    inputObject.placeholder = `Questão ${answers.length + 1} - Gabarito`;
    inputObject.value = null;
}