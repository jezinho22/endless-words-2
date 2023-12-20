export default function Players({ gameState }) {
	return (
		<div id="player-display">
			<p>Player One: {gameState.playerOne}</p>
			<p>Player Two: {gameState.playerTwo}</p>
			{/* <p>Player Three: {players.playerThree}</p>
			<p>Player Four: {players.playerFour}</p> */}
		</div>
	);
}
