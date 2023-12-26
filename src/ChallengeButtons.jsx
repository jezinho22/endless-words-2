import { useState } from "react";

import wordlist from "./assets/wordlist.json";
import WordChallengeForm from "./WordChallengeForm";

export default function ChallengeButtons({gameState, setGameState}) {
const [showWordModal, setShowWordModal] = useState(false)
const [showNoWordModal, setShowNoWordModal] = useState(false)
const [filteredWords, setFilteredWords] = useState([])


    function filterWordList(){
        setGameState({...gameState, gamePhase: 'challenge' })

        // make collected letters into a string
        // would this be better done as they are collected?
        const letterString = gameState['fixedLetters'].join("");
        console.log(letterString)
        // filter list 
        const filtered = wordlist.find((word) => word.includes(letterString));
        // create response
        console.log(filtered)
        return filtered
    }

    function wordChallenge(){
        // prevent error if there is no word
        const letterString = gameState['fixedLetters'].join("");
        console.log(letterString)
        const itsAWord = wordlist.find((word) => word === letterString);
        if (itsAWord){
            // display message
            // update game state
        } else {
            // display message
            // update game state
        }
        setShowWordModal(true)
    }

    function noWordChallenge(){
        console.log('noword button working')
        setFilteredWords(filterWordList())

        // create response
        setShowNoWordModal(true)
        // deal with feedback from WordChallenge
    }

    
    // check whose turn it is
    // complete challenge as this player's turn
    // if successful award point to player
    // if unsuccessful award point to other player
    // reset game board and switch first turn to new player




  return (
    <div>
        <button id='complete-word' onClick={wordChallenge}>Challenge Word Completed</button>
        <button id='no-word' onClick={noWordChallenge}>Challenge No Word</button>
        {showWordModal &&             
        <div className="challenge">
            <h2>Challenge by</h2>
            <h2>{gameState[gameState.playerTurn]}</h2>
            <p>Is {gameState.fixedLetters} a word?</p>
            <p>Why, yes it is! </p>
            <button onClick={()=>setShowWordModal(false)}>Continue</button>
        </div>}
        {showNoWordModal &&
        <div className="challenge">
            <h2>Challenge!</h2>
            <h2>{gameState[gameState.playerTurn]}</h2>
            <p>does not think you have a word!</p>
            <WordChallengeForm setGameState = {setGameState} gameState = {gameState} filteredWords = {filteredWords}/>
            <button onClick={()=>setShowNoWordModal(false)}>Continue</button>
        </div>
        }
    </div>
 )
}