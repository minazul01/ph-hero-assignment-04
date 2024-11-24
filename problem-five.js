/* ইসরাত একটি চাকরির ইন্টারভিউয়ের জন্য অপেক্ষা করছে। তার সিরিয়াল আসলে তাকে ডাকা হবে।  দেয়ালে একটা স্ক্রিনে যারা যারা ইন্টারভিউ দিয়েছে তাদের লিস্ট এবং  প্রত্যেকের কত মিনিট সময় লেগেছে তা দেখাচ্ছে।  ইসরাত বুঝতে পারছেনা যে তাঁর আসলে আর কতক্ষন সময় লাগবে।  তোমার কাজ হলো ইসরাতের আর কত সময় লাগবে তা ক্যালকুলেশন করে বের করার জন্য waitingTime() নামে একটা ফাংশন তৈরি করা। 
ফাংশন টি ২ টা input নেবে ।  ১ম টি হচ্ছে  একটা number এর Array ।  যাদের ভাইভা হয়ে গেছে তাদের  ইন্টারভিউ টাইম। ২য়  টি হচ্ছে ইসরাতের সিরিয়াল নাম্বার।  ফাংশন টি যাদের ভাইভা হয়ে গেছে তাদের সময়ের একটা এভারেজ বের করবে এবং বর্তমান সিরিয়ালের পর থেকে  ইসরাতের আর কত সময় লাগবে সেটা বের করবে এবং আউটপুট হিসেবে রিটার্ন করবে।  
 */
function  waitingTime(waitingTimes  , serialNumber) {
    if(!Array.isArray(waitingTimes) && typeof serialNum === "number"){
     return "Invalid Input"
    }
   let sumWaiting = 0;
   const checkAvgVar = waitingTimes.length;
   const serialNumAdded = serialNumber - 1;
    for(const num of waitingTimes){
       sumWaiting = num + sumWaiting;
    }
    const checkingAvgTime = serialNumAdded - checkAvgVar;
    const addAvgMark = sumWaiting / checkAvgVar;
   const avgTime = checkingAvgTime * addAvgMark;
   return avgTime;
    
    
 }
 const arraying = [2,3,4,5,6,8,8,9];
 const serialNum = 15;
 const addedting = waitingTime(arraying, serialNum);
 console.log(addedting);
 