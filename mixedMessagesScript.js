
let arr1 = ["Work hard for something, ", "Push yourself, ", "Dream it, " , "Make your life a masterpiece, ", "Go and seek success, ", "Don’t stop when you’re tired, ", 
"Wake up with determination, ", "Know that it’s going to be hard, ", "Don’t wait for opportunity, "]; 

let arr2 = ["only to discover that ", "while dreaming that ", "with the full knowledge that ", "but be aware that ", "with that sinking feeling that ", 
"but still have an awareness of the fact that , ", "and then tell yourself that ", "all the while thinking that ", "but also don’t daydream that "]; 

let arr3 = ["CPR rarely ever works.", "your brain starts to deteriorate by the time you’re 27.", "pigs can experience depression.", 
"you will most likely lose your pet to cancer", "at one point, your parents put you down and never picked you up again.", 
"the Curiosity Rover on Mars sings Happy Birthday to itself every year.", "obesity is now a bigger problem than hunger worldwide.", 
"we are running out of fish in our oceans.", "hearing different opinions makes us cling to our old beliefs.", "40% of the world's food production goes to waste."]; 

const part1 = arr1[Math.floor(Math.random() * arr1.length)]; 
const part2 = arr2[Math.floor(Math.random() * arr2.length)]; 
const part3 = arr3[Math.floor(Math.random() * arr3.length)]; 

let finalMessage = part1 + part2 + part3; 

console.log(finalMessage); 

