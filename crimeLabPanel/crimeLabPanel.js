$(function(){
    window.addEventListener('beforeunload', (event) => { 
        event.preventDefault(); // Google Chrome requires returnValue to be set. 	event.returnValue = ''; 
    }); 
/* ----------------------- MASTERMIND CONTROL PANEL CODE ---------------------------*/ 

const mastermind = `
<div class="container">
<div class="row">
    <div class="col">
        <h1 class="text-light">Crime Lab</h1>
    </div>
</div>
<!-- ------------------------------ TABS ---------------------------------------- -->

<ul class="nav nav-tabs" id="myTab" role="tablist">
<li class="nav-item">
<a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true"><i class="fas fa-pencil-alt"></i> Sketch Artist</a>
</li>
<li class="nav-item">
<a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false"><i class="fas fa-dna"></i> DNA</a>
</li>
<li class="nav-item">
<a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false"><i class="fas fa-fingerprint"></i> Fingerprinting</a>
</li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
<h5 class="card-title text-success mb-0 pb-0"><i class="fas fa-pencil-alt"></i> A.I. Sketch Artist</h5>
<div class="card bg-dark mb-0 p-0">
    <!--  HEADS -->
    <img class="card-img-top mb-0 head" id= "head0" src="crimeLabPanel/PhotoFacePieces/Head-0.png" alt="Sketch artist app">
    <img class="card-img-top mb-0 head hidden" id= "head1" src="crimeLabPanel/PhotoFacePieces/Head-1.png" alt="Sketch artist app">

    <!-- WIGS -->
    <img class="card-img-top mb-0 hair       " id= "hair0" src="crimeLabPanel/PhotoFacePieces/Hair-0.png" alt="Sketch artist app">
    <img class="card-img-top mb-0 hair hidden" id= "hair1" src="crimeLabPanel/PhotoFacePieces/Hair-1.png" alt="Sketch artist app">
    <img class="card-img-top mb-0 hair hidden" id= "hair2" src="crimeLabPanel/PhotoFacePieces/Hair-2.png" alt="Sketch artist app">
    <img class="card-img-top mb-0 hair hidden" id= "hair3" src="crimeLabPanel/PhotoFacePieces/Hair-3.png" alt="Sketch artist app">
    <img class="card-img-top mb-0 hair hidden" id= "hair4" src="crimeLabPanel/PhotoFacePieces/Hair-4.png" alt="Sketch artist app">

    <!-- EYES -->
    <img class="card-img-top mb-0 eyes       " id= "eyes0" src="crimeLabPanel/PhotoFacePieces/Eyes-0.png" alt="Sketch artist app">
    <img class="card-img-top mb-0 eyes hidden" id= "eyes1" src="crimeLabPanel/PhotoFacePieces/Eyes-1.png" alt="Sketch artist app">
    <img class="card-img-top mb-0 eyes hidden" id= "eyes2" src="crimeLabPanel/PhotoFacePieces/Eyes-2.png" alt="Sketch artist app">
    <img class="card-img-top mb-0 eyes hidden" id= "eyes3" src="crimeLabPanel/PhotoFacePieces/Eyes-3.png" alt="Sketch artist app">
    <img class="card-img-top mb-0 eyes hidden" id= "eyes4" src="crimeLabPanel/PhotoFacePieces/Eyes-4.png" alt="Sketch artist app">
    
    
    <!-- NOSE -->
    <img class="card-img-top mb-0 nose       " id= "nose0" src="crimeLabPanel/PhotoFacePieces/Nose-0.png" alt="Sketch artist app">
    <img class="card-img-top mb-0 nose hidden" id= "nose1" src="crimeLabPanel/PhotoFacePieces/Nose-1.png" alt="Sketch artist app">
    <img class="card-img-top mb-0 nose hidden" id= "nose2" src="crimeLabPanel/PhotoFacePieces/Nose-2.png" alt="Sketch artist app">
    <img class="card-img-top mb-0 nose hidden" id= "nose3" src="crimeLabPanel/PhotoFacePieces/Nose-3.png" alt="Sketch artist app">
    <img class="card-img-top mb-0 nose hidden" id= "nose4" src="crimeLabPanel/PhotoFacePieces/Nose-4.png" alt="Sketch artist app">

    <!-- LIPS -->
    <img class="card-img-top mb-0 lips       " id= "lips0" src="crimeLabPanel/PhotoFacePieces/Lips-0.png" alt="Sketch artist app">
    <img class="card-img-top mb-0 lips hidden" id= "lips1" src="crimeLabPanel/PhotoFacePieces/Lips-1.png" alt="Sketch artist app">
    <img class="card-img-top mb-0 lips hidden" id= "lips2" src="crimeLabPanel/PhotoFacePieces/Lips-2.png" alt="Sketch artist app">

    <!-- EARS -->
    <img class="card-img-top mb-0 ears" id= "ears0" src="crimeLabPanel/PhotoFacePieces/Ears-0.png" alt="Sketch artist app">
    <img class="card-img-top mb-0 ears hidden" id= "ears1" src="crimeLabPanel/PhotoFacePieces/Ears-1.png" alt="Sketch artist app">

    <!-- TEXT -->
    <div class="card-body jusify-content-center mb-0">
    
    <!-- SLIDERS -->
      <div class="row">
        <div class="col-sm-4">
            <label for="head-slider" class="form-label">Head shape</label>
            <input type="range" class="form-range" id="head-slider" name="head-slider" min="0" max="1" value = "0"><br>
        </div>
        <div class="col-sm-4">
            <label for="hair-slider" class="form-label">Hair style</label>
            <input type="range" class="form-range" id="hair-slider" name="hair-slider" min="0" max="4" value = "0"><br>
        </div>    

      </div>
      <div class="row">
        <div class="col-sm-4">
            <label for="eyes-slider" class="form-label">Eyes shape</label>
            <input type="range" class="form-range" id="eyes-slider" name="eyes-slider" min="0" max="4" value = "0"><br>
        </div>
        <div class="col-sm-4">
            <label for="nose-slider" class="form-label">Nose shape</label>
            <input type="range" class="form-range" id="nose-slider" name="nose-slider" min="0" max="4" value = "0"><br>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4">
            <label for="ears-slider" class="form-label">Ears shape</label>
        <input type="range" class="form-range" id="ears-slider" name="ears-slider" min="0" max="1" value = "0"><br>
        </div>
        <div class="col-sm-4">
            <label for="lips-slider" class="form-label">Lips shape</label>
        <input type="range" class="form-range" id="lips-slider" name="lips-slider" min="0" max="2" value = "0"><br>
        </div>

      </div>
      <p class="card-text">Suspect Number:<span id="suspect-num"></span></p>

    </div>
  </div>
</div>
<div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
<h5 class="card-title text-success mb-0 pb-0"><i class="fas fa-dna"></i> DNA Laboratory</h5>
<div class="card bg-dark mb-0 p-0">
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores non, ab ut voluptatum dolor illo dolores! Mollitia doloribus vero quia quidem atque exercitationem nemo vitae ex adipisci cupiditate, minima quo.
    </p>
    
  </div>
</div>
<div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
<h5 class="card-title text-success mb-0 pb-0"><i class="fas fa-fingerprint"></i> Fingerprinting</h5>
<div class="card bg-dark mb-0 p-0">
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores non, ab ut voluptatum dolor illo dolores! Mollitia doloribus vero quia quidem atque exercitationem nemo vitae ex adipisci cupiditate, minima quo.

    </p>
    
  </div>
</div>
</div>

<!-- ------------------------- END TABS --------------------------------------- -->



</div>

`
$("#zoom-game-area").html(mastermind);

//---------------------------- CASE FILE ----------------------------------------

$("#case-basics-alert").on("click",(e)=>{
    
    if($('#file-basics').css('display') == 'none'){
        $(".file-content").slideUp();
        $("#file-basics").slideDown();
        // cbShowHide = 0;
    } else {
        $(".file-content").slideUp();
        $("#file-basics").slideUp()
        // cbShowHide = 1;
    }
})

$("#poi-alert").on("click",(e)=>{
    
    if($('#poi-details').css('display') == 'none'){
        $(".file-content").slideUp();
        $("#poi-details").slideDown();
        // cbShowHide = 0;
    } else {
        $(".file-content").slideUp();
        $("#poi-details").slideUp()
        // cbShowHide = 1;
    }
})

//----------------------------------- RUN PLATES -----------------------------------

$("#plates-form").on("click",(e)=>{
    e.preventDefault();
})

//-------------------------------RUN CRIMINAL RECORDS -------------------------------

$("#criminal-records-form").on("click",(e)=>{
    e.preventDefault();
})

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





})