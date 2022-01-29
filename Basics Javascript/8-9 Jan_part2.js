// increments by 2
// for(counter = 0; counter <= 42; counter +=2){
//   console.log(counter)
// }

console.log("OBJECT!!")


const months = ['January','Febuary','March','April','May','June','July','August','September',
                'October','November','December'                
]
const d = new Date() //create a new date Object and assigning it to the variable 'd'
let month =  months[d.getMonth()];

console.log(month)
console.log(d)
console.log(d.getDay())

// an object has properties and methods and we separates them with commas.
let classObject = {
  presentStudent: ["Trung Doan","Trinh Nguyen","Trung","Doan","Trinh", // property of object
                    "Nguyen","Viet","Thi","My"], 
  absentStudent: ["Truyen","Phan","Truyen Phan"], //property
  classSize:12,                                   //property
  location: "Remote",                             //property
  remote: true,                                   //
  numberofStudentPresent: function(){ //method of object
    return this.presentStudent.length
  },
  numberofAbsentStudent: function(){
    return this.absentStudent.length
  },
  instructor: "Bill"
}
console.log(classObject)
console.log(classObject.numberofStudentPresent())
console.log(classObject.numberofAbsentStudent())
classObject.location = 'Tallin'
console.log(classObject)