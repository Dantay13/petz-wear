function enterUserName() {
    let userName = prompt(`Please Enter Your Name!`) 

console.log(userName);
if (userName.toLowerCase() == 'danner') {
    document.write("Welcome Co-Founder " + userName)
} else {
    document.write("Welcome " + userName) 
}
}

enterUserName()
