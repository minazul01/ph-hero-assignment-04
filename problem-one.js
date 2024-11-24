/* হারুণ একজন সফল হোটেল ব্যবসায়ী। তার হোটেল টি অনেক জনপ্রিয় হয়ে উঠছে  এবং মাসের শেষে তার আয় ও খরচের একটি পরিস্কার ধারণা থাকা খুবই গুরুত্বপূর্ণ। তার মাসিক আয় এবং খরচ থেকে সঠিক ট্যাক্স ক্যালকুলেট করতে তাকে সাহায্য করার জন্য তুমি একটি ফাংশন তৈরি করবে। */
function calculateTax(income, expenses) {
    if (income < expenses) {
        return "Invalid Input";
    }
    const incomeToExpenses = income - expenses;
    const tax = incomeToExpenses * 0.20;
    return tax;
}
console.log(calculateTax(100000, 67000))


