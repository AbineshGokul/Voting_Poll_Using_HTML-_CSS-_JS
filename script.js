const votes = {
    Python: 0,
    Java: 0,
    JavaScript: 0
};

function vote(option) {
    votes[option]++;     
    displayResults();    
}

function displayResults() {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    for (let option in votes) {
        resultsDiv.innerHTML += 
            `<p>${option}: ${votes[option]} votes</p>`;
    }
}

displayResults();