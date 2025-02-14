function City({name, state = 'NSW', country = 'Australia'}, children) {
    return (
    <div className="City componentBox">
    <strong>{name}</strong> is in {state}, {country}
    {children}


    </div>
    )
    }
    
<City name="Sydney" />

{/* country is not specified, will use default */}
<City name="Melbourne" state="VIC" />

{/* all values are specified, won't use defaults */}
<City name="Chicago" state="Illinois" country="USA"

function City({name, state = 'NSW', country = 'Australia',
    children}) {
    // destructuring the props.children property as well
    
    return (
    <div className="City">
    <strong>{name}</strong> is in {state}, {country}
    {children}
    </div>
    )
    }

    <City name="Newcastle">
<div>Newcastle is a harbour city in the Australian state
of New South Wales.</div>
<div><strong>Population:</strong> 322,278 (2016)</div>
</City>



    export default City;