let secretFact = prompt('Will you like to see the secret petz-fact for the day? It will be visible at the bottom of the page (yes or no)')
console.log(secretFact);
if(secretFact.toLowerCase() == 'yes') {
    document.write('Petz Fact of the Day: Dogs are the first animal to be domesticated') 
}
