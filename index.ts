let firstName: string = "rod";
let age: number = 42
let active: boolean = true

// let names: string[] = [1,2,3,4] // gives an error
let names: string[] = ["bobby","jennifer","lily"] // good array


enum studentTypes {
    pending,
    active,
    almostdone,
    graduated,
    tas,
    teachers
}
let mystatus = studentTypes.graduated


// switch (Number(mystatus)) {
//     case Number(studentTypes.active):
//         console.log(" student is active ")
//         break;
//     case Number(studentTypes.graduated):
//         console.log(" student is graduated ")
//         break;
//     default:
//         console.log("🤫")
    
// }

// console.log("mystatus is", mystatus)
// if (mystatus == studentTypes.graduated) {      
// console.log(`the students is graduated`)
// }

// console.log(names)
// console.log(`my first name is ${firstName}`)

// let code: string | number = 11 // ok
// code = "AA11" //ok
// // code = false // error, not a string or number

// console.log(`my entry code is: ${code}`)

function sum (arr: number[]) {
    return arr.length
    // return arr.reduce((total: number, num: number) => total + num )
}

let numbers: number[] = [1,2,3,4,5,6]

// console.log(sum(numbers))

let complexItem: any = { name: "rod", hasDog: true }

complexItem = { title: "professor" }
complexItem = "it's a string"
complexItem = 22

// console.log("complexItem", complexItem)



enum bloodType {
    aPositive,
    bPositive,
    oPositive,
    oNegative,
}

interface human {
    name: string,
    age: number,
    height: number,
    bloodType?: string
}

const me: human = {
    name: "bobby",
    age: 80,
    bloodType: bloodType.oNegative,
    height: 6.2 * 12,
}