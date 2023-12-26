import { useState } from "react";

export default function PlayerForm({ setGameState, gameState }) {
	const [form, setForm] = useState({});

	function handleChange(event) {
		setForm({ ...form, [event.target.name]: event.target.value });
	}

	function handleSubmit(event) {
		event.preventDefault();
		// set up state for new game
		setGameState({ ...gameState, ...form, playerOneScore: 0, playerTwoScore: 0, playerTurn: 'playerOne', playerStart: 'playerOne', gamePhase:'start' });
		console.log(gameState)
	}

	return (
		<div>
			<form onChange={handleChange} onSubmit={handleSubmit}>
				<div id="playerForm">
					<input className="playerInput" name="playerOne" placeholder="Player One" type="text" />
					<input className="playerInput" name="playerTwo" placeholder="Player Two" type="text" />
					<button type="submit">Submit</button>				
				</div>

			</form>
		</div>
	);
}
