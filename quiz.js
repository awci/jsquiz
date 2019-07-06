const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementsByTagName('button');
var correctAnswer = 0;

const questions = [
	{
		question: 'Soru 1',
		answers: {
			a: "Cevap 1",
			b: "Cevap 2",
			c: "Cevap 3"
		},
		correct: 'a'
	}, {
		question: 'Soru 2',
		answers: {
			a: "Cevap 2-1",
			b: "Cevap 2-2",
			c: "Cevap 2-3"
		},
		correct: 'b'
	}
]

function buildQuiz() {
	let html = '<h3>Sorular</h3>';
	for ( let i = 0; i < questions.length; i++ ) {
		html += `<div id="question${i}">`
			html += `<h4>` + questions[i].question + `</h4>`
			html += `<ul>`
				let answers = questions[i].answers
				for ( let key in answers ) {
					html += `<li><label><input type="radio" value="${key}" name="soru${i}"/>` + key + `: ` + answers[key] + `</label></li>`; 
				}
			html += `</ul>`
		html += `</div>`
	}

	quizContainer.innerHTML = html
}


function showResult() {
	var wrongAnswers = [];
	resultContainer.innerHTML = '';
	for ( let i = 0; i < questions.length; i++ ) {
		let question = questions[i];
		let questionContainer = document.getElementById(`question${i}`);
		const selector = `input[name=soru${i}]:checked`;

		let answer= questionContainer.querySelector(selector);
		if ( answer.value === question.correct ) {
			correctAnswer++;
		} else {
			wrongAnswers.push(i + 1);
		}
	}
	if ( wrongAnswers.length ) {
		resultContainer.innerHTML = 'Yanlış cevaplarınız: ' + wrongAnswers.join(', ');
	} else {
		resultContainer.innerHTML = 'Soruların hepsini doğru cevapladınız';
	}
}


function submitClicked() {
	

	showResult()
}



submitButton[0].addEventListener('click', submitClicked)

buildQuiz()