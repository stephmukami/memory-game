import React,{useState,useEffect} from 'react'
import { images } from './ImageArray'
import Game from './Game'
import Header from './Header'
import Card from './Card'

export default function Logic(){
    //STATES

    //managing scores
    const [score, setScore] = useState(0)
    const [highscore, setHighScore] = useState(0)

    //managing selection of cards
    const [chosen,setChosen] = useState([])
    const [content, setContent] = useState(images)

    const handleScore = ()=>{
        setScore(prevCount => prevCount+1)
        console.log('for handle score')
      }
  
      const handleHighScore = ()=>{
        setHighScore(score)
        console.log('for handle high score')

      }

    function reset(){
        setChosen([])
        setHighScore(score)
        setScore(0)
        console.log('for handle reset')

    }

    function handleAddCard(card){
        setChosen(
            [card,...chosen]
        )
        console.log('for handle add card')

    }

    function randomize (arr){

	// Start from the last element and swap
	// one by one. We don't need to run for
	// the first element that's why i > 0
	for (let i = arr.length - 1; i > 0; i--)
	{   // Pick a random index from 0 to i inclusive
		let j = Math.floor(Math.random() * (i + 1));

		// Swap arr[i] with the element
		// at random index
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
}

    useEffect(
      () =>{
        function gameLogic(){
            randomize(content)
            setContent(content) //shd i bring in prev state
        }
            gameLogic()
      },[score,highscore]
    )

    function handleGamePlay(card){//use id or card?
        if (chosen.includes(card)){
            //set game over or restart message?
            reset()
        }else{
            handleAddCard(card)
            handleScore() 
            handleHighScore()
        }
        console.log('for handle game play')

    }
    return(
        <>

        <div className='container'>
        <Header
            score ={score}
            highscore = {highscore}
        />

        {  //implicit return
         content.map(item=>(
            <Card
                key = {item.id}
               handleGamePlay = {handleGamePlay}
               id = {item.id}
               title = {item.title}
               image = {item.src}
            />
         )

         )
        }
        </div>
   
        </>
    )
}