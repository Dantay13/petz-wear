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

function guessingGame(){
    let userAnswer = prompt('Guest a number 1-15');
    let correctAnswer = 13;
    let attemps = 3;

    for(let i = 1; i < attemps; i++){
        while(userAnswer < 1 || userAnswer >15){
            userAnswer = prompt('Please try again! A number 1-15');
        }
        if(userAnswer == correctAnswer){
            alert('Great job, That is correct!');
            break;
        } else if (userAnswer > correctAnswer){
            userAnswer = prompt('Sorry, too high! Please try again! A number 1-15');
        } else if (userAnswer < correctAnswer){
            userAnswer = prompt('Sorry, too low! Please try again! A number 1-15');
        }
        if(i == 2){
            alert('The correct answer was' + correctAnswer)
        }
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
    let puppiesQuestion = prompt('Puppies are delivered how many weeks after conception?(36,22,9,4)');
    let puppiesCorrectAnswer = 9;
    let puppiesAttemps = 3;

    for(let i = 1; i < puppiesAttemps; i++){
        if(puppiesQuestion == puppiesCorrectAnswer){
            alert('Great job, That is correct!');
            break;
        } else if (puppiesQuestion == 36){
            puppiesQuestion = prompt('Please try again. Puppies are delivered how many weeks after conception?(36,22,9,4)');
        } else if (puppiesQuestion == 22){
            puppiesQuestion = prompt('Please try again. Puppies are delivered how many weeks after conception?(36,22,9,4)');
        } else if (puppiesQuestion == 4){
            puppiesQuestion = prompt('Please try again. Puppies are delivered how many weeks after conception?(36,22,9,4)');
        }
    }
}
   
multiChoiceQuest()

 
function showAnotherPicQuest(){
    let anotherPic = 1
    let anotherPicQuest = prompt("How many stylish cats do you want to see?")
    if (anotherPicQuest > 5){
        alert("That is to many stylish cats on one page!")
        anotherPicQuest = prompt("How many stylish cats do you want to see? (3 max.)")
    }
    for (let i = 0; i < anotherPicQuest; anotherPic++, i++){
           document.write("<img src=https://mymodernmet.com/wp/wp-content/uploads/2021/07/benson-cat-outfits-18.jpeg><p>" + anotherPic + "</p>")
    }
}

