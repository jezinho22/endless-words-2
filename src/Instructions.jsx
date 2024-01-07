
export default function Instructions({showInstructions}) {
  return (
    <div className="instructions">
      <div className="instruction-head">
        <h2>Instructions</h2>
        <button onClick={showInstructions}>Cancel</button>
      </div>
      <p>A word strategy game for two (at the moment). Corner your opponent, bluff them, surprise them, challenge them, using your word and spelling knowledge.</p>
      <h3>How to play</h3>
      <p>Add letters turn by turn to a string of letters without finishing a word. If you can force your opponent to finish a word, then you win the round. Of course you could just add letters randomly, but the other rule is that you must have a word in mind when you add a letter.</p> 
      <h3>Challenge buttons</h3>
      <p>You win by successfully challenging your opponent.</p>
      <p><span className = "yellow">Word Completed: </span> Use this button if you have forced your opponent to finish a word on their turn. If you are right, you win the round.</p>
      <p><span className = "yellow">No Word: </span> Use this button if you don't believe your opponent has a word in mind that can be made with the letter they added. It will ask them to input the word they were thinking of - if it is not a word, then you were right and you win the round. But maybe they had a word you hadn't thought of - and then you lose the round.</p> 
      <h3>Example of play</h3>
      <ol>
          <li>Player 1: <span className = "example-letters">o</span></li>
          <li>Player 2: <span className = "example-letters">ol</span></li>
          <li>Player 1: <span className = "example-letters">ole</span></li>
          <li>Player 2: <span className = "example-letters">tole</span> </li>
          <li>Player 1: <span className = "example-thought">{`[Ha! Think they have me cornered with 'stole'? I don't think so!]`}</span> <span className = "example-letters">tolen</span> </li>
          <li>Player 2: <span className = "example-thought">{`[What?!? Now they have cornered me! (stolen) Do I make the word or bluff that I have a word? Bluff!]`}</span> <span className = "example-letters">tolent</span> </li>
          <li>Player 1: <span className = "example-thought">{`[Could be a word. If it is I could just add -ly on the end, maybe. But maybe it's a bluff. I think it's a bluff]`}</span> <span className = "example-letters">Challenge: No word</span> </li>
          <li>Player 1 wins</li>
      </ol>
      <button onClick={showInstructions}>Cancel</button>
    </div>
  )
}
