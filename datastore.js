// STORE is our database.
// It's an object literal with two properties: 'progress' and 'questions'. 
// The value of 'progress' is an object with two key/val pairs: the current question and the score.
// The value of 'questions' is an array containing objects, which have three props: 'question', 'wrong' with an array of wrong strings, and 'right' with the correct answer string 

const STORE = {
    progress: {
        questionNum: 0, 
        score: 0
    },
    QA: [
        
        {
            question: 'What is Google Cloud Platform (GCP)?',
            answers: ['A collection of products that includes Youtube, Gmail and Search, which Google offers to customers on a freemium basis, with the overarching purpose of organizing the world’s information',
                      'A service that Google offers to enterprises for developing, launching, and deploying their own managed web applications', 
                      'The world’s number one cloud computing platform', 'A suite of enterprise cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products'],
            correct: 3
        }, 
        {
            question: 'What Is GCP’s Compute Engine Useful for?',
            answers: ['Applying a lockstep columnar traversal algorithm to massive datasets',
                      'Ingesting and processing streaming data from Internet of Things devices', 
                      'Managing noSQL datastores', 'Launching, provisioning and decommissioning virtual machines (VMs) on demand'],
            correct: 3
        }
    ]
}