import wordlist from "../assets/wordlist.json";

export default function ChallengeButtons() {
    function wordCheck(fixedLetterArray) {
		const letterString = fixedLetterArray.join("");
		const filtered = wordlist.filter((word) => word.includes(letterString));
		let response = "";
		if (filtered.length === 0) {
			response = "Uh oh! There is no word you can now make with these letters";
		} else {
			const wholeWord = filtered.find((word) => word === letterString);
			response = wholeWord
				? "You finished the word: " + wholeWord
				: "Yep that's fine. Next player.";
		}
		return response;
	}
  return (
    <div>
        <button id='complete-word' onClick={wordCheck}>Challenge Word Completed</button>
        <button id='no-word' onClick={wordCheck}>Challenge No Word</button>
    </div>
  )
}
