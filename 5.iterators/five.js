const coding = ["js","ruby","javascript","Python","C","C++"]

//The for each value does not return any value
const values = coding.forEach((item)=>{
     console.log(item)
    return item
})
console.log(values)

console.log("****************************************")

//Using Filter Method
//Filter unlike forEach loop method return a value
const myNums = [1,2,3,4,5,6,7]

const newNums = myNums.filter((num)=>{
    return num>4
})
console.log(newNums)

console.log("*****************************************************")

const movies = [{
    movieName : "Avengers",
    MovieActor : "Robert Dowy Junior",
    movieTicket : "500"
    },
    {
        movieName : "Mission impossible",
        movieActor : "Tom cruise",
        movieTicket : "400"
    }
]

const movie = movies.filter((movie)=>{return movie.movieName === "Avengers" && movie.movieTicket>300})
console.log(movie)




