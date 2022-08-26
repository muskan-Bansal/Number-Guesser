// players can guess a number 
// Game values
 let min=1,max=10,
 winningNum=getRandomNum(min,max) , guessesLeft=3;
//  UI elements
 const game=document.querySelector('#game'),
       minnum= document.querySelector('.min-num'),
       maxNum=document.querySelector('.max-num'),
       guessBtn=document.querySelector('#guess-btn'),
       guessInput=document.querySelector('#guess-input'),
       message=document.querySelector('.message');
      
      
// Assign min and max
minnum.textContent=min;
maxNum.textContent=max;

// play again
game.addEventListener('mousedown',function(e){
    if(e.target.className==='play-again'){
       window.location.reload();
    }
})


// Listen for guess
guessBtn.addEventListener('click',function(e) {
  //  console.log(guessInput.value);
     let guess=parseInt(guessInput.value); 
   console.log(guess);

    //  validate 
   
    
    if(isNaN(guess) || guess<min || guess>max ){
      
      setmsg('Please enter a valid number between ' + min +' and ' + max,'red');
    }else
     if(guess===winningNum){
            guessInput.disabled=true;
            // change border color
            guessInput.style.borderColor=' green';
            // set message
            setmsg( '  Correct guess, YOU WON!!!','green');
            // Game Over-won


    }else{
            //  wrong number
            guessesLeft-=1;
            if(guessesLeft===0){
                //  Game over-lost
                guessInput.disabled=true;
                // change border color
                guessInput.style.borderColor=' red';
                // set message
                setmsg( ' All chances over ,YOU LOST! \n The correct guess is '+ winningNum,'red');
                guessBtn.value='Play Again';
                guessBtn.className='play-again';


            }else{
              //  Game continues -wrong answer
              guessInput.value='';
                  setmsg('WRONG GUESS! You still have ' + guessesLeft+" Guesses left  ",'blue');
                  

            }
    }
}); 
// Get winning num
function getRandomNum(min,max){ 
  return Math.floor(Math.random()*(max-min+1)+min);

}
function setmsg(msg,color){
  message.style.color=color;
  message.textContent=msg;
}