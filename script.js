const question= [
  {
    question:"What is correct definition of Artificial intelligence (Ai)?",
    answers: [
      {text: "A computer for mathematical calculations only", correct: false},
      {text: "A field that build systems capable of performing tasks that require human intelligence", correct: true},
      {text: "A program that connects to the internet automatically ", correct: false},
      {text: "A database management system", correct: false},
      
    ]
  },
  {
    question:"Who proposed the Turing Test to measure machine intelligence ?",
    answers: [
      {text: "John McCarthy", correct: false},
      {text: " Marvin Minsky ", correct: false},
      {text: "Alan Turing ", correct: true},
      {text: " Claude shnnon", correct: false},
      
    ]
  },

  {
    question:"The current Ai system are generally: ",
    answers: [
      {text: "Strong AI", correct: false},
      {text: " General AI", correct: false},
      {text: " Weak AI ", correct: true},
      {text: "Conscious AI ", correct: false},
      
    ]
  },

  {
    question:"In machine learning, The system:  ",
    answers: [
      {text: "Uses manually written rules ", correct: false},
      {text: " learns patterns automatically from data ", correct: true},
      {text: " Does not need data", correct: false},
      {text: "Works only on image processing ", correct: false},
      
    ]
  },

  {
    question:" Which branch enables computers to understand human language?",
    answers: [
      {text: " Computer vision ", correct: false},
      {text: " Robotics ", correct: false},
      {text: "  Natural Language Processing", correct: true},
      {text: " Reinforcement Learning" , correct: false},
      
    ]
  },

  {
    question:" What is the most widely used programming language in Artificial intelligence? ",
    answers: [
      {text: "c ", correct: false},
      {text: " Java ", correct: false},
      {text: " c#", correct: false},
      {text: "Python ", correct: true},
      
    ]
  },

  {
    question:" What is importance of Mathematics in Progarmming in AI?",
    answers: [
      {text: "It used only for storing files and databases", correct: false},
      {text: "Mathematics has no relation to programming or ai ", correct: false},
      {text: "It helps design algorithms, analyze data, and build ai models ", correct: true},
      {text: " It used only for designing website interfaces and colors", correct: false},
      
    ]
  },

  {
    question:"What is the main cause of AI Hallucinations, and how can they be reduced? ",
    answers: [
      {text: " Because the devices memory is full they can be solved by deleting files ", correct: false},
      {text: "Because Ai fully understands all information they cannot be reduce.", correct: false},
      {text: "Because of a slow internet connection they can be solved by increasing the connection speed "},
      {text: "Because the model may generate inaccurate information they can be reduced by verifying sources and improving the quality of data and instructions ", correct: true},
      
    ]
  },

  {
    question:"The most important citerion when evaluating a scientific source using ai tools is:",
    answers: [  
      {text: "A well-Know website   ", correct: false},
      {text: "Published in a peer-reviewed journal by a recognized researcher", correct: true},
      {text: "A long Arcticle", correct: false},
      {text: "The use of the latest ai system ", correct: false},
      
    ]
  },

  {
    question:" What does Prompt Engineering mean in academic research? ",
    answers: [
      {text: "Programming a robot to move ", correct: false},
      {text: " Writing clear and specific instructions to obtain accurate results from Ai", correct: true},
      {text: "installing Ai software ", correct: false},
      {text: "Designing hardware", correct: false},
      
    ]
  },

  {
    question:" Which tool specializes in Adaptive sheduling and automatically resheduling tasks?",
    answers: [
      {text: "Notion Ai", correct: false},
      {text: "Google Calendar ", correct: false},
      {text: "Reclaim Ai", correct: true},
      {text: "Microsoft Word ", correct: false},
      
      
    ]
  },

  {
    question:"Which of the following is a good prompt for academic writing",
    answers: [
      {text: "Write about Ai ", correct: false},
      {text: " Write something for my report", correct: false},
      {text: "Write 200-word academic introduction about Ai in scientific writing for undegraduate students  ", correct: true},
      {text: " Can you help me? ", correct: false},
      
    ]
  },

  {
    question:"What is the main goal of Prompt Engineering?",
    answers: [
      {text: "To make AI systems faster ", correct: false},
      {text: " To give clear instructions to get better results  ", correct: true},
      {text: " To increase computer storage", correct: false},
      {text: "  To replace programming languages ", correct: false},
      
    ]
  },

  

  {
    question:" Which prompt is the most effective?",
    answers: [
      {text: "“Tell me something.”", correct: false},
      {text: " “AI?” ", correct: false},
      {text: "“Explain Machine Learning in 5 simple points for a beginner.” ", correct: true},
      {text: " “Write.”", correct: false},
      
    ]
  },

  {
    question:" Which is an everyday example of AI?",
    answers: [
      {text: "  A traditional notebook ", correct: false},
      {text: " A recommendation system on Netflix or YouTube  ", correct: true},
      {text: " A regular light bulb ", correct: false},
      {text: "A mechanical pencil ", correct: false},
      
    ]
  },

  {
    question:" How can AI be used in smartphones? ",
    answers: [
      {text: " Facial recognition and voice assistants", correct: true},
      {text: "Increasing the physical battery capacity ", correct: false},
      {text: " Replacing the phone's processor ", correct: false},
      {text: " Adding physical storage without hardware ", correct: false},
      
    ]
  },


  {
    question:"Which is an important ethical issue related to AI?",
    answers: [
      {text: "Screen size ", correct: false},
      {text: " Keyboard type ", correct: false},
      {text: "Internet cable length ", correct: false},
      {text: "Privacy and personal data protection", correct: true},
      
    ]
  },

  {
    question:". What is the most responsible way to use AI-generated information? ",
    answers: [
      {text: "Trust everything AI says ", correct: false},
      {text: " Share all personal information with AI", correct: false},
      {text: " Verify important information and protect personal data", correct:true},
      {text: " Use AI instead of human judgment in every situation ", correct: false},
      
    ]
  },

  

];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion(){
  resetState();

  let currentQuestion = question[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;

  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState(){
  nextButton.style.display = "none";

  while(answerButton.firstChild){
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach(button =>{
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}


function showScore(){
  resetState();
  questionElement.innerHTML = `you scrored ${score} out of ${question.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}



function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < question.length){
    showQuestion();
  }else{
    showScore();
  }
}
nextButton.addEventListener("click", ()=>{
  if(currentQuestionIndex < question.length){
    handleNextButton();
  }else{
    startQuiz();
  }
})


startQuiz();
