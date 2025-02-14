import'/.BigCats.css'

const cats = [
    { name: 'Cheetah', latinName: 'Acinonyx jubatus' },
    { name: 'Cougar', latinName: 'Puma concolor' },
    { name: 'Jaguar', latinName: 'Panthera onca' },
    { name: 'Leopard', latinName: 'Panthera pardus' },
    { name: 'Lion', latinName: 'Panthera leo' },
    { name: 'Snow leopard', latinName: 'Panthera uncia' },
    { name: 'Tiger', latinName: 'Panthera tigris' },
]

function SingleCat({name, latinName, image}) {
    return (
        <li>
            <img src={image} width="500" alt={name}/>
            <h3>{name}</h3>
            <em>({latinName})</em>
        </li>




function BigCats() {

  //   const catList = cats.map(cat => (
//        <li key={cat.id}
//        <h3>{cat.name}</h3>
//        <em>({cat.latinName})</em>
 //       </li>
//    ))

const catList = Cats.map(cat => (
    <SingleCat name={cat.name}  latinName={cat.latinName} Key={cat.id}  image={cat.image}/>
   
   
    
   
))
    
    
return (
    <div className="BigCats FancyBox">
        <h3>Big Cats</h3>
        <ul>{catlist}</ul>
    </div>


const [currentCats, setCurrentCats] = useState(cats)

    const handleSortCats = () => {
        let newCats = [...currentCats]
        newCats.sort((cat1,cat2)) => cat1.name < cat2.name ? -1 : 1)
        setCurrentCats(newCats)
    }

    






function SingleCat({name, latinName, image})