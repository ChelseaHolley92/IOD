function PropsDisplayer(props) {
    // convert object to string
const stringProps = JSON.stringify(props);

return ( <p>Name: {props.name} is {props.age} years old</p>
<div className="PropsDisplayer componentBox">
<h2>Check out my props!</h2>
<h3>{stringProps}</h3>
{/* what happens if we try to render the object {props} ? */}
</div>
)
}
// export this component so we can import it elsewhere

<PropsDisplayer name="Harry Styles" age={29}/>

{/* Array prop value - uses curly braces */}
<PropsDisplayer pets={["cat", "dog", "goldfish"]}/>

{/* Variable prop values - uses curly braces */}
<PropsDisplayer reactLogo={reactLogo} buttonCount={count}/>

{/* Our PropsDisplayer component won’t handle stringifying
other components */}
{/* <PropsDisplayer component={<ExampleComponent />}/> -
fails for this example but the concept is still valid */}

export default PropsDisplayer