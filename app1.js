function enterUserName() {
    let userName = prompt(`Please Enter Your Name!`) 

console.log(userName);
if (userName.toLowerCase() == 'danner') {
    document.write("Welcome Co-Founder " + userName)
} else {
    document.write("Welcome " + userName) 
}
}


function secretFactOfDay(){
    let secretFact = prompt('Will you like to see the secret petz-fact for the day? It will be visible at the bottom of the page (yes or no)')
console.log(secretFact);
if(secretFact.toLowerCase() == 'yes') {
    document.write('Petz Fact of the Day: Dogs are the first animal to be domesticated') 
    
}
}

function discountVoucher(){
    const getDiscountBtn = document.querySelector(".get-discount-btn");
const couponContainer = document.querySelector(".coupon-container");
const closeBtn = document.querySelector(".coupon-container .close");

console.log(getDiscountBtn);
getDiscountBtn.addEventListener("click", () => {
    couponContainer.classList.add("active");
});
closeBtn.addEventListener("click", () => {
    couponContainer.classList.remove("active");
})
}

function multiChoiceQuest(){
    let puppiesQuestion = prompt('Puppies are delivered how many weeks after conception?(36,22,9,4)')
    console.log(puppiesQuestion);
        if(puppiesQuestion == '9') {alert ('Correct!')}
        else {
            incorrectAnswer = prompt('Please try again. Puppies are delivered how many weeks after conception?(36,22,9,4)')
    }
}
    
multiChoiceQuest()