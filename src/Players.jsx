export default function Players({ gameState }) {
	// toggle classname to add turn styling to player label
	return (
		<div id="player-display">
			<div id="player-one">
				<p className = {gameState.playerTurn === 0 ? 'turn' : 'not-turn'}>Player One: {gameState.player_1}</p>
				<div>{gameState.player_1_Score}</div>
			</div>
			<div id="player-two">
				<p className = {gameState.playerTurn === 1 ? 'turn' : 'not-turn'}>Player Two: {gameState.player_2}</p>
				<div>{gameState.player_2_Score}</div>
			</div>
			{/* <p>Player Three: {players.playerThree}</p>
			<p>Player Four: {players.playerFour}</p> */}
		</div>
	);
}
