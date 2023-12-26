import { useState } from "react";

export default function WordChallengeForm(gameState, setGameState, filteredWords) {
    const [inputWord, setInputWord] = useState('');
    const [message, setMessage] = useState('');

    function handleChange(event){
        setInputWord( event.target.value );
        console.log(inputWord)
    }

	function handleSubmit(event) {
		event.preventDefault();
        console.log('Your word is supposed to be: ' + inputWord)
		// set up state for new game
        console.log(filteredWords)
        let found = filteredWords.find((word) => word === inputWord)
        if (found && filteredWords.length > 1) {
            setMessage (`Yes, you can make ${inputWord}. You win the round. You could also have made ${filteredWords.length - 1} other words`)
        } else if (found) {
            setMessage (`Yes, you can make ${inputWord}. You win the round`)
        } else if (!found && filteredWords.length > 0) {
            let randomIndex = Math.floor(Math.random()* filteredWords.length)
            if (filteredWords.length === 1){
                randomIndex = 0
            }
            setMessage (`${inputWord} is not in the list of words you can make. You lose the round. Shame, as you could have had ${filteredWords[randomIndex]} and ${filteredWords.length - 1} other words!`)
        } else if (!found) {
            setMessage (`${inputWord} is not in the list of words you can make. You lose the round`)
        } 
	}

  return (
    <div>
        <p>What word were you thinking of?</p>
        <form onSubmit={handleSubmit}>
        <input name="wordInHead" onChange={handleChange}/>
        <button type='submit'>Submit</button>
        </form>
        {message.length > 0 && <p>{message}</p>}
    </div>
  )
}
