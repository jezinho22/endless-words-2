import wordlist from "./assets/wordlist.json";

export default function ChallengeButtons({gameState, setGameState, playerState, setPlayerState}) {
    // throw up a modal for the challenge
    // to appear just below the letters
    // add slight delay for suspense ...
    // give feedback on 'no word' challenge


    // return an array of words which match gameState.fixedLetters
    function wordListFilter() {
		const letterString = gameState['fixedLetters'].join("");
		return wordlist.filter((word) => word.includes(letterString));
	}

    // for no word challenge - ask what word you were going to make
    // check this against wordlist
    // and against string
    // return 'Challenge successful' or 'Challenge unsuccessful'
    function wordChallenge(){
        const filtered = wordListFilter()
        const wholeWord = filtered.find((word) => word === letterString);

            return wholeWord
        }

    // for word challenge
    // check letterstring against wordlist
    // return 'Challenge successful' or 'Challenge unsuccessful'
    function noWordChallenge(){
		if (filtered.length === 0) {
            const playerTurn = playerState.playerTurn
        }}
    
    // check whose turn it is
    // complete challenge as this player's turn
    // if successful award point to player
    // if unsuccessful award point to other player
    // reset game board and switch first turn to new player



  return (
    <div>
        <button id='complete-word' onClick={wordChallenge}>Challenge Word Completed</button>
        <button id='no-word' onClick={noWordChallenge}>Challenge No Word</button>
    </div>
  )
}
