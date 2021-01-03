
//---------------------------- SKETCH ARTIST ----------------------------------------
$sketchPad = $("#sketch-pad");

const numberOfHeads = 2;
const numberOfWigs = 5; //one extra to take into account bald as option 5
const numberOfEyes = 2;
const numberOfEars = 1;
const numberOfNoses = 4;
const numberOfLips = 2;

let headPos =0;
let hairPos = 0;
let eyesPos = 0;
let earsPos = 0;
let nosePos = 0;
let lipsPos = 0;
let $newPos = 0;

//Can construct a head object class with different heads/faces for different criminals
//that way criminal for this game can be different than the next

//TODO: Set up face sliders
$("#head-slider").on("input change",(e)=>{
    $newPos = $(e.target).val();

    console.log(`head slider moved from ${hairPos} to ${$newPos}`);

    $(`#head${headPos}`).toggleClass("hidden");
    $(`#head${$newPos}`).toggleClass("hidden");    

    headPos = $newPos;
});

$("#hair-slider").on("input",(e)=>{
    $newPos = $(e.target).val();

    console.log(`hair slider moved from ${hairPos} to ${$newPos}`);

    $(`#hair${hairPos}`).toggleClass("hidden");
    $(`#hair${$newPos}`).toggleClass("hidden");    

    hairPos = $newPos;
});

$("#eyes-slider").on("input",(e)=>{
    $newPos = $(e.target).val();

    console.log(`eyes slider moved from ${eyesPos} to ${$newPos}`);

    $(`#eyes${eyesPos}`).toggleClass("hidden");
    $(`#eyes${$newPos}`).toggleClass("hidden");    

    eyesPos = $newPos;
});

$("#nose-slider").on("input",(e)=>{
    $newPos = $(e.target).val();

    console.log(`nose slider moved from ${nosePos} to ${$newPos}`);

    $(`#nose${nosePos}`).toggleClass("hidden");
    $(`#nose${$newPos}`).toggleClass("hidden");    

    nosePos = $newPos;
});

$("#lips-slider").on("input",(e)=>{
    $newPos = $(e.target).val();

    console.log(`lips slider moved from ${lipsPos} to ${$newPos}`);

    $(`#lips${lipsPos}`).toggleClass("hidden");
    $(`#lips${$newPos}`).toggleClass("hidden");    

    lipsPos = $newPos;
});

$("#ears-slider").on("input",(e)=>{
    $newPos = $(e.target).val();

    console.log(`ears slider moved from ${earsPos} to ${$newPos}`);

    $(`#ears${earsPos}`).toggleClass("hidden");
    $(`#ears${$newPos}`).toggleClass("hidden");    

    earsPos = $newPos;
});


