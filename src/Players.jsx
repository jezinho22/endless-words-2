export default function Players({ playerState }) {
	return (
		<div id="player-display">
			<p>Player One: {playerState.playerOne}</p>
			<p>Player Two: {playerState.playerTwo}</p>
			{/* <p>Player Three: {players.playerThree}</p>
			<p>Player Four: {players.playerFour}</p> */}
		</div>
	);
}
