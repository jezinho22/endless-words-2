import { useState } from 'react'

import './App.css'
import './reset.css'


import Header from './Header'
import PlayerForm from './PlayerForm'
import Players from './Players'
import Game from './Game'
import ChallengeButtons from './ChallengeButtons'

export default function App() {
const [playerState, setPlayerState] = useState({})
const [gameState, setGameState] = useState({fixedLetters:[]})

  return (
    <>
    <Header/>
    {!gameState.started && <PlayerForm setPlayerState = {setPlayerState} playerState = {playerState} setGameState = {setGameState} gameState = {gameState}/>}
    {gameState.started && <Players playerState = {playerState}/>}
    {gameState.started && 
    <>
      <Game setPlayerState = {setPlayerState} playerState = {playerState} setGameState = {setGameState} gameState = {gameState}/>
      <ChallengeButtons setPlayerState = {setPlayerState} playerState = {playerState} setGameState = {setGameState} gameState = {gameState}/>
    </>
    }
      
    </>
  )
}
