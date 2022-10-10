const Header = (props) => {
  return <h1>{props.course.name}</h1>
}
const Total = (props) => {
  let sum = 0
  props.parts.forEach(element => {
    sum=sum+element.exercises;
  });
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
  const variable = param.parts.map(element => 
  <p>{element.name} {element.exercises}</p>
  );
  console.log(variable)
  return (
    <div>
      {variable}
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}


export default App