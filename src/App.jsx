import { useState } from 'react'

import './App.css'

import Header from './Header'
import PlayerForm from './PlayerForm'
import Players from './Players'

export default function App() {
const [playerState, setPlayerState] = useState({})
const [gameState, setGameState] = useState({})

  return (
    <>
    <Header/>
    {!gameState.started && <PlayerForm setPlayerState = {setPlayerState} playerState = {playerState} setGameState = {setGameState} gameState = {gameState}/>}
    {gameState.started && <Players playerState = {playerState}/>}
      
    </>
  )
}
