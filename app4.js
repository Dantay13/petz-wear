function multiChoiceQuest(){
    let puppiesQuestion = prompt('Puppies are delivered how many weeks after conception?(36,22,9,4)')
    console.log(puppiesQuestion);
        if(puppiesQuestion == '9') {alert ('Correct!')}
        else {
            incorrectAnswer = prompt('Please try again. Puppies are delivered how many weeks after conception?(36,22,9,4)')
    }
}
    
multiChoiceQuest()
