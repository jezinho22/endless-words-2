import { useState } from "react";

export default function PlayerForm({ setGameState, gameState }) {
	const [form, setForm] = useState({});

	function handleChange(event) {
		setForm({ ...form, [event.target.name]: event.target.value });
	}

	function handleSubmit(event) {
		event.preventDefault();
		// set up state for new game
		// work out how to put players and scores into an array
		console.log(form)
		setGameState({ ...gameState, players : [{player_1 : form.player_1, player_1_Score : 0}, 
												{player_2 : form.player_2, player_2_Score : 0}, 
												{player_3 : form.player_3, player_3_Score : 0}, 
												{player_4 : form.player_4, player_4_Score : 0}], 
												playerTurn: 0, playerStart: 0, gamePhase:'play' });
	}

	return (
		<div>
			<form onChange={handleChange} onSubmit={handleSubmit}>
				<div id="playerForm">
					<input className="playerInput" name="player_1" placeholder="Player One" type="text" />
					<input className="playerInput" name="player_2" placeholder="Player Two" type="text" />
					<button type="submit">Submit</button>				
				</div>

			</form>
		</div>
	);
}
