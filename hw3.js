/*Author: Janice Liu
    files attached: hw3.css and hw3.html
    makes a quiz with radio buttons to choose from
    will show score at the end*/

var state = 0;
var keepScore = 0;
var firstTry = 0;
var questions = ["Which one is not a real color?", "Of these foods, which item has the most potassium in it?", "Which phobia is not real?"];

/*function when "next" button clicked*/
function buttonAction() {
	var contents = document.getElementById("radioButts");
	/*fill in new elements of the DOM. All are the children of radioButts div*/
    
    var first = document.getElementById("Question");
    
    while (contents.firstChild) {
        contents.removeChild(contents.firstChild); /**/
    }
    
    while (first.firstChild) {
        first.removeChild(first.firstChild);
    }       
    addBreak(first);

    addQuestion(first);
    addAnswer(contents);
    state++;    
}


function addQuestion(element) {
    if (state == 0)
    {
        addRegText(element, questions[state]);
        addBreak(element);
    }
    else if (state == 1) {
        addRegText(element, questions[state]);
        addBreak(element);
        }
    else if (state == 2) {
        addRegText(element, questions[state]);
        addBreak(element);
    }
    else {
        addRegText(element, "Your score is " + keepScore + " out of " + state);

    }
}

function addAnswer(element) {
    if (state == 0) {
        firstTry = 0;
        addBreak(element);
        addRadio(element, "un", "coquelicot", " coquelicot");
        addBreak(element);
        addRadio(element, "un", "previcia", " previcia");
        addBreak(element);
        addRadio(element, "un", "glaucous", " glaucous");
        addBreak(element);
    }
    else if (state == 1) {
        firstTry = 0;
        addBreak(element);
        addRadio(element, "second", "white beans", " white beans");
        addBreak(element);
        addRadio(element, "second", "bananas", " bananas");
        addBreak(element);
        addRadio(element, "second", "leafy greens", " leafy greens");
        addBreak(element);
    }
    else if (state == 2) {
        firstTry = 0;
        addBreak(element);
        addRadio(element, "thurd", "fearFun", " Cherophobia is a fear of fun.");
        addBreak(element);
        addRadio(element, "thurd", "fearHoles", " Trypophobia is a fear of holes.");
        addBreak(element);
        addRadio(element, "thurd", "shortHair", " Nemaphobia is a fear of split-ends.");
        addBreak(element);
    }
    else if (state == 3) {
        addBreak(element);
        addRegText(element, "Good Job!");
        addBreak(element);
        addBreak(element);
        if (keepScore >= 2) {
            addRegText(element, "These questions were meant to be tricky, but not for you!");
            addBreak(element);
            addRegText(element, "You're a smartie!");
        }
        else if (keepScore < 2) {
            addRegText(element, "This was a tricky test, and you did your best! Keep up that hard work!")
        }
        state--;
    }
    else {
        state = 3;
    }
}

/*makes an HTML break <br> element and adds it to the DOM*/
function addBreak(element) {
    var breakNode = document.createElement("br");
    element.appendChild(breakNode);
}

/*an HTML radio button, and adds it, with text, to the DOM*/
function addRadio(element, group, id, text) {
    var radioButton = makeRadioButton(group, id);
    element.appendChild(radioButton);
    var newText = document.createTextNode(text);
    element.appendChild(newText);
}

/*regular text function, could have used a premade one, but just created another*/
function addRegText (element, text) {
    var regText = document.createTextNode(text);
    element.appendChild(regText);
}

/*makes a radio button object. takes a group name (a string) as input. all buttons in a group should have the same group name*/
function makeRadioButton(group, id) {
    var radio = document.createElement("input");
    radio.name = group;
    radio.type = "radio";
    radio.onclick = function() {radioButtonAction(group, id); };/*no parenthesis, this format is common way used*/
    return (radio);
}

/*function called when radio button is selected, will go into within which question and a comment for when each which button is chosen*/
function radioButtonAction(group, id) {
    
    var cont = document.getElementById("radioButts");
    
    var coquelicot = document.createTextNode("Coquelicot is real, similar to the color of golden poppies, our state flower! Previcia is just a fancy word!");
    var glaucous = document.createTextNode("Glaucous is actually a darker, more blue periwinkle! Previcia one you should have chosen!")
    var fuckedUp = document.createTextNode("you done fucked up lol");
    var correct = document.createTextNode("Success! You're doing great!");
    var bananas = document.createTextNode("We say that a lot, but bananas don't have the most potassium of the three! Beans beat them all!");
    var leafyGreens = document.createTextNode("Valiant effort, but no! It was actually the beans!");
    var fearFun = document.createTextNode("Cherophobia does exist! It is to deliberately avoid fun and happiness.");
    var fearHoles = document.createTextNode("Trypophobia is actually a fear of holes! I suggest googling it!");
    var chips = document.createTextNode("Yes, because janiceloveschips@gmail.com (please dont spam me)");

    if (group == "un") {
        if (firstTry == 0) {
            if (id == "coquelicot") {
                addBreak(cont);
                cont.appendChild(coquelicot);
                addBreak(cont);
                firstTry++;
            }

            else if (id == "glaucous") {
                addBreak(cont);
                cont.appendChild(glaucous);
                addBreak(cont);
                firstTry++;

            }
            else {
                addBreak(cont);
                cont.appendChild(correct);
                addBreak(cont);
                keepScore++;
                firstTry++;
            }
        }
    }
    else if (group == "second") {
        if (firstTry == 0) {
            if (id == "leafy greens") {
                addBreak(cont);
                cont.appendChild(leafyGreens);
                addBreak(cont);
                firstTry++;
            }
            else if (id == "bananas") {
                addBreak(cont);
                cont.appendChild(bananas);
                addBreak(cont);
                firstTry++;
            }
            else {
                addBreak(cont);
                cont.appendChild(correct);
                addBreak(cont);
                keepScore++;
                firstTry++;       
            }
        }
    }
    else if (group == "thurd") {
        if (firstTry == 0) {
            if (id == "fearFun") {
                addBreak(cont);
                cont.appendChild(fearFun);
                addBreak(cont);
               firstTry++;
            }
            else if (id == "fearHoles") {
                addBreak(cont);
                cont.appendChild(fearHoles);
                addBreak(cont);
                firstTry++;
            }
            else {
                addBreak(cont);
                cont.appendChild(correct);
                addBreak(cont);
                keepScore++;
                firstTry++;
                
            }
        }
    }       
}



