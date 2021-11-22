import React from "react";

import { Counter } from "./features/counter/Counter";
import { Session } from "./features/session/Session";
import { Break } from "./features/break/Break";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				25+5 Clock
				<div>
					<Break />
					<Session />
				</div>
				<Counter />
			</header>
		</div>
	);
}

export default App;
