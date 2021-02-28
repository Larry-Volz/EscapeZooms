$(function(){
    window.addEventListener('beforeunload', (event) => { 
        event.preventDefault(); // Google Chrome requires returnValue to be set. 	event.returnValue = ''; 
    }); 
/* ----------------------- MASTERMIND CONTROL PANEL CODE ---------------------------*/ 

const mastermind = `
<div class="container crime-lab-title">
<div class="row">
    <div class="col">
        <h1 class="text-light">Crime Lab</h1>
    </div>
</div>
<!-- ------------------------------ TABS ---------------------------------------- -->

<ul class="nav nav-tabs" id="myTab" role="tablist">
<li class="nav-item case-file-nav-item">
<a class="nav-link active" id="case-file-tab" data-toggle="tab" href="#case-file" role="tab" aria-controls="case-file" aria-selected="false"><i class="far fa-folder"></i> Case File</a>
</li>  
<li class="nav-item sketch-nav-item">
<a class="nav-link" id="sketch-tab" data-toggle="tab" href="#sketch" role="tab" aria-controls="sketch" aria-selected="true"><i class="fas fa-pencil-alt"></i> Sketch Artist</a>
</li>
<li class="nav-item DNA-nav-item">
<a class="nav-link" id="dna-tab" data-toggle="tab" href="#dna" role="tab" aria-controls="dna" aria-selected="false"><i class="fas fa-dna"></i> DNA</a>
</li>
<li class="nav-item fingerprint-nav-item">
<a class="nav-link" id="fingerprint-tab" data-toggle="tab" href="#fingerprint" role="tab" aria-controls="fingerprint" aria-selected="false"><i class="fas fa-fingerprint"></i> Fingerprinting</a>
</li>
<li class="nav-item witnesses-nav-item">
<a class="nav-link" id="witnesses-tab" data-toggle="tab" href="#witnesses" role="tab" aria-controls="witnesses" aria-selected="false"><i class="far fa-eye"></i> Witnesses</a>
</li>
<li class="nav-item ballistics-nav-item">
<a class="nav-link" id="ballistics-tab" data-toggle="tab" href="#ballistics" role="tab" aria-controls="ballistics" aria-selected="false"><i class="fas fa-bullseye"></i> Ballistics</a>
</li>
<li class="nav-item run-plates-nav-item">
<a class="nav-link" id="plates-tab" data-toggle="tab" href="#plates" role="tab" aria-controls="plates" aria-selected="false"><i class="fas fa-car"></i> Run plates</a>
</li>
<li class="nav-item run-records-nav-item">
<a class="nav-link" id="records-tab" data-toggle="tab" href="#records" role="tab" aria-controls="records" aria-selected="false"><i class="far fa-id-badge"></i> Criminal Records</a>
</li>
<li class="nav-item tracks-nav-item">
<a class="nav-link" id="tracks-tab" data-toggle="tab" href="#tracks" role="tab" aria-controls="tracks" aria-selected="false"><i class="fas fa-shoe-prints"></i> Tracks</a>
</li>
<li class="nav-item inventory-nav-item">
<a class="nav-link" id="inventory-tab" data-toggle="tab" href="#inventory" role="tab" aria-controls="inventory" aria-selected="false"><i class="fas fa-suitcase"></i> inventory</a>
</li>

</ul>

<!-- ------------------------------ TAB CONTENT ---------------------------------------- -->

<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="case-file" role="tabpanel" aria-labelledby="case-file-tab">
  <h5 class="card-title text-success mb-0 pb-0"><i class="far fa-folder-open"></i> Case File</h5>
  <div class="card bg-dark mb-0 p-0">

    <div class="alert alert-primary" role="alert" id="case-basics-alert">
      Case Basics
    </div>
      <div class="row file-content" id = "file-basics" style="display: none;">
        <div class="col ml-2">
          <p>Time of day: <span id="case-basic-tod">...to be assigned...</span></p>
          <p>Exact or approximate location: <span id="case-basic-loc">...to be assigned...</span></p>
          <p>Offence or occurrence: <span id="case-basic-crime"></span>...to be assigned...</p>
          <p>Names and addresses of offenders, victims or witnesses</p>
        </div>
        <div class="starting-poi" id="starting-poi">...to be assigned...</div>
      </div>
    <div class="alert alert-success" role="alert" id="poi-alert">
      Persons of Interest
    </div>
      <div class="row file-content" id="poi-details" style="display: none;">
        <div class="col">
          <table class = "ml-2" id="poi-table">
            <tr>
              <th>Name</th>
              <th>id#</th>
              <th>Notes</th>
            </tr>
            <tr>
              <td>...to be assigned...</td>
              <td>...to be assigned...</td>
              <td>...to be assigned...</td>
            </tr>
          </table>
        </div>
      </div>
      
    </div>
</div>
<div class="tab-pane fade " id="sketch" role="tabpanel" aria-labelledby="sketch-tab">
<h5 class="card-title text-success mb-0 pb-0"><i class="fas fa-pencil-alt"></i> A.I. Sketch Artist</h5>
    <div class="card bg-dark mb-0 p-0">
        <!--  HEADS -->
        <img class="card-img-top mb-0 head" id= "head0" src="crimeLabPanel/PhotoFacePieces/Head-0.png" alt="Sketch artist app">
        <img class="card-img-top mb-0 head hidden" id= "head1" src="crimeLabPanel/PhotoFacePieces/Head-1.png" alt="Sketch artist app">
        <img class="card-img-top mb-0 head hidden" id= "head2" src="crimeLabPanel/PhotoFacePieces/Head-2.png" alt="Sketch artist app">

        <!-- WIGS -->
        <img class="card-img-top mb-0 hair       " id= "hair0" src="crimeLabPanel/PhotoFacePieces/Hair-0.png" alt="Sketch artist app">
        <img class="card-img-top mb-0 hair hidden" id= "hair1" src="crimeLabPanel/PhotoFacePieces/Hair-1.png" alt="Sketch artist app">
        <img class="card-img-top mb-0 hair hidden" id= "hair2" src="crimeLabPanel/PhotoFacePieces/Hair-2.png" alt="Sketch artist app">
        <img class="card-img-top mb-0 hair hidden" id= "hair3" src="crimeLabPanel/PhotoFacePieces/Hair-3.png" alt="Sketch artist app">
        <img class="card-img-top mb-0 hair hidden" id= "hair4" src="crimeLabPanel/PhotoFacePieces/Hair-4.png" alt="Sketch artist app">
        <img class="card-img-top mb-0 hair hidden" id= "hair5" src="crimeLabPanel/PhotoFacePieces/Hair-5.png" alt="Sketch artist app">

        <!-- EYES -->
        <img class="card-img-top mb-0 eyes       " id= "eyes0" src="crimeLabPanel/PhotoFacePieces/Eyes-0.png" alt="Sketch artist app">
        <img class="card-img-top mb-0 eyes hidden" id= "eyes1" src="crimeLabPanel/PhotoFacePieces/Eyes-1.png" alt="Sketch artist app">
        <img class="card-img-top mb-0 eyes hidden" id= "eyes2" src="crimeLabPanel/PhotoFacePieces/Eyes-2.png" alt="Sketch artist app">
        <img class="card-img-top mb-0 eyes hidden" id= "eyes3" src="crimeLabPanel/PhotoFacePieces/Eyes-3.png" alt="Sketch artist app">
        <img class="card-img-top mb-0 eyes hidden" id= "eyes4" src="crimeLabPanel/PhotoFacePieces/Eyes-4.png" alt="Sketch artist app">
        <img class="card-img-top mb-0 eyes hidden" id= "eyes5" src="crimeLabPanel/PhotoFacePieces/Eyes-5.png" alt="Sketch artist app">
        
        
        <!-- NOSE -->
        <img class="card-img-top mb-0 nose       " id= "nose0" src="crimeLabPanel/PhotoFacePieces/Nose-0.png" alt="Sketch artist app">
        <img class="card-img-top mb-0 nose hidden" id= "nose1" src="crimeLabPanel/PhotoFacePieces/Nose-1.png" alt="Sketch artist app">
        <img class="card-img-top mb-0 nose hidden" id= "nose2" src="crimeLabPanel/PhotoFacePieces/Nose-2.png" alt="Sketch artist app">
        <img class="card-img-top mb-0 nose hidden" id= "nose3" src="crimeLabPanel/PhotoFacePieces/Nose-3.png" alt="Sketch artist app">
        <img class="card-img-top mb-0 nose hidden" id= "nose4" src="crimeLabPanel/PhotoFacePieces/Nose-4.png" alt="Sketch artist app">
        <img class="card-img-top mb-0 nose hidden" id= "nose5" src="crimeLabPanel/PhotoFacePieces/Nose-5.png" alt="Sketch artist app">

        <!-- LIPS -->
        <img class="card-img-top mb-0 lips       " id= "lips0" src="crimeLabPanel/PhotoFacePieces/Lips-0.png" alt="Sketch artist app">
        <img class="card-img-top mb-0 lips hidden" id= "lips1" src="crimeLabPanel/PhotoFacePieces/Lips-1.png" alt="Sketch artist app">
        <img class="card-img-top mb-0 lips hidden" id= "lips2" src="crimeLabPanel/PhotoFacePieces/Lips-2.png" alt="Sketch artist app">
        <img class="card-img-top mb-0 lips hidden" id= "lips3" src="crimeLabPanel/PhotoFacePieces/Lips-3.png" alt="Sketch artist app">

        <!-- EARS -->
        <img class="card-img-top mb-0 ears" id= "ears0" src="crimeLabPanel/PhotoFacePieces/Ears-0.png" alt="Sketch artist app">
        <img class="card-img-top mb-0 ears hidden" id= "ears1" src="crimeLabPanel/PhotoFacePieces/Ears-1.png" alt="Sketch artist app">
        <img class="card-img-top mb-0 ears hidden" id= "ears2" src="crimeLabPanel/PhotoFacePieces/Ears-2.png" alt="Sketch artist app">

        <!-- TEXT -->
        <div class="card-body jusify-content-center mb-0">
        
        <!-- SLIDERS -->
          <div class="row mt-0">
            <div class="col-sm-4 mt-0">
                <label for="head-slider" class="form-label">Head shape</label>
                <input type="range" class="form-range" id="head-slider" name="head-slider" min="0" max="2" value = "0"><br>
            </div>
            <div class="col-sm-4 mt-0">
                <label for="hair-slider" class="form-label">Hair style</label>
                <input type="range" class="form-range" id="hair-slider" name="hair-slider" min="0" max="6" value = "0"><br>
            </div>    

          </div>
          <div class="row mt-0">
            <div class="col-sm-4 mt-0">
                <label for="eyes-slider" class="form-label">Eyes shape</label>
                <input type="range" class="form-range" id="eyes-slider" name="eyes-slider" min="0" max="5" value = "0"><br>
            </div>
            <div class="col-sm-4 mt-0">
                <label for="nose-slider" class="form-label">Nose shape</label>
                <input type="range" class="form-range" id="nose-slider" name="nose-slider" min="0" max="5" value = "0"><br>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4">
                <label for="ears-slider" class="form-label">Ears shape</label>
            <input type="range" class="form-range" id="ears-slider" name="ears-slider" min="0" max="2" value = "0"><br>
            </div>
            <div class="col-sm-4">
                <label for="lips-slider" class="form-label">Lips shape</label>
            <input type="range" class="form-range" id="lips-slider" name="lips-slider" min="0" max="3" value = "0"><br>
            </div>

          </div>
          <p class="card-text">Suspect Number:<span id="suspect-num"></span></p>
    
        </div>
      </div>
</div>
<div class="tab-pane fade" id="dna" role="tabpanel" aria-labelledby="dna-tab">
    <h5 class="card-title text-success mb-0 pb-0"><i class="fas fa-dna"></i> DNA Laboratory</h5>
    <div class="card bg-dark mb-0 p-0">
        <p>
            You have no DNA evidence collected to test yet.
        </p>
        
      </div>
</div>
<div class="tab-pane fade" id="fingerprint" role="tabpanel" aria-labelledby="fingerprint-tab">
    <h5 class="card-title text-success mb-0 pb-0"><i class="fas fa-fingerprint"></i> Fingerprinting</h5>
    <div class="card bg-dark mb-0 p-0">
        <p>
            You have not yet collected any fingerprints to analyze.

        </p>
        
      </div>
</div>
<div class="tab-pane fade" id="witnesses" role="tabpanel" aria-labelledby="witnesses-tab">
  <h5 class="card-title text-success mb-0 pb-0"><i class="far fa-eye"></i> Witness statements</h5>
  <div class="card bg-dark mb-0 p-0">
      <p>
          ... To Be Loaded on Game Start ...

      </p>
      
    </div>
</div>
<div class="tab-pane fade" id="ballistics" role="tabpanel" aria-labelledby="ballistics-tab">
<h5 class="card-title text-success mb-0 pb-0"><i class="fas fa-bullseye"></i> Ballistics</h5>
<div class="card bg-dark mb-0 p-0">
    <p>
        You have not yet collected any weapons or spent casing to analyze.  
    </p>
    
  </div>
</div>
<div class="tab-pane fade" id="plates" role="tabpanel" aria-labelledby="plates-tab">
<h5 class="card-title text-success mb-0 pb-0"><i class="fas fa-car"></i> Run Plates</h5>
<div class="card bg-dark mb-0 p-0">
  <form id="plates-form">
      <label for="plates-form-input">Plate number to run (full or partial): </label>
      <input type="text" name ="plates-form-input" id="plates-form-input" placeholder="">
      <input type="submit" id="plates-submit-btn" class ="btn btn-primary ml-3">

  </form>
  
</div>
</div>
<div class="tab-pane fade" id="records" role="tabpanel" aria-labelledby="records-tab">
<h5 class="card-title text-success mb-0 pb-0"><i class="far fa-id-badge"></i> Criminal records</h5>
<div class="card bg-dark mb-0 p-0">
  <p>
    <form id = "criminal-records-form">
      <label for="cr-fname">First name </label>
      <input type="text" name ="cr-fname" id="cr-fname" placeholder="">
      <label for="cr-lname">Last name </label>
      <input type="text" name ="cr-lname" id="cr-lname" placeholder="">
      <input type="submit" id="cr-submit-btn" class ="btn btn-primary ml-3">

  </form>

  </p>
  
</div>
</div>
<div class="tab-pane fade" id="tracks" role="tabpanel" aria-labelledby="tracks-tab">
<h5 class="card-title text-success mb-0 pb-0"><i class="fas fa-shoe-prints"></i> Tracks</h5>
<div class="card bg-dark mb-0 p-0">
    <p>
        You have not found any tracks yet.

    </p>
    
  </div>
</div>
<div class="tab-pane fade" id="inventory" role="tabpanel" aria-labelledby="inventory-tab">
<h5 class="card-title text-success mb-0 pb-0"><i class="fas fa-suitcase"></i> Inventory</h5>
<div class="card bg-dark mb-0 p-0">
    <p>
        Your inventory is empty.

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

const numberOfHeads = 3;
const numberOfWigs = 6; //one extra to take into account bald as option 5
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