//ex01
console.log('Gopal Karan');
//ex02
var readLineSync = require('readline-sync');
var userName = readLineSync.question('Whats your name? ');
console.log(userName);
//ex03
console.log('Welcome '+ userName);
//ex04 also ends here
// ................................................................

//ex05
var userAge = readLineSync.question('Is Gopal\'s age greater than 25? ');
if(userAge=='yes')
{
    console.log('RIGHT');
}
else{
    console.log('WRONG');
}

//ex06
var userAddress = readLineSync.question('Where is Gopal\'s Hometown? ');
if(userAddress=="kolkata"){
    console.log("RIGHT")
}
else {
    console.log("WRONG")
}


//ex07
function sum(numOne, numTwo){
    return (numOne+numTwo);
}
console.log(sum(4,5));

//ex08
var score=0;
function singleQuiz(question, answer){
    var answerGivenByUser=readLineSync.question(question);
    if(answerGivenByUser==answer){
       score++;
       console.log("CORRECT");
    }
    else{
        console.log("WRONG");
    }
    console.log("Your SCORE is "+score);
}
singleQuiz("What is 2+2 ?","4");
singleQuiz("What is 2*3 ?","6");
singleQuiz('what is 4! ?','24');
singleQuiz('What is power(2,3) ?','8');

//ex09
for(var i=0;i<5;i++){
    console.log((i+1)+" Gopal");
}
//Homework : Star Pattern
for(var i=1;i<=5;i++){
    var str = '';
    for(var j=1;j<=i;j++){
        str += '*';
    }
    console.log(str);
}
console.log('\n');
for(var i=1;i<=5;i++){
    var str = '';
    for(var j=1;j<=(5+1-i);j++){
        str += '*';
    }
    console.log(str);
}

//ex10
var groceryList = ["Mong Dal", "Mosur Dal", "Rice" , "Flour", "Mustard Oil"];
console.log(groceryList[0]);
console.log(groceryList[2]);
console.log(groceryList[groceryList.length-1]);

//ex11
for(var i=0;i<groceryList.length;i++){
    console.log(groceryList[i]);
}

//ex12
var superHeros = [
    {
        name:"superman",
        costume: "blue",
        power: 1000 ,
        intelligence: 100
    },
    {
        name: "batman",
        costume: "black",
        power: 100,
        intelligence: 1000
    }
]
superHeros.forEach(object => {
    console.log(object.name,object.costume,object.power,object.intelligence);
})

//ex13
var questions =[
  {
    question: "Who is my favorite superhero?",
    answer: "Dhruv"
  },
  {
    question: "Which is my favorite sad song?",
    answer: "Channa Mereya"
  }
]

//ex14
function quizApp(questions){
    for(var i=0;i<questions.length;i++){
    var answerGiven = readLineSync.question(questions[i].question);
    if(answerGiven == questions[i].answer){
        console.log('Correct');
    }
    else{
        console.log('Wrong');
    }
    }
}
quizApp(questions);

//ex15
function quiz(questions){
    var i=0;
    var score=0;
    while(i<questions.length){      
    var answerGiven = readLineSync.question(questions[i].question);
    if(answerGiven==questions[i].answer){
        score++;
    }
    i++;
    }
    return score;
}

var userList =[
    {
        userName:"gopal",
        score:97
    },
    {
        userName:"sourav",
        score:196
    }
];

function game(userList){
    var score=0;
    var userName = readLineSync.question("Type your username: ")
    if(userName=='') return;
    score = quiz(questions);
    console.log("Username(You)".padEnd(20)+"|"+"Score".padEnd(10));
    console.log("-".repeat(31));
    console.log(userName.padEnd(20)+'|'+score); 
    console.log("-".repeat(31));
    for(var i=0;i<userList.length;i++){
        if(userName==userList[i].userName){
            userList[i].score = score;
            return;
        }
    }
    userList.push({userName: userName, score:score}); 
}

function listOfPlayer(userList){
    console.log("Username(All)".padEnd(20)+"|"+"Score".padEnd(10));
    console.log("-".repeat(31));
    userList.forEach(user => {
        console.log(user.userName.padEnd(20)+"|"+user.score);
    })
    console.log("-".repeat(31));
}


function highestScorer(userList){
    var max=0;
    var username='';
    console.log("Username(Highest)".padEnd(20)+"|"+"Score".padEnd(10));
    console.log("-".repeat(31));
    userList.forEach(user=>{
        if(user.score>max){
            max=user.score;
            username=user.userName;
        }
    })
    console.log(username.padEnd(20)+"|"+max);
    console.log("-".repeat(31));
}

while((expr=readLineSync.question('Type what you wanna do? '))!='exit'){
    switch(expr){
        case 'play': game(userList);
            break;
        case 'all': listOfPlayer(userList);
            break;
        case 'highest': highestScorer(userList);
            break;
        default:
            console.log(`Sorry, ${expr} is not a available option`);        
    }
}