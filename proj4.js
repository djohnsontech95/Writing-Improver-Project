//text area
const textArea = document.getElementById("writing-textarea");

//img tag
const animalPicture = document.getElementById("img");

//fact p tag
const fact = document.getElementById("fact");

//animal selection
const animalSelection = document.getElementById("animal-select");

//number selection
const numberSelection = document.getElementById("num-select");

//p counter tag
const wordCount = document.getElementById("count");

//display random cat pictures
//function calls to cat api and returns photo in json 
//which is then pushed to the <img> tag
//no input
//outputs one random cat picture
async function displayCat() {
    const url = 'https://api.thecatapi.com/v1/images/search?';
    const api_key = 'live_uJY0VOs9Yb5lRqUAkV1GGFjY7X0LJm5cuDTVbKcWMGZMyyIxDfXlzimNlkzpjIP9'

    fetch(url, {headers: {
        'x-api-key': api_key
    }})
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let imagesData = data;
        imagesData.map(function(imageData) {
            animalPicture.src = `${imageData.url}`;
        });
    })
    
}

//displays random cat fact
//replaces <p id="fact"> tag value with random cat fact
//no input
//outputs random cat fact 
async function dipslayCatFact() {
    //api call
    const response = await fetch('https://catfact.ninja/fact')
        //response turned into json format
        .then(response => response.json());

    //cat fact data
    let catFact = response.fact;

    //set html element to cat fact
    fact.innerHTML = catFact;
}

//displays random dog picture
//This function is designed to alter the <img> tag to display a random
//dog photo from the API 
//no input
//outputs one random dog picture
async function displayDog() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json());

    let dogUrl = response.message;
    
    animalPicture.src = dogUrl;
}

//display random dog fact
//replaces <p id="fact"> tag value with random dog fact
//no input
//outputs one random dog fact
async function displayDogFact() {
    //api call
    const response = await fetch('http://dog-api.kinduff.com/api/facts')
        //turn response into json format
        .then(response => response.json());

    //grab random dog fact
    let dogFact = response.facts;

    //update p tag with fact
    fact.innerHTML = dogFact;
}

//variable to hold dynamic counter
let totalWords = 0;

//add event listener to textarea to count words
textArea.addEventListener('keyup', () => {
    //grab current words from the text area
    //trim all the spaces and split the words based on one or more whitespace characters
    const words = textArea.value.trim().split(/\s+/);

    //variable to hold word count
    let counter = 0;

    //if loop to handle if there are no words and the 
    //first place is a whitespace character
    if (words.length == 1 && words[0] == '') {
        counter = 0;
    } else {
        counter = words.length;
        totalWords = words.length;
    }

    //update counter with number of words in textarea
    wordCount.textContent = counter;

    //if loop to handle number selection and correct photo display
    if (numberSelection.value == 50) {
        let number = 50;
        if (totalWords % number == 0) {
            if (animalSelection.value == 'dog') {
                displayDog();
                //reset fact if its set to dog since this isnt working
                fact.innerHTML = "";

            }
            else {
                displayCat();
                dipslayCatFact();
            }
        }
    }
    else if (numberSelection.value == 100) {
        let number = 100;
        if (totalWords % number == 0) {
            if (animalSelection.value == 'dog') {
                displayDog();
                //reset fact if its set to dog since this isnt working
                fact.innerHTML = "";
            }
            else {
                displayCat();
                dipslayCatFact();
            }
        }
    }
    else if (numberSelection.value == 200) {
        let number =  200;
        if (totalWords % number == 0) {
            if (animalSelection.value == 'dog') {
                displayDog();
                //reset fact if its set to dog since this isnt working
                fact.innerHTML = "";
            }
            else {
                displayCat();
                dipslayCatFact();
            }
        }
    }
    else if (numberSelection.value == 500) {
        let number = 500;
        if (totalWords % number == 0) {
            if (animalSelection.value == 'dog') {
                displayDog();
                //reset fact if its set to dog since this isnt working
                fact.innerHTML = "";
            }
            else {
                displayCat();
                dipslayCatFact();
            }
        } 
    }
});

textArea.addEventListener('keydown', (event) => {
    if (event.code == 'Backspace') {
        const words = textArea.value.trim().split(/\s+/);

        let counter = 0;

        if (words.length == 1 && words[0] == '') {
            counter = 0;
        } else {
            counter = words.length;
            totalWords = words.length;
        }

        wordCount.textContent = counter;
    }
});

