import { useState } from 'react'

const StatisticLine = (props) =>{
  if(props.text=="positive"){
    return(
      <div>
      <p>{props.text} {props.value}%</p>
    </div>
    )
  }
  return(
    <div>
      <p>{props.text} {props.value}</p>
    </div>
  )
}
const Button = (props) =>{

  return(
    
      <button onClick={props.func}>{props.text}</button>
    
  )
}

const Statistics = (props) => {
  const all = props.bad + props.neutral + props.good
  return (
    <div>
      <StatisticLine text="good" value ={props.good}/>
      <StatisticLine text="neutral" value ={props.neutral}/>
      <StatisticLine text="bad" value ={props.bad}/>
      <StatisticLine text="all" value ={all}/>
      <StatisticLine text="average" value ={(props.bad * -1 + props.good) / (props.bad + props.neutral + props.good)}/>
      <StatisticLine text="positive" value ={props.good / (props.bad + props.neutral + props.good)}/>
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
      <Button func={setToGood} text='good'></Button>
      <Button func={setToNeutral} text='neutral'></Button>
      <Button func={setToBad} text='bad'></Button>
        <p>No feedback given.</p>
      </div>
    )
  }
  return (

    <div>
      <h1>
        give feedback
      </h1>
      <Button func={setToGood} text='good'></Button>
      <Button func={setToNeutral} text='neutral'></Button>
      <Button func={setToBad} text='bad'></Button>
      <h1>
        statistics
      </h1>
      <Statistics bad={bad} neutral={neutral} good={good}></Statistics>
    </div>
  )
}

export default App