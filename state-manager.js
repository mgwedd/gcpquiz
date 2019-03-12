function renderFront() {
    console.log(`${'renderFront'} ran`);
    // renders home screen and allows user to start the quiz
    // In case this is a quiz restart, reset the question number and score.
    STORE.progress.score = 0;
    STORE.progress.questionNum = 0;
    $('#inject-question').html(
    `<h2>Welcome to the Google Cloud Platform Quiz!</h2>
    <button type="button" id="start">Start</button>`);

    $('#start').on('click', function (event) {
        renderQuestionAndProgress();
    });
}

function generateQuestion() {
    console.log(`${'generateQuestion'} ran`);
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
                        <input type="radio" value="${answerOrder[0]}" name="answer" required>
                        <span>${answer1}</span>
                    </label>
                    <label class="answer">
                        <input type="radio" value="${answerOrder[1]}" name="answer" required>
                        <span>${answer2}</span>
                    </label>
                    <label class="answer">
                        <input type="radio" value="${answerOrder[2]}" name="answer" required>
                        <span>${answer3}</span>
                    </label>
                    <label class="answer">
                        <input type="radio" value="${answerOrder[3]}" name="answer" required>
                        <span>${answer4}</span>
                    </label>
                </fieldset>
                <div id="button-holder">
                    <button type="submit" id="submit-button">Submit</button>
                </div>
            </form>`
}

function getRandomAnswerOrder() {
    //  Let's do the Fisher-Yates shuffle! 
    console.log(`${'getRandomAnswerOrder'} ran`);
    const randomAnswerOrder = [0,1,2,3];
    for (let i = randomAnswerOrder.length - 1; i > 0; i--) {
        let n = Math.floor(Math.random() * (i + 1)); 
        [randomAnswerOrder[i], randomAnswerOrder[n]] = [randomAnswerOrder[n], randomAnswerOrder[i]]; 
    }
    return randomAnswerOrder;
}

function renderQuestionAndProgress() {
    console.log(`${'renderQuestionAndProgress'} ran`);
    $('#inject-question').html(generateQuestion());
    STORE.progress.questionNum++;
    renderProgress();
    awaitAndValidateResponse();
}

function renderProgress() {
    $('#inject-progress').html(
        `<h3 id='progress'>${STORE.progress.questionNum}/10</h3>
         <h3 id='score'>${STORE.progress.score}/10</h3>`
    );
}

function awaitAndValidateResponse(){
    console.log(`${'awaitAndValidateResponse'} ran`);
    $('form').on('submit', function (event) {
        event.preventDefault();
        const answerChoice = $('input[name="answer"]:checked').val();
        if (answerChoice == STORE.QA[STORE.progress.questionNum].correct) {
            renderResponseCorrect();
        } else {
            renderResponseIncorrect();
        }
    });
}

function renderResponseCorrect() {
    // render correct answer screen with data from validate.
    console.log(`${'renderResponseCorrect'} ran`);
    STORE.progress.score++;
    renderProgress();
    $('#inject-question').html(`<h2>You got it!</h2><button type="button" id="next">Next</button>`);
    $('#next').on('click', function (event) {
        renderNextQuestion();
    });
}

function renderResponseIncorrect() {
    // render correct answer screen with data from validate.
    console.log(`${'renderResponseIncorrect'} ran`);
    $('#inject-question').html(
        `<h2>Aww, not quite. The correct answer was: 
        ${STORE.QA[STORE.progress.questionNum].answers[STORE.QA[STORE.progress.questionNum].correct]}</h2>
        <button type="button" id="next">Next</button>`);
    $('#next').on('click', function (event) {
        renderNextQuestion();
    });
}

function renderNextQuestion() {
    if (STORE.progress.questionNum < STORE.QA.length) {
        renderQuestionAndProgress();
    } else {
        renderEnd();
    }
}

function renderEnd() {
    console.log(`${'renderEnd'} ran`);
    $('#inject-question').html(
    `<h2>That's it! You're done with the quiz. You got ${STORE.progress.score} out of ${STORE.QA.length} questions right.</h2>
    <button type="button" id="restart">Try Again</button>`);

    $('#restart').on('click', function (event) {
        renderFront();
    });
}

$(renderFront);