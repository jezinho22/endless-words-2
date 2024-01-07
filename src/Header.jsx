import { useState } from "react";

import Instructions from "./Instructions";

export default function Header() {
	const [instructionsModal, setInstructionsModal] = useState(false)

	function showInstructions () {
		setInstructionsModal(!instructionsModal)
	}

	return <header>
		<div className="header">
		<h1>WORDLESS</h1>
		<button onClick={showInstructions}>Instructions</button>
		</div>
		{instructionsModal && <Instructions showInstructions = {showInstructions}/>}
		</header>;
}
