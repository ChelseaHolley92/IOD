//Try creating a json object variable for a book.The book should have a title, description, author, and number of pages

let book= {
title: "The Hitchhiker's Guide to the Galaxy",
description: "The adventures of the only man to survive the destruction of the earth",
author: "Douglas Adams",
numPages: 216
}

//Try printing these object propery values in your console individually +via the whole book object
console.log(book.title)
console.log(book,description)
console.log(book.author)
console.log(book.numpages)
console.log(book)


//Update the description of the book
book.description= "Seconds before the earth is demolished..."
console.log(book.description)

//Create an array of 5 books objects

let books= [
    {
    title: "The Night Circus",
    description:"Magical competition between two young illusionists",
    author:"Erin Morgenstern",
    numPages: "387"
},
{
    title: "The Martian",
    description: "an Astouant becomes stranded on mars and needs to find a way to survive",
    author: "Andy Meir",
    numPages:"369"
},
{
    title: "Where the crawdads sing",
    description: "A mystery set in the marshes at North Carolina",
    author: "Delia Owens",
    numPages: "368"
},
{
title: "circe",
    description: "A modern retelling of the life of circe, the greek enchantress",
    author: "Alex Mchelides",
    numPages: "393"
},
{
    title: "The Silent patient",    
    description: "A thriller about a woman who stops speaking after a murder",
    author: "Alex Michelides",
    numPages:"325"
}
]

console.log(books)
