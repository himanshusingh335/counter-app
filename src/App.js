import { useState } from 'react';
import CounterButton from './button';
import ShowCounter from './counts';

function App() {
  const [count, increment] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <h1>Counter App</h1>
      <ShowCounter props={count} />
      <CounterButton increment={increment} count={count} />
    </div>
  );
}

export default App;
