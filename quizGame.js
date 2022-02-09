import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';


const QuizGame = ({navigation}) => {

  const questions = [
    {
      questionText: "Which goalkeeper has the record of 138 clean sheets for the same Premier League team?",
      answerOptions: [
        { answerText: 'Van der saar', isCorrect: false },
        { answerText: 'David Seaman', isCorrect: false },
        { answerText: "Petr Cech", isCorrect: true },
        { answerText: 'Joe Hart', isCorrect: false },
      ],
    },
    {
      questionText: 'How many clubs have never been relegated from the Premier League?',
      answerOptions: [
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: true },
        { answerText: '3', isCorrect: false },
        { answerText: '5', isCorrect: false },
      ],
    },
    {
      questionText: "Against which team did Wayne Rooney score his Premier League first goal?",
      answerOptions: [
        { answerText: 'Man City', isCorrect: false },
        { answerText: "Arsenal", isCorrect: true },
        { answerText: 'Everton', isCorrect: false },
        { answerText: 'Aston Villa', isCorrect: false },
      ],
    },
    {
      questionText: "Which player has never represented Arsenal?",
      answerOptions: [
        { answerText: 'Denilson', isCorrect: false },
        { answerText: "Arjen Robben", isCorrect: true },
        { answerText: 'William Gallas', isCorrect: false },
        { answerText: 'Andrey Arshavin', isCorrect: false },
      ],
    },
    {
      questionText: "Who is the GOAT of the Premier Leauge?",
      answerOptions: [
        { answerText: 'Didier Drogba', isCorrect: false },
        { answerText: "Thierry Henry", isCorrect: true },
        { answerText: 'Frank Lampard', isCorrect: false },
        { answerText: 'Steven Gerrard', isCorrect: false },
      ],
    },
    {
      questionText: "Which player does not represent Spain?",
      answerOptions: [
        { answerText: 'Cesc Fabregas', isCorrect: false },
        { answerText: "Javier Hernández", isCorrect: true },
        { answerText: 'David Silva', isCorrect: false },
        { answerText: 'Juan Mata', isCorrect: false },
      ],
    },
    {
      questionText: "Which player does not play for Djurgarden?",
      answerOptions: [
        { answerText: 'Hjalmar Ekdal', isCorrect: false },
        { answerText: "Samuel Adegbenro", isCorrect: true },
        { answerText: 'Viktor Edvardsen', isCorrect: false },
        { answerText: 'Pierre Bengtsson', isCorrect: false },
      ],
    },
    {
      questionText: "Which player has the record of highest transfer fee from Allsvenskan?",
      answerOptions: [
        { answerText: 'Zlatan Ibrahimovic', isCorrect: false },
        { answerText: "Alexander Isak", isCorrect: true },
        { answerText: 'Fredrik Ljungberg', isCorrect: false },
        { answerText: 'Markus Rosenberg', isCorrect: false },
      ],
    },
    {
      questionText: "From which club did Chelsea sign Romelu Lukaku?",
      answerOptions: [
        { answerText: 'AC Milan', isCorrect: false },
        { answerText: "Internatzionale", isCorrect: true },
        { answerText: 'Juventus', isCorrect: false },
        { answerText: 'Everton', isCorrect: false },
      ],
    },
    {
      questionText: 'Which player scored the fastest hat-trick in the Premier League?',
      answerOptions: [
        { answerText: 'Robin Van Persie', isCorrect: false },
        { answerText: 'Wayne Rooney', isCorrect: false },
        { answerText: 'Thierry Henry', isCorrect: false },
        { answerText: 'Sadio Mané', isCorrect: true },
      ],
    },
  ]
  
  const [previousScore, setPreviousScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)
  const resetGame =()=>{
    setCurrentQuestion (0)
    setShowScore(false)
    setScore(0)
    setPreviousScore(score)
}

  const rightAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1); 
      
    }

    const nextQuetions = currentQuestion + 1;
    
    if (nextQuetions < questions.length) {
      setCurrentQuestion(nextQuetions);
    }
    else {
      setShowScore(true)
    }
  }

  return (

         
                    
    <View style={{backgroundColor:"#9AD0EC", color:"white", flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View>{showScore ? (    // This is gonna display if showScore is true

        
        <View style={{alignItems: 'center', justifyContent: 'center',fontFamily: "Sans-serif", fontSize: 20,
              backgroundColor: "#1572A1", width: 600, height: 400, marginTop: 50, padding: 10, 
              alignItems: "center", justifyContent: "center", borderRadius: 12, margin: 10}}>
          <Text style={{fontFamily: "Sans-serif", fontSize: 20, color: "white"}}> Quiz is finished!</Text>
           
                                     {/*View that display score + score message */}          
          <View style={{alignItems: 'center', justifyContent: 'center', margin: 10}}> 
             {score < 5 ? <Text style={{fontFamily: "Sans-serif", fontSize: 20, color: "white"}}> 
               Nice try! You got {score} out of {questions.length} 
             </Text>
            : <Text style={{fontFamily: "Sans-serif", fontSize: 20, color: "white"}}> 
                Good Job! You got {score} out of {questions.length}
            </Text>} 
            <Text style={{fontFamily: "Sans-serif", fontSize: 20, color: "white", margin: 10}}> Previous Score: {previousScore} </Text>
                    
                                         {/*View that display "start" + "play again" button */} 
              <View style={{margin: 15, flexDirection: 'row', alignItems: "center" }}> 
               <TouchableOpacity 
               onPress={() => navigation.navigate("Start")} 
               style={{height:80, width:120, borderRadius: 12, backgroundColor: "#9AD0EC",
               justifyContent:'center', alignItems: 'center', marginTop: 20, margin: 10}}> 
               <Text style={{color: "white", fontSize: 15}}>Go back to start</Text>
               </TouchableOpacity>
               <TouchableOpacity 
               onPress={resetGame} 
               style={{height:80, width:120, borderRadius: 12, backgroundColor: "#9AD0EC",
               justifyContent:'center', alignItems: 'center', marginTop: 20, margin: 10}}> 
             <Text style={{color: "white", fontSize: 15}}>Play again</Text>
             </TouchableOpacity>
             </View>
           </View>
         </View>
             
        )                              // Otherwise this is gonna display
          :
          (           
                
                
                <View>                 {/*View that display question number */}
                <View>                      
                <View style={{backgroundColor: "#1572A1", borderRadius:12, margin: 15, width: 500, height: 200}}>
                <Text style={{fontFamily: "Sans-serif", color: "white", fontSize: 20, padding: 20}}>Question: {currentQuestion + 1} of {questions.length}</Text>
                
                                       {/*View that display actual question */}
                <View style={{backgroundColor: "#1572A1",borderRadius:12}}>
                <Text style={{fontFamily: "Sans-serif", fontSize: 20, padding: 20, color: "white"}}>{questions[currentQuestion].questionText}</Text>
                </View>
                </View>
                </View>
                <View>                       {/*View that display answer options*/}
                <View style ={{color: "white"}}>{questions[currentQuestion].answerOptions.map((answerOptions) => (
                <TouchableOpacity style={{height:80, color: "White", width:200, borderRadius: 12,
                  margin: 15, backgroundColor: "#1572A1", fontFamily: "Sans-serif",justifyContent: "center", alignItems: 'center'}} onPress={() => rightAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}
               </TouchableOpacity>))}
              </View>
            </View>
          </View>
            
          )}
      </View>
    </View>
    
  );
}

export default QuizGame;