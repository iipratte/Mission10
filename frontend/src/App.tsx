import './App.css';
import BowlerList from './BowlerList';

function Heading() {
  return (
    <>
      <h1>Bowling League Database</h1>
      <h2>
        Below, you can find the info for bowlers on the Marlins and the Sharks.
      </h2>
    </>
  );
}

function App() {
  return (
    <>
      <Heading />
      <br />
      <br />
      <BowlerList />
    </>
  );
}

export default App;
