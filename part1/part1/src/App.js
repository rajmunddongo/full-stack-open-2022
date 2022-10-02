const Header = (param) => {
  return (
    <div>
      <p>
      {param.course}      </p>
    </div>
  )
}
const Total = (props) => {
  const sum = props.exercises1 + props.exercises2 + props.exercises3
  return (
    <div>
      <p>
      Number of exercises {sum} </p>
    </div>
  )
}
const Part =(param) =>{
  return(
    <div>
      <p>
      {param.string} {param.exercise}
      </p>
    </div>
  )
}
const Content = (param)=> {
  return (
    <div>
      <Part string={param.part1} exercise={param.exercises1}/>
      <Part string={param.part2} exercise={param.exercises2}/>
      <Part string={param.part3} exercise={param.exercises3}/>
    </div>
  )
}

const App = () => {
  // const-definitions
  const courses = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
      <Header course={courses} />
      <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1}  exercises2={exercises2}  exercises3={exercises3}/>
      <Total  exercises1={exercises1}  exercises2={exercises2}  exercises3={exercises3}/>
    </div>
  )
}


export default App