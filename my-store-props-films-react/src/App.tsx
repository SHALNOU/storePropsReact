import React from 'react';
import Stars from './Stars';
import StarProp from './Star';

function App() {
	return (
		<div className="App">
			<h1>Movie Rating</h1>
			<Stars count={3} /> {/* Пример использования компонента Stars */}
		</div>
	);
}

export default App;
