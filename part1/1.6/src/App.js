import { useState } from 'react'

const Statistics = (props) => {
  const all = props.bad + props.neutral + props.good
  return (
    <div>
      <p>
        all {all}
      </p>
      <p>
        average {(props.bad * -1 + props.good) / (props.bad + props.neutral + props.good)}
      </p>
      <p>
        positive {props.good / (props.bad + props.neutral + props.good)}%
      </p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = newValue => {
    setGood(good + 1)
  }
  const setToNeutral = newValue => {
    setNeutral(neutral + 1)
  }
  const setToBad = newValue => {
    setBad(bad + 1)
  }
  if (good + bad + neutral == 0) {
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
        <p>No feedback given.</p>
      </div>
    )
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
      <Statistics bad={bad} neutral={neutral} good={good}></Statistics>
    </div>
  )
}

export default App