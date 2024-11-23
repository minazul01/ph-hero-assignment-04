// function calculateTax(income, expenses) {
//     if (income < expenses) {
//         return "Invalid Input";
//     }
//     const incomeToExpenses = income - expenses;
//     const tax = incomeToExpenses * 0.20;
//     return tax;
// }
// console.log(calculateTax(100000, 67000))






// function sendNotification(email) {
//     if (!email.includes("@")) {
//         return "Invalid Input";
//     } else {
//         const addedAry = email.split("@")
//         const addedstr = addedAry.join(" sent you an email from ");
//         return addedstr;
//     }

// }
// console.log(sendNotification('minajul4010@gmail.com'));





// function checkDigitsInName(name) {
//     if (typeof name !== "string") {
//         return "Invalid Input"
//     }
//     const checking = "0123456789"
//     for(const str of name){
//         if(checking.includes(str)){
//             return true;
//         }
//     }
//     return false;
// }
// console.log(checkDigitsInName("e1mu3"))




function calculateFinalScore(obj) {
   if(typeof obj !== "object"){
    return "Invalid Input"
   }
   let scoreAdd = obj.testScore + obj.schoolGrade;
   if(obj.isFFamily === true){
     scoreAdd = scoreAdd + 20;
   }
   console.log(scoreAdd)
   if(obj.isFFamily && scoreAdd >= 80){
    return true;
   }else if(!obj.isFFamily && scoreAdd >= 80){
     return true;
   }else if(!obj.isFFamily && scoreAdd < 80){
    return false;
   }else if(obj.isFFamily && scoreAdd < 80){
    return false;
   }
  
   
}
const score = { name: "Rajib", testScore: 44,  schoolGrade: 25, isFFamily : true  };
const score2 = { name: "Rajib", testScore: 555,  schoolGrade: 25, isFFamily : false }
const added = calculateFinalScore(score);
console.log(added);


