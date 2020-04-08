////////CLASS NOTES


//  const Caroline = {
//     name:"Caroline",
//     dob:2004,
//     graduated:false,
//     age:function(){  //Haoran.age
//         console.log(this);
//         return 2020 - this.dob;
//     }
// };
              
// const test = function(){
//     console.log(this);
// };


// const Homer = {
//     name:"Homer",
//     age:32,
//     family:{
//         wife:{
//             name:"Marge"
//         },
//         son: {
//             name:"Bart"
//         }
//     },
//     pets: ["cats","dog"]
//     //Homer.pets[0]
// };


/////////////Destructuring 

// const Haoran = { //object
//     name: "how",  //property of the haoran object
//     dob: 2002,
//     year:"Senior",
//     student: true
// };
// const {name , year} = Haoran; 

// //const student = Haoran; //just a referecne to haoran so whatever you do to student you will change haoran not a copy

// //this is how you would copy an object without destroying the original copy 
// const student = {};
// //student.name = Haoran.name; 


// const Eric = Haoran; //references to Haoran
// Eric.name = "Eric";
// const Christian = {};
// Christian.dob = Haoran.dob; //better way to do it so youdont change haoran's stuff
//Christian.dob = 2003;

// const calculator = {
//     add: //function x + y; 
//     subtract: //function x-y;
// }
//  const Republicans = []
//  for (const i = 0; i < presidents.length; i++) {
//    if (presidents[i].party == "R" && presidents[i].terms == 1) {
//      console.log(presidents[i].name);
//    }
//  }




//////////CHALLENGES

// const presidents = [
//     { name: "Donald Trump", terms: 1, party: "R" },
//     { name: "Barack Obama", terms: 2, party: "D" },
//     { name: "George W. Bush", terms: 2, party: "R" },
//     { name: "Bill Clinton", terms: 2, party: "D" },
//     { name: "George H.W. Bush", terms: 1, party: "R" },
//     { name: "Ronald Reagan", terms: 2, party: "R" },
//     { name: "Jimmy Carter", terms: 1, party: "D" },
//     { name: "Gerlad Ford", terms: 1, party: "R" },
//     { name: "Richard Nixon", terms: 2, party: "R" },
//     { name: "John F. Kennedy", terms: 1, party: "D" },
//     { name: "Lyndon Johnson", terms: 2, party: "D" },
//     { name: "Dwight Eisenhower", terms: 2, party: "R" }
//   ];

//   ///Function to be used in challenge 2 and 4
//   function select(party,terms,msg) {
//     console.log("Using a fucntion ", msg);
//     console.log (presidents.filter(republican => republican.party == party && republican.terms == terms)) ;
//   }
  
//   //Challenge Questions
//   //1) Filter all presidents, leaving only the Democratic ones

//     console.log ("Democratic Presidents");
//     console.log (presidents.filter(president => president.party =="D"));

//    //2)Filter all presidents to leave only one term Republican presidents HINT use If statement

//     //1st method 
//     console.log ("One Term Republican Presidents-Method 1")
//     console.log (presidents.filter(republican => republican.party == "R" && republican.terms == 1))

//     //2nd method using a function
//     select("R",1,"One Term Republican Presidents - Method 2")

//     //3rd method using if statement 
//     console.log ("One Term Republican Presidents - Method 3")
//     var i=0;
//     while (i<presidents.length){
//         if (presidents[i].party=="R" && presidents[i].terms == 1) 
//             console.log(presidents[i]);
//         i++;  
//     }



//   //3) return only the last three presidents
//     console.log("Last Three Presidents")
//     console.log(presidents.slice(9));


//   //4) log all dems who served 2 terms. HINT use chain filter, filter and slice

//    //1st method
//     console.log("Two Term Democratic Presidents - Method 1")
//     console.log(presidents.filter(democratic => democratic.party == "D").filter(democratic => democratic.terms == 2))

//    //2nd method using the function from above
//    select("D",2,"Two Term Democratic Presidents - Method 2")

//   //BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") else alert "LBJ was one and done"
   
//   function LBJ(){
//        const obj = presidents.filter(record => record.name == "Lyndon Johnson");

//        if(obj.length == 0) 
//           alert("can't find LBJ");
//        else if (obj[0].terms  == 2)
//           alert("LBJ served two terms");
//        else 
//           alert("LBJ was one and done!!!!!!!!!!!!!");
//     }
//     LBJ();


////////DOM Manipulation document object model , html can be manipulated

// const header = document.querySelector(".header");
// // const header = document.getElementById(".header");
// //const header = document.querySelector("#Idheader"); //looking through the docuent for a selector
// const items = document.querySelectorAll(".list-item"); //gives all items, returns a node list not all array fucntions work with this 
// // //const items = document.querySelector(".list-item");
// const itemsArr = Array.from(items);
// itemsArr.forEach((el) => (el.style.backgroundColor= "red"));
// header.textContent = "test"
// const header = document.querySelector(".header-two");
// const button = document.querySelector(".button");
// const background = document.querySelector(".background");

// const header = document.querySelector(".header");
// const button = document.querySelector(".button");

// header.classList.add("Karen") //keeps it permanently
// header.classList.remove("Karen")
// button.addEventListener("click" , function(){
//     header.classList.toggle("Karen");
// })
 
const background = document.querySelector(".background");
const changeBtn = document.querySelector(".button");
const header = document.querySelector(".header-two");


// changeBtn.addEventListener("click", function() {
//     if(background.style.backgroundColor !== "rgb(255, 0, 0)"){
//         background.style.backgroundColor = "rgb(255, 0, 0)";
//         header.textContent = "RED"
//     }else {
//         background.style.backgroundColor = "rgb(0, 0, 255)";
//         header.textContent = "BLUE"
//     }
    
// });
changeBtn.addEventListener("click" , function() {
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);
    header.textContent = `rgb(${R}, ${G}, ${B})`;
    background.style.backgroundColor = `rgb(${R},${G},${B} )`;
});

