function toggleChatbot() {
    document.getElementById('popup').classList.toggle("hidden");
}
function talkToChatBot(event) {
    var userInput = document.getElementById('user-input').value;
    this.generateHtml(userInput, 'right');
    document.getElementById('user-input').value = '';
    this.getBotReply();
}

function generateHtml(text, movementClass) {
    var generateMessageDiv = document.createElement('div');
    generateMessageDiv.className = `messages ${movementClass}`;
    var generateContent = document.createTextNode(text);
    var insideSpan = document.createElement('span');
    insideSpan.className = 'inner-msg';
    insideSpan.appendChild(generateContent);
    generateMessageDiv.appendChild(insideSpan);
    document.getElementById('all-chat-msg').appendChild(generateMessageDiv);
}

function talkToBotOnEnter() {
    if(event.keyCode === 13) {
        this.talkToChatBot();
    }
}

function getBotReply() {
    var apiUrl = 'https://api.adviceslip.com/advice';
    fetch(apiUrl)
    .then((resp) => resp.json())
    .then(function(data) {
        this.generateHtml(data.slip.advice, 'left');
    })
    .catch(function() {
        this.generateHtml('Api Not Responding. Please try later.');
    });
}