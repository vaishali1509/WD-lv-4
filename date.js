const today=new Date()
let yesterday=new Date(today)
const tomorrow=new Date(today)
 yesterday.setDate(yesterday.getDate()-1)
 yesterday=yesterday.toLocaleDateString("en-CA")
tomorrow.setDate(tomorrow.getDate()+1)

console.log(`${yesterday}`)
console.log(today.toLocaleDateString("en-CA"))
console.log(tomorrow.toLocaleDateString("en-CA"))

// all=[]
// all.push({
//     title: "Submit assignment",
//     completed: false,
//     dueDate: `${yesterday}`,
//   })

// console.log(all)