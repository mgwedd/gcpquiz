// STORE is our database.
// It's an object literal with two properties: 'progress' and 'questions'. 
// The value of 'progress' is an object with two key/val pairs: the current question and the score.
// The value of 'QA' is an array with objects that contain a question str prop, answers array, and another prop with the index of the correct answer

const STORE = {
    progress: {
        questionNum: 1, 
        score: 0
    },
    QA: [
        {
            question: 'What is Google Cloud Platform (GCP)?',
            answers: ['A suite that includes Youtube, Gmail and Google Search',
                      'A Gooogle service for deploying managed web applications', 
                      'The world’s number one cloud computing platform', 
                      'A suite of enterprise cloud computing services that runs on Google\'s'],
            correct: 3
        }, 
        {
            question: 'What Is GCP’s Compute Engine Useful for?',
            answers: ['Applying a lockstep columnar traversal algorithm to massive datasets',
                      'Ingesting and processing streaming data from IoT devices', 
                      'Managing noSQL datastores', 'On-demand virtual machines (VMs)'],
            correct: 3
        },
        {  question: 'On which Apache programming model is Dataflow based?',
            answers: ['Apache Hive',
                      'Apache Kafka', 
                      'Apache Pig', 
                      'Apache Beam'],
            correct: 3
        }, 
        {
            question: 'Which are adjusted on each epoch in a machine learning training session?',
            answers: ['features and hyperparameters',
                      'learning rate and number of hidden layers', 
                      'weights and features', 
                      'weights and biases'],
            correct: 3
        },
        {
            question: 'What’s an accurate distinction between BigQuery and Bigtable?',
            answers: ['Bigtable is a distributed key-value store; BigQuery queries that store',
                      'BigQuery is underneath Google Search; Bigtable is underneath Google Sheets', 
                      'Bigtable is for OLTP; BigQuery is best for OLAP', 
                      'BigQuery is managed MapReduce; Bigtable is managed MySQL'],
            correct: 2
        }, 
        {
            question: 'Which of these best describes the overall architecture of Cloud Spanner?',
            answers: ['Sharding data and storing it on node clusters',
                      'Distributed compute, shared and consistent storage', 
                      'Distributed compute, distributed storage', 
                      'None of these options'],
            correct: 1
        },
        {
            question: 'What’s Google Cloud Storage?',
            answers: ['A blob/object store for all data types and formats, focusing on unstructured data',
                      'A space for storing game state, user profiles, or product catalogues', 
                      'A highly-available, global and low-latency relational database', 
                      'A collaborative space for storing, sharing and editing files'],
            correct: 0
        },
        {
            question: 'Which of these is a good use case for Cloud SQL?',
            answers: ['Managing relational data when horizontal scalability is unneeded',
                      'Dealing with unstructured data when you don’t need mobile SDKs', 
                      'Doing analytics on structured, non-relational data, when you don’t need any Mobile SDKs', 
                      'Migrating existing Hadoop/Spark workloads to the GCP ecosystem'],
            correct: 0
        }, 
        {
            question: 'Which service should you use to order, process and pass along ingested messages?',
            answers: ['Dataproc',
                      'Bigtable', 
                      'Dataflow', 
                      'Dataprep'],
            correct: 2
        },
        {
            question: 'How should you migrate your existing Hadoop workloads to a managed service?',
            answers: ['Use a Transfer Appliance to get the data into BigQuery',
                      'Bigtable is the answer. Use Transfer Service and then deal with it there', 
                      'Build a ML model in ML Engine to predict the correct course of action', 
                      'Use Dataproc'],
            correct: 3
        }
    ]
}