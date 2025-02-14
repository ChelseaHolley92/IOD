//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
// import PropsDisplayer from './componets/PropsDisplayer
// import City from './components/City'
// import Adress from ./Components/Address

//function App() {
 // const [count, setCount] = useState(0)
//import pet from './components/Pet'
//import Greeting from './components/Greeting
//  return (
 //   <>
 //     <div>
 //       <a href="https://vite.dev" target="_blank">
//          <img src={viteLogo} className="logo" alt="Vite logo" />
//        </a>
 //       <a href="https://react.dev" target="_blank">
//          <img src={reactLogo} className="logo react" alt="React logo" />
//        </a>
 //     </div>
 //     <h1>Vite + React</h1>
 //     <div className="card">
 //       <button onClick={() => setCount((count) => count + 4)}>
 //         count is {count}
 //       </button>
 //       <p>
 //         Edit <code>src/App.jsx</code> and save to test HMR
 //       </p>
//      </div>
 //     <p className="read-the-docs">
 //       Click on the Vite and React logos to learn more
 //     </p>
 //   </>
 // )
 // Slide 16



const spiderman = { 
  name: 'Spiderman',
  alterEgo: 'Peter Parker',
  catchPhrase: 'With great power comes great responsibilities'
}

const spideyJSX = {<div>
  <h3>{spiderman.name}</h3>
    <blockquote>{spiderman.catchPhrase}</blockquote>
    <cite>{spiderman.alterEgo}</cite>
      </div>
    )

// single parent <div> element
const spideyJSX = (<div>
  <h3>{spiderman.name}</h3>
  <blockquote>{spiderman.catchPhrase}</blockquote>
  <cite>{spiderman.alterEgo}</cite>
  </div>);
  
function ExampleComponent() {
  return (
  <div className="ExampleComponent componentBox">
  <h1>My Example Component</h1>
  <p>My first React component!</p>
  </div>
  )}
  
  function Welcome(props) { // custom Welcome component
    return (
    <div className="Welcome">
    {/* if the 'name' prop exists, render it on the screen */}
    <h3>Welcome {props.name}!</h3>
    {/* if this component has children, render them here */}
    {props.children}
    </div>
    )

   function App() {
  return (
<div className="App">
 {spideyJSX}
 {spideyJSXFragment} */}

 {/* <ExampleComponent/> */ }
 <Welcome name="students">
  <p>Children of Welcome Component</p>
  </Welcome>
 </div>
  )

<PropsDisplayer />
<PropsDisplayer myProp="first prop"/>
<PropsDisplayer prop1="first" prop2="second" prop3={3}/>
<PropsDisplayer name="Harry Styles" age={29}/>
<PropsDisplayer pets={["cat", "dog", "goldfish"]}/>
<PropsDisplayer reactLogo={reactLogo} buttonCount={count}/>
<City name="Sydney" />
<City name="Melbourne" state="VIC" />
<City name="Chicago" state="Illinois" country="USA" />
<City name="Newcastle">
  <div>Newcastle is a harbour city in the Australian state of New South Wales</City>.</div>
<div><strong>Population:</strong> 322,278 (2016)</div>
<div><strong>Random</strong>
</City>

   





<Greeting name="John">
<div>This is the child text</div>
</Greeting>

<FullName first="Kenderick" Last="Lamar"


export default App;








<ComplexComment author={comment.author}
date={comment.date}
text={comment.text}/>






<MoviesList></MoviesList>

















  