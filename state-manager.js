function renderFront() {
    // In case this is a quiz restart, reset the question number and score.
    STORE.progress.score = 0;
    STORE.progress.questionNum = 1;
    $('#inject-question').html(
    `<h2>Welcome to the Google Cloud Platform Quiz!</h2>
    <button type="button" class="button" id="start">Start</button>`);

    $('#start').on('click', function (event) {
        renderQuestionAndProgress();
    });
}

function generateQuestion() {
    const questionIndex = STORE.progress.questionNum;
    const answerOrder = getRandomAnswerOrder();
    const question = STORE.QA[questionIndex].question;
    const answer1 = STORE.QA[questionIndex].answers[answerOrder[0]];
    const answer2 = STORE.QA[questionIndex].answers[answerOrder[1]];
    const answer3 = STORE.QA[questionIndex].answers[answerOrder[2]];
    const answer4 = STORE.QA[questionIndex].answers[answerOrder[3]];
    return `<h2>${question}</h2>
            <form>
                <fieldset>
                    <label class="answer">
                        <input type="radio" value="${answerOrder[0]}" name="answer" class="answer">
                        <span>${answer1}</span>
                    </label>
                    <label class="answer">
                        <input type="radio" value="${answerOrder[1]}" name="answer" class="answer">
                        <span>${answer2}</span>
                    </label>
                    <label class="answer">
                        <input type="radio" value="${answerOrder[2]}" name="answer" class="answer">
                        <span>${answer3}</span>
                    </label>
                    <label class="answer">
                        <input type="radio" value="${answerOrder[3]}" name="answer" class="answer">
                        <span>${answer4}</span>
                    </label>
                </fieldset>
            </form>
            <button type="submit" id="submit-button" class="button">Submit</button>`
}

function getRandomAnswerOrder() {
    const randomAnswerOrder = [0,1,2,3];
    for (let i = randomAnswerOrder.length - 1; i > 0; i--) {
        let n = Math.floor(Math.random() * (i + 1)); 
        [randomAnswerOrder[i], randomAnswerOrder[n]] = [randomAnswerOrder[n], randomAnswerOrder[i]]; 
    }
    return randomAnswerOrder;
}

function renderQuestionAndProgress() {
    $('#inject-question').html(generateQuestion());
    renderProgress();
    awaitAndValidateResponse();
}

function renderProgress() {
    $('#inject-progress').html(
        `<h3 id='progress'>Progress: ${STORE.progress.questionNum}/10</h3>
         <h3 id='score'>Score: ${STORE.progress.score}/10</h3>`
    );
}

function awaitAndValidateResponse(){
    
    $('#submit-button').on('click', function (event) {
        event.preventDefault();  
        if (!isAnswerChosen()) {
            alert('Choose your answer.');
        } else {
            const answerChoice = $('input[name="answer"]:checked').val();
            if (answerChoice == STORE.QA[STORE.progress.questionNum].correct){
                renderResponseCorrect();
            } else {
                renderResponseIncorrect();
         }
        }
     });
}

function isAnswerChosen() {
    const inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].checked) {
        return true;
      } 
    }
    return false;
}

function renderResponseCorrect() {
    STORE.progress.score++;
    renderProgress();
    $('#inject-question').html(`<h2>You got it!</h2><div class="button-holder"><button type="button" class="button" id="next">Next</button></div>`);
    $('#next').on('click', function (event) {
        renderNextQuestion();
    });
}

function renderResponseIncorrect() {
    const correctAnswerIndex = STORE.QA[STORE.progress.questionNum].correct;
    $('#inject-question').html(
        `<h2>Aww, not quite. The correct answer was: 
        ${STORE.QA[STORE.progress.questionNum].answers[correctAnswerIndex]}</h2>
        <div class="button-holder"><button type="button" class="button" id="next">Next</button></div>`);
    $('#next').on('click', function (event) {
        renderNextQuestion();
    });
}

function renderNextQuestion() {
    STORE.progress.questionNum++;
    if (STORE.progress.questionNum < STORE.QA.length) {
        renderQuestionAndProgress();
    } else {
        renderEnd();
    }
}

function renderEnd() {
    $('#inject-question').html(
    `<h2>That's it! You're done with the quiz. You got ${STORE.progress.score} out of ${STORE.QA.length} questions right.</h2>
    <button type="button" class="button" id="restart">Try Again</button>`);
    $('#inject-progress').html('');
    $('#restart').on('click', function (event) {
        renderFront();
    });
}

$(renderFront);