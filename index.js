// document.querySelector("button").addEventListener("click", handleClicks); // if I use handleClicks() to call the
// function handleClicks(){                    // to call the function then without even clicking the browser will give
//     alert("I got clicked");     //us the alert " I got clicked" which is wrong
// }

//not using the parenthesis means that we are first waiting for the click, then only the "handleClicks" 
//function will be called

// the above is an example of named function

//addEventListener( type , listener function)  <-----   Syntax


// OR


//this is the example of anonymous function
// document.querySelector("button").addEventListener("click", function(){
//     alert("I got clicked");
// });

var noOfButton = document.querySelectorAll(".drum").length;
for(var i = 0 ; i < noOfButton ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        //here this shows the button that triggered the event
        var buttonInnerHTML = this.innerHTML;
        
        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
    });
}

//to play an audio in JavaScript , just assign the Audio to an object 
//see below for example

// var audio = new Audio("Src file of audio");
// audio.play();
// But what is the new Audio object ?
// ---->  Creates and returns a new HTMLAudioElement object, optionally 
//........starting the process of loading an audio file into it if the file URL is given.

//we can figure out the identity of the button that triggered the event
//by using  " this " 

//this is the identity of the button that 


//we saw that for creating JavaScript objects we have to register data
//for each individual separately so hack to this is to use 
//Constructor function : in this name of the function needs to be capitalised
//for its parameters it has some inputs which we will provide when we make Javascript objects
//and in the function we match the inputs to the properties of the objects

//Eg: function BellBoy(name , age , workPermit , languages){
    //var bellboy1 = new BellBoy("A" , 23 , true , ['English' , ' French' ]);
    //.............. and similarly many more .........
//}

//in the constructor function we can use a method but with syntac ---> this.method and then even call a function
//Syntax Eg : -----> this.build = function(){ alert("Building in progress")}


//now we dont always want to keep clicking with the mouse 
//we can also play the drums with key buttons
//for that we use keypress in EventListener

//we don't necessarily have to put the keyEventListeners , we can directly put them in whole of the browser

document.addEventListener("keypress" , function(event){
    
        makeSound(event.key);
        buttonAnimation(event.key);
});

 function makeSound(key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
        break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
        break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
        break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
        break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
        break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
        break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
        break;
    default:
        console.log(buttonInnerHTML);
        break;
}
}

//to check which key we pressed , we pass a parameter to a function named as " event " and alsp console.log(event)

//higher order functions are functions that take other functions as inputs Eg : addEventListener
//and the function which gets passed in Higher Order function is actually a callback function


//now when a key is pressed then the whole document will listen to that key event pressing
//for this addEventListener has a callback function named as "respondToKey(event)"


function buttonAnimation(currentKey){
    
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 100);
};


// this buttonAnimation is made coz we wanted that when we press/click the button a slight opaque effect appears
// which actually looks good and shows which drum is being played

//now for this we have to select each button ---> but all had same class named as "drum" ------> but we are also 
//having same class name as the button name , so to target that each like for eg: for "w" key we need to target
//".w" class  so we query select that with the help of currentKey   

// where currentKey means ----> the key we are currently pressing to make an action

//Now our pressed class  in css file has the opacity effect  so we just add "pressed" class to the classList
//but problem that occured was ---> the opacity effect was not going after he press any key

// to remove this opacity effect after some time we used a Timeout function in which we used an anonymous
//function  and removed the pressed class
