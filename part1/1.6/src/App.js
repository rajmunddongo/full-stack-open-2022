import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.setToGood}>
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = newValue => {
    setGood(good+1)
  }
  const setToNeutral = newValue => {
    setNeutral(neutral+1)
  }
  const setToBad = newValue => {
    setBad(bad+1)
  }

  return (
    
    <div>
      <h1>
        give feedback
      </h1>
      <button onClick={setToGood}>
        good
      </button>
      <button onClick={setToNeutral}>
        neutral
      </button>
      <button onClick={setToBad}>
        bad
      </button>
      <h1>
        statistics
      </h1>
      <p>
        good {good}
      </p>
      <p>
        neutral {neutral}
      </p>
      <p>
        bad {bad}
      </p>
      <p>
        all {bad+neutral+good}
      </p>
      <p>
        average {(bad*-1+good)/(bad+neutral+good)}
      </p>
      <p>
        positive {good/(bad+neutral+good)}%
      </p>
    </div>
  )
}

export default App