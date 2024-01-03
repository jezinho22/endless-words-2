import { useState } from "react";
import Letter from "./Letter.jsx";


export default function Game({gameState, setGameState}) {
	const [form, setForm] = useState({});

	// in case player types in both boxes
	// switch inputs and clear what was in previous one
	function handleClick(event) {
		const formSet = Object.keys(form).length > 0;
		if (formSet && event.target.name === "firstLetter") {
			let ignoreInput = document.getElementsByName("lastLetter")[0];
			ignoreInput.value = "";
		} else if (formSet && event.target.name === "lastLetter") {
			let ignoreInput = document.getElementsByName("firstLetter")[0];
			ignoreInput.value = "";
		}
	}

	// update letter to be added - 
	// and which input - start string or end string
	function handleChange(event) {
		setForm({ [event.target.name]: event.target.value });
	}

	function handleSubmit(event) {
		event.preventDefault();
		// add the letter to the fixedletters
		// get the input the letter comes from
		const v = Object.keys(form)[0];
		// add the letter to the array and check it against wordlist
		let letterArray = []
		let inputLetter = form[v].toLowerCase()
		if (v === "lastLetter") {
			letterArray = [...gameState.fixedLetters, inputLetter]
		} else if (v === "firstLetter") {
			letterArray = [inputLetter, ...gameState.fixedLetters]
		}
		// reset inputs
		setForm({});
		event.target[v].value = "";
		// move player turn on
		setGameState({...gameState, fixedLetters: letterArray, playerTurn: (gameState.playerTurn + 1) %2})
	}



	return (
		<div>
			<div id="letter-string">
				{gameState.fixedLetters.length > 0 &&
					gameState.fixedLetters.map((letter, index) => {
						return <Letter fixedLetter={letter} key={"L" + index} />;
					})}
			</div>
			<form
				id="letter-form"
				onSubmit={handleSubmit}
				onChange={handleChange}
				onClick={handleClick}>
				<div>
					{gameState.fixedLetters.length > 0 && (
						<input type="text" name="firstLetter" maxLength={1} />
					)}

					<input type="text" name="lastLetter" maxLength={1} />
				</div>
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
}