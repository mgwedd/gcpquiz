function renderFront() {
    // renders home screen and allows user to start the quiz

    // In case this is a quiz restart, reset the question number and score.
    STORE.progress.score = 0;
    STORE.progress.questionNum = 0;

    // $('main').on('click', '#start', function (event) {
         //startQuiz();
    // )};
}

function startQuiz() {
    // if user hits start, begin quiz and render question.
    
    // need first to remove front page material like start button.

    renderQuestion();
}

function renderQuestion() {
    // renders a question page

    // grab a new question
    // update the questionNum and render it to the progress banner.
    // populate form with answers
    // change button to 'submit'
    // call the validator to listen for submit and validate.
}

function validateResponse(){
    // listen for submit
    // on submit, validate answer. 
    // if correct, 
        // call correct screen renderer
    // if incorrect, 
        // call incorrect screen renderer
}

// PROBLEM: how to get to next question?

function renderResponseCorrect() {
    // render correct answer screen with data from validate.

}

function renderResponseIncorrect() {
    // render correct answer screen with data from validate.
    
}

function renderEnd() {
 // if state tracker was index of Store is length -1, then render the end screen.
 // must be able to call restart the quiz and clear state.
}


function createQuiz() {
    renderFront();
}

$(createQuiz);