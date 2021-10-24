
import './App.css';
import { CustomButton } from './components/html/Button';
// import { Toast } from './components/templateliterals/Toast';
// import { RandomNumber } from './components/restrictions/RandomNumber';
// import List from './components/generics/List';
// import { Counter } from './components/state/Counter';
// import User from './components/state/User';
// import LoggedIn from './components/state/LoggedIn';
// import { Container } from './components/Container';
// import { Button } from './components/Button';
// import { Input } from './components/input';
// import { Heading } from './components/Heading';
// import { Oscar } from './components/Oscar';
// import { Status } from './components/Status';
// import { Greet } from './components/Greet';
// import { Person } from './components/Person';
// import { PersonList } from './components/PersonList';

function App():JSX.Element {

  // const personName = {
  //   first: 'Bruce',
  //   last:'Wayne'
  // }

  // const nameList = [
  //   {
  //     id:1,
  //     first:'Bruce',
  //     last:'Wayne'
  //   },
  //   {
  //     id:2,
  //     first:'Clark',
  //     last:'Kent'
  //   },
  //   {
  //     id:3,
  //     first:'Princess',
  //     last:'Diana'
  //   }
  // ]

  return (
    <div className="App">

    <CustomButton variant='primary' onClick={() => console.log('Clicked')} > 
      Primary Button
    </CustomButton>

      {/* <Greet name='Vishawas' messageCOunt={10} isLoggedIn={true} /> */}
      {/* <Person name={personName}/>
      <PersonList names={nameList} /> */}
      {/* <Status status= "error" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar Goes to Leonardo Dicpario!</Heading>
      </Oscar> */}

      {/* <Button handleClick={(event,id) => {
        console.log('Button CLicked',id, event)
      }} />

      <Input value='' handleChange={(event => console.log(event.target.value))} /> */}

      {/* <Container styles={{border:'1px solid black', padding:'1rem'}} /> */}
      {/* <LoggedIn/> */}
      {/* <User/> */}
      {/* <Counter/> */}
      {/* <List
        items={['Batman','Superman','Wonder Woman']}
        onClick={(item) => console.log(item)}
      />
      <List
        items={[1,2,3]}
        onClick={(item) => console.log(item)}
      /> */}
      {/* <List
        items={[
          {
            id:1,
            first:'Bruce',
            last:'Wayne'
          },
          {
            id:2,
            first:'Clark',
            last:'Kent'
          },
          {
            id:3,
            first:'Princess',
            last:'Diana'
          }
        ]}
        onClick={(item) => console.log(item)}
      /> */}

      {/* <RandomNumber value={10} isPositive /> */}
      {/* <Toast position='center' /> */}
    </div>
  );
}

export default App;
