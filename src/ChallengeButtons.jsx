import { useState } from "react";

import wordlist from "./assets/wordlist.json";
import WordChallengeForm from "./WordChallengeForm";

import DelayedJudgment from "./DelayedJudgment";

export default function ChallengeButtons({gameState, setGameState}) {

const [showWordModal, setShowWordModal] = useState(false)
const [showNoWordModal, setShowNoWordModal] = useState(false)
const [filteredWords, setFilteredWords] = useState([])
const [answer, setAnswer] = useState({wording:""})

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
            setAnswer({wording: `Why, yes it is! ${gameState.players[gameState.playerTurn].name} wins the round`, outcome: 'Win'})
        } else {
            // display message
            // update game state
            setAnswer({wording: `Nope. That's not a word. You lose the round`, outcome: 'Lose'})
        }
        setShowWordModal(true)
    }

    function noWordChallenge(){
        filterWordList()
        setShowNoWordModal(true)
    }

function closeChallenge(){
    console.log('closing challenge')
    setShowNoWordModal(false)
    setShowWordModal(false)
    setAnswer({...answer, wording: ''})
    
    // add points
    let winnerIndex;
    if (answer.outcome === 'Win'){
        // find the current player
        winnerIndex = gameState.playerTurn
    } else if (answer.outcome === 'Lose'){
        // find the preceding player
        winnerIndex = Math.abs(gameState.playerTurn + 1) % 2
    }
    let playersArray = gameState.players
    playersArray[winnerIndex].score += 1
    // set up for next round
    let nextRound = (gameState.playerStart + 1) % 2
    setGameState({...gameState, players : playersArray, gamePhase: 'play', fixedLetters: [], playerStart : nextRound, playerTurn : nextRound})
    
    // also update the scores
    // update the player to start
    // update the game phase back to play

    // change playerOne to player 1 to allow for dynamic keys eg player + 1
}

  return (
    <div className='challenge-buttons'>
        <button id='complete-word' onClick={wordChallenge}>Challenge: <br/>Word Completed</button>
        <button id='no-word' onClick={noWordChallenge}>Challenge: <br/>No Word</button>
        {showWordModal &&             
        <div className="challenge">
            <h2>Challenge!</h2>
            <p>By {gameState.players[gameState.playerTurn].name}</p>
            <p>Is {gameState.fixedLetters} a word?</p>
            <DelayedJudgment answer = {answer} setShowModal = {setShowWordModal} closeChallenge = {closeChallenge}/>
        </div>}
        {showNoWordModal &&
        <div className="challenge">
            <h2>Challenge!</h2>
            <h2>{gameState['player_' + gameState.playerTurn]}</h2>
            <p>{gameState.players[gameState.playerTurn].name} does not think you have a word!</p>
            <WordChallengeForm setShowNoWordModal = {setShowNoWordModal} setGameState = {setGameState} gameState = {gameState} filteredWords = {filteredWords} setAnswer = {setAnswer} answer = {answer} closeChallenge = {closeChallenge}/>
        </div>
        }
    </div>
 )
}