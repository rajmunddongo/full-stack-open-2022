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
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <p>{course}</p>
      <p>{part1.name} {part1.exercises}</p>
      <p>{part2.name} {part2.exercises}</p>
      <p>{part3.name} {part3.exercises}</p>
      <p>Number of exercises {part1.exercises+part2.exercises+part3.exercises} </p>
    </div>
  )
}


export default App