import React, { Component, useState } from 'react';
import './styles/app.css'
import question from "./datas/datas.js"


function App() {
  

  const [showResult,setshowResult] = useState(false);
  const [showQuestionNo,setShowQuestionNo] = useState(0);
  const [score,setScore] = useState(0);
  const [puan,setPuan] = useState(0);

  const SifirlamakGerek = () => {
    setShowQuestionNo(0);
    setPuan(0)
    setshowResult(false)
    setScore(0)
  }

  const optionClick = (isCorrect,gelenpuan) =>{
     
     setPuan(puan+gelenpuan);
   
    if(isCorrect){
      setScore(score+1)
    }
 if(showQuestionNo+1 < question.length){

  setShowQuestionNo(showQuestionNo+1);
 }
else{
  setshowResult(true)

}



  }

    return (
      <div className="App">
        <div className='container'>

       <h1>Tatil Testi</h1>
       <h2> Current Score : 2</h2>

      {
          showResult ? 

       <div className='result'>
       <h1>Kesin Tatile Gitmeniz Gerek</h1>
       <h1> 90 Üzerinden gitmek için puanın {puan} yani yaklasik %{ Math.floor(((puan/90)*100))}</h1>
       <button onClick={()=>SifirlamakGerek()}>Restart</button>

      </div> 

      :
      <div className='question-card'>
      <h2>question {showQuestionNo} out of {question.length}</h2>

      <h3> {(question[showQuestionNo]).text}</h3>

      <ul>

         { question[showQuestionNo].options.map((option)=> {
             
             return (
              <li onClick={()=>optionClick(option.isCorrect,option.puan)} key={option.id}>{option.text}</li>
             ) 
         }) }
    
      </ul>
     </div>


      }
       
   


        </div>    
      </div>
    );
  }


export default App;
