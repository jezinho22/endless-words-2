import { useState } from "react";
import wordlist from "./assets/wordlist.json";

import DelayedJudgment from "./DelayedJudgment";

export default function WordChallengeForm({answer, setAnswer, gameState, filteredWords, setShowNoWordModal, closeChallenge}) {
    const [inputWord, setInputWord] = useState('');

    function handleChange(event){
        setInputWord( event.target.value );
    }

	function handleSubmit(event) {
		event.preventDefault();
        console.log('submit working')
		// set up state for new game
        let found = filteredWords.find( (word) => word === inputWord);
        // win - easy
        if (found && filteredWords.length > 1) {
            setAnswer ({wording: `Yes, you can make ${inputWord}. You win the round. You could also have made ${filteredWords.length - 1} other words`, outcome: 'Win'})
        // win
        } else if (found) {
            setAnswer ({wording: `Yes, you can make ${inputWord}. You win the round`, outcome: 'Win'})
        // loss, but you could have won
        } else if (!found && filteredWords.length > 0) {
            let randomIndex = Math.floor(Math.random()* filteredWords.length)
            if (filteredWords.length === 1){
                randomIndex = 0
            }
            setAnswer ({wording: `${inputWord} is not in the list of words you can make. You lose the round. Shame, as you could have had ${filteredWords[randomIndex]} and ${filteredWords.length - 1} other words!`, outcome: 'Lose'})
        // loss - search wordlist again - is the input word actually a word at all?
        } else if (wordlist.find( (word) => word === inputWord) != true){
            setAnswer ({wording: `${inputWord} is not even a real word according to my list. Shame on you! You lose the round`, outcome: 'Lose'})
        // loss - finally - the input word cannot be made using these letters
	    } else if (!found) {
            setAnswer ({wording: `You can't actually make ${inputWord}. In fact you can't make any word from ${gameState["fixedLetters"].join("")}. You lose the round`, outcome: 'Lose'})
        }
    }

  return (
    <div>
        <p>What word were you thinking of?</p>
        <form onSubmit={handleSubmit}>
        <input name="wordInHead" onChange={handleChange}/>
        <button type='submit'>Submit</button>
        </form>
        <DelayedJudgment answer = {answer} closeChallenge = {closeChallenge}/>
    </div>
  )
}
