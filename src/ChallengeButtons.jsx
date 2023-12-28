import { useState } from "react";

import wordlist from "./assets/wordlist.json";
import WordChallengeForm from "./WordChallengeForm";

export default function ChallengeButtons({gameState, setGameState}) {
const [showWordModal, setShowWordModal] = useState(false)
const [showNoWordModal, setShowNoWordModal] = useState(false)
const [filteredWords, setFilteredWords] = useState([])
const [message, setMessage] = useState({});



    function filterWordList(){
        // make collected letters into a string
        const letterString = gameState['fixedLetters'].join("");
        // filter list 
        const filtered = wordlist.filter((word) => word.includes(letterString));
        // create response
        setFilteredWords(filtered)
        return filtered
    }

    function wordChallenge(){
        // prevent error if there is no word
        const letterString = gameState['fixedLetters'].join("");
        const itsAWord = wordlist.find((word) => word === letterString);
        if (itsAWord){
            // display message
            // update game state
            console.log('it is a word')
        } else {
            // display message
            // update game state
            console.log('It is not a word')
        }
        setShowWordModal(true)
    }

    function noWordChallenge(){
        filterWordList()
        setShowNoWordModal(true)
    }

function closeChallenge(){
    setShowNoWordModal(false)
    setShowWordModal(false)
    setMessage({})
    // also update the scores
    // update the player to start
    // update the game phase back to play
}



  return (
    <div>
        <button id='complete-word' onClick={wordChallenge}>Challenge Word Completed</button>
        <button id='no-word' onClick={noWordChallenge}>Challenge No Word</button>
        {showWordModal &&             
        <div className="challenge">
            <h2>Challenge by</h2>
            <h2>{gameState.playerTurn === 0 ? gameState.playerOne : gameState.playerTwo}</h2>
            <p>Is {gameState.fixedLetters} a word?</p>
            <p>Why, yes it is! </p>
            <button onClick={()=>setShowWordModal(false)}>Continue</button>
        </div>}
        {showNoWordModal &&
        <div className="challenge">
            <h2>Challenge!</h2>
            <h2>{gameState.playerTurn === 0 ? gameState.playerOne : gameState.playerTwo}</h2>
            <p>does not think you have a word!</p>
            <WordChallengeForm setGameState = {setGameState} gameState = {gameState} filteredWords = {filteredWords} message = {message} setMessage = {setMessage}/>
            <button onClick={()=>setShowNoWordModal(false)}>Continue</button>
        </div>
        }
    </div>
 )
}