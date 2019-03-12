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
                      'The world’s number one cloud computing platform', 
                      'A suite of enterprise cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products'],
            correct: 3
        }, 
        {
            question: 'What Is GCP’s Compute Engine Useful for?',
            answers: ['Applying a lockstep columnar traversal algorithm to massive datasets',
                      'Ingesting and processing streaming data from Internet of Things devices', 
                      'Managing noSQL datastores', 'Launching, provisioning and decommissioning virtual machines (VMs) on demand'],
            correct: 3
        },
        {
            question: 'On which Apache programming model is Dataflow based?',
            answers: ['Hive.',
                      'Kafka.', 
                      'Pig.', 
                      'Beam.'],
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
            question: 'What’s an accurate distinction between Big Query and Big Table?',
            answers: ['Big Table is a globally distributed key-value store while Big Query is the service for querying that store',
                      'Big Query is the service underneath Google Search; Big Table is the technology underneath Google Sheets', 
                      'Big Table focuses on low-latency nonrelational data access while Big Query is best at rapidly scanning massive datasets', 
                      'Big Query is a managed, cloud-native Hadoop implementation; Big Table is for processing streaming data'],
            correct: 2
        }, 
        {
            question: 'Which of these best describes the overall architecture of Cloud Spanner?',
            answers: ['Sharding data and storing it on node clusters.',
                      'Distributed compute, shared and consistent storage.', 
                      'Distributed compute, distributed storage.', 
                      'None of the above.'],
            correct: 1
        },
        {
            question: 'What’s Google Cloud Storage?',
            answers: ['A blob/object store for unstructured data for custom analytics pipelines, streaming multimedia, and/or archives/backups.',
                      'A space for storing game state, user profiles, or product catalogues.', 
                      'A mission-critical, relational database service with transactional consistency, global scale, and high availability.', 
                      'A collaborative space for storing, sharing and editing files.'],
            correct: 0
        },
        {
            question: 'Which of These Is a Good Use Case for GCP’s Cloud SQL?',
            answers: ['Running an analytics job on structured relational data, where horizontal scalability isn’t a big concern.',
                      'Dealing with  unstructured data when you don’t need mobile SDKs.', 
                      'Running an analytics workload on structured data that isn’t relational, when you don’t need any Mobile SDKs', 
                      'Migrating existing Hadoop/Spark workloads to the GCP ecosystem.'],
            correct: 0
        }, 
        {
            question: 'Which service should you use to order, process pass along messages being ingested with Pub/Sub?',
            answers: ['Dataproc.',
                      'Bigtable.', 
                      'Dataflow.', 
                      'Dataprep.'],
            correct: 2
        }
    ]
}