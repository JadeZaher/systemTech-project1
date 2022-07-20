import Board from './components/Board.Component'  
import {useState} from 'react'
import './App.css';

function App() {
  const data = [
    {listHeader: 'Back Log', cards:['Not happening', 'Not in a million years'] },
    {listHeader: 'To Do', cards:['Im Procrastinating on this one','And this one'] },
    {listHeader: 'In Progress', cards:['This was due last week','This is due today','Maybe this will get done on time'] },
    {listHeader: 'Complete', cards:['Has several bugs','Cant be bothered to fix this','Only god knows what this code does now'] }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          This is Challenge 1
        </h1>
          <Board data={data}/>
      </header>
    </div>
  );
}

export default App;
