export default function PlayerDisplay({ gameState }) {
	// toggle classname to add turn styling to player label
	return (
		<div id="player-display">
			<div id="player-one">
				<p>Player One: </p>
				<p className = {gameState.playerTurn === 0 ? 'turn' : 'not-turn'}>{gameState.players[0].name}</p>
				<p className = 'score'>{gameState.players[0].score}</p>
			</div>
			<div id="player-two">
				<p>Player Two: </p>
				<p className = {gameState.playerTurn === 1 ? 'turn' : 'not-turn'}>{gameState.players[1].name}</p>
				<p className = 'score'>{gameState.players[1].score}</p>
			</div>
			{/* <p>Player Three: {players.playerThree}</p>
			<p>Player Four: {players.playerFour}</p> */}
		</div>
	);
}
