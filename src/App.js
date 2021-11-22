import React from "react";

import { Counter } from "./features/counter/Counter";
import { Session } from "./features/counter/Session";
import { Break } from "./features/counter/Break";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				25+5 Clock
				<Break />
				<Session />
				<Counter />
			</header>
		</div>
	);
}

export default App;
