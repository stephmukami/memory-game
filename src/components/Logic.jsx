import React,{useState,useEffect} from 'react'
import { images } from './ImageArray'
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
      }
  
      const handleHighScore = ()=>{
        setHighScore(score)

      }

    function reset(){
        setChosen([])
        setHighScore(score)
        setScore(0)

    }

    function handleAddCard(card){
        setChosen(
            [card,...chosen]
        )

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
            setContent(content) 
        }
            gameLogic()
      },[score,highscore]
    )

    function handleGamePlay(card){
        if (chosen.includes(card)){
            reset()
        }else{
            handleAddCard(card)
            handleScore() 
            handleHighScore()
        }

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