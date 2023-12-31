import { useState } from 'react'

import './reset.css'
import './App.css'

import Header from './Header'
import PlayerForm from './PlayerForm'
import PlayerDisplay from './PlayerDisplay'
import Game from './Game'
import ChallengeButtons from './ChallengeButtons'

export default function App() {
const [gameState, setGameState] = useState({fixedLetters:[], gamePhase: 'add players'})

  return (
    <>
    <Header/>
    {gameState.gamePhase === 'add players' && <PlayerForm  setGameState = {setGameState} gameState = {gameState}/>}
    {gameState.gamePhase === 'play' && 
    <>
      <PlayerDisplay gameState = {gameState}/>
      <Game  setGameState = {setGameState} gameState = {gameState}/>
      <ChallengeButtons  setGameState = {setGameState} gameState = {gameState}/>
    </>
    }
      
    </>
  )
}
