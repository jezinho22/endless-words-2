export default function Players({ gameState }) {
	return (
		<div id="player-display">
			<div id="player-one">
				<p className = {gameState.playerTurn === 0 ? 'turn' : 'not-turn'}>Player One: {gameState.playerOne}</p>
				<div>{gameState.playerOneScore}</div>
			</div>
			<div id="player-two">
				<p className = {gameState.playerTurn === 1 ? 'turn' : 'not-turn'}>Player Two: {gameState.playerTwo}</p>
				<div>{gameState.playerTwoScore}</div>
			</div>
			{/* <p>Player Three: {players.playerThree}</p>
			<p>Player Four: {players.playerFour}</p> */}
		</div>
	);
}
