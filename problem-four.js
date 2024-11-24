/* রাকিব একটি সফটওয়্যার কোম্পানিতে প্রোগ্রামার হিসেবে কাজ করছেন। তার ছোট ভাই, রাজিব, একটি বিখ্যাত বিশ্ববিদ্যালয়ে ভর্তি পরীক্ষা দিয়েছে। ভর্তি পরীক্ষার ফলাফল বিভিন্ন মানদণ্ডের উপর ভিত্তি করে নির্ধারিত হবে। রাজিবের পরীক্ষার স্কোর, স্কুলের গ্রেড, এবং অভিভাবকের প্রোফেশন (যদি "farmer" হয়) সবকিছু মিলিয়ে তার ফাইনাল স্কোর বের করতে হবে।তুমি যেহেতু রাকিবের সহকর্মী এবং ভালো প্রোগ্রামার, তাই রাকিব চায় তুমি একটি ফাংশন calculateFinalScore() বানিয়ে দাও, যা রাজিবের বিভিন্ন তথ্য ইনপুট হিসেবে নিয়ে ফাইনাল স্কোর বের করবে। ফাইনাল স্কোর যদি ৮০ বা তার বেশি হয়, তাহলে সে ভর্তি হতে পারবে। অন্যথায়, সে ভর্তি হতে পারবে না।  */
function calculateFinalScore(obj) {
    if(typeof obj !== "object"){
     return "Invalid Input"
    }
    let scoreAdd = obj.testScore + obj.schoolGrade;
    if(obj.isFFamily === true){
      scoreAdd = scoreAdd + 20;
    }
 
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