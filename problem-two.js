/* তোমরা জানো, একটি ইমেল ২টি অংশ নিয়ে গঠিত হয়, একটি হল `username` অন্যটি `domain name`। যেমন zihad.ph@gmail.com এখানে zihad.ph হলো ইউজার নেইম,  gmail.com হলো ডোমেইন নেইম।  তোমাকে এমন একটি ফাংশন বানাতে হবে যা input হিসেবে একটা email নিবে।  ফাংশনের কাজ হবে, ইমেইলে থাকা `username` ও `domain  name` আংশ গুলো ব্যবহার করে, একটি notification message তৈরি করা।  
ফাংশনটি একটি নতুন string রিটার্ন করবে যেখানে ইমেলে থাকা `username` ও `domain name` অংশ ২টি ব্যবহার করে notification  এর জন্য মেসেজ তৈরি করতে হবে ।  Output কি হবে সেটা নিচে  ভাল করে দেখো।  
 */
function sendNotification(email) {
    if (!email.includes("@")) {
        return "Invalid Input";
    } else {
        const addedAry = email.split("@")
        const addedstr = addedAry.join(" sent you an email from ");
        return addedstr;
    }

}
console.log(sendNotification('minajul4010@gmail.com'));

