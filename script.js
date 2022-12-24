 // end  
     var element = $("#resumee");

$("#download").on('click', function(){
 
  html2canvas(element , {
    onrendered: function(canvas){
      var imageData = canvas.toDataURL("Resume/png");
      var newData = imageData.replace(/^data:Resume\/png/, "data:application/octet-stream");
      $('#download').attr("download", "_resume.png").attr("href", newData);
    }
  });
});

// to open or close form section
const personalinfo_form = document.querySelector(".personal-details");
const down_form_per = document.querySelector(".personal-details span button");
const open_form_per = personalinfo_form.querySelector(".full-form");

      down_form_per.onclick= function(event){
        event.preventDefault();
       
        if(open_form_per.style.display ==="none") {
            open_form_per.style.display = 'block';
            document.querySelector(".personal-details span button .fa-arrow-up").style.transform ="rotate(0deg)";
        }else{
            personalinfo_form.querySelector(".full-form").style.display = 'none';
            document.querySelector(".personal-details span button .fa-arrow-up").style.transform ="rotate(180deg)";
        }

        
      }

      //upload image to resume
      const uploadfile = document.getElementById("upload-file");

      uploadfile.addEventListener("click",function(){
        document.getElementById("file-uploader").click();
      });
      var loadFile = function(event) {
        var image = document.getElementById('img');
        var image_resume =document.getElementById("image-container");
        image.src = URL.createObjectURL(event.target.files[0]);
        image_resume.src = URL.createObjectURL(event.target.files[0]);
      };


      // this button is to see the full size resume before download

      const fullsizereview =document.getElementById("see-fullsize");
     
      fullsizereview.addEventListener("click",function(){

        if (document.querySelector('.form-section').style.display === "block") {
        document.querySelector(".form-section").style.display = "none";
        document.querySelector(".resume-section").style = "width:100%;";
        document.querySelector(".resume").style.transform = "scale(1)";
        document.querySelector(".resume").style.top= "100px";


        }else{
          document.querySelector(".form-section").style.display = "block";
        document.querySelector(".resume-section").style = "width:50%;";
        document.querySelector(".resume").style.transform = "scale(0.6)";
        document.querySelector(".resume").style.top= "-137px";
  
  }

      });

     

      // let add personal details 

      const left_container = document.querySelector(".left-content"),
            right_container = document.querySelector(".right-content"),
            personaldetails = document.createElement("div");
          
       personaldetails.innerHTML =  `<div class="personal-details-container" >
      <p class="heading-container" style="font-size: 23px; padding: 0 0 2px 0; margin: 0 0 5px 0;">Personal details</p>
      <div>
        <p style="color:#a78888;">Date of birth</p>
        <p class="date-of-birth-container"></p>
      </div>
      <div>
        <p style="color:#a78888;">Gender</p>
        <p class="gender-container"></p>
      </div>
     <div>
      <p style="color:#a78888;">Nationality</p>
      <p class="nationality-container"></p>
     </div>
    </div>`;
    left_container.appendChild(personaldetails);


     document.getElementById("left-per").addEventListener("click",function (event){
      event.preventDefault();
      left_container.appendChild(personaldetails);
     });

     document.getElementById("right-per").addEventListener("click",function (event){
      event.preventDefault();
      right_container.appendChild(personaldetails);
     });

     
     document.getElementById("nationality").oninput = function () {
      document.querySelector(".nationality-container").innerHTML = document.getElementById("nationality").value;
      document.getElementById("left-per").addEventListener("click",function (event){
        event.preventDefault();
        left_container.appendChild(personaldetails);
       });
  
       document.getElementById("right-per").addEventListener("click",function (event){
        event.preventDefault();
        right_container.appendChild(personaldetails);
       });
     }
     document.getElementById("gender").oninput = function () {

      document.querySelector(".gender-container").innerHTML = document.getElementById("gender").value;
      document.getElementById("left-per").addEventListener("click",function (event){
        event.preventDefault();
        left_container.appendChild(personaldetails);
       });
  
       document.getElementById("right-per").addEventListener("click",function (event){
        event.preventDefault();
        right_container.appendChild(personaldetails);
       });
    }
     
     document.getElementById("date-of-birth").onchange = function () {

      document.querySelector(".date-of-birth-container").innerHTML = document.getElementById("date-of-birth").value;
      document.getElementById("left-per").addEventListener("click",function (event){
        event.preventDefault();
        left_container.appendChild(personaldetails);
       });
  
       document.getElementById("right-per").addEventListener("click",function (event){
        event.preventDefault();
        right_container.appendChild(personaldetails);
       });
     }
     
    //  document.querySelector(".date-of-birth-container").innerHTML = document.getElementById("date-of-birth").value;
    //  document.querySelector(".gender-container").innerHTML =document.getElementById("gender").value;
    //  document.querySelector(".nationality-container").innerHTML =document.getElementById("nationalty").value; // to delete this form section 
      



    // to delete the information of resume 
    document.getElementById("delete").onclick= function (event) {
      event.preventDefault();
    const alert_messages = document.getElementById("alert-messages");
    alert_messages.style.display = "block";
      const confirmmessege = document.createElement("div");
      confirmmessege.innerHTML = `<div class="msg-container">
      <p>this will be remove from your resume!</p>
      <button id="alert-msg-ok">ok</button>
      <button  id="alert-msg-cancel">cancel</button>
    </div>`
    alert_messages.appendChild(confirmmessege);
    document.getElementById("alert-msg-cancel").addEventListener("click",
    function () {
      confirmmessege.remove();
    alert_messages.style.display = "none";
    }
    );
    document.getElementById("alert-msg-ok").addEventListener(
      "click",
      function () {
        confirmmessege.remove();
        personaldetails.remove();
        alert_messages.style.display = "none";
        document.getElementById("delete").style.display = "none";
        let add = document.createElement("button");
        add.innerHTML ="add";
        document.querySelector(".button-per").appendChild(add);

        add.onclick = function (event) {
          event.preventDefault();
          left_container.appendChild(personaldetails);
        document.getElementById("delete").style.display = "block";
        add.style.display = "none";



        }
      }
      

    );
    }

    document.getElementById("name").addEventListener("input",
    function () {
      document.querySelector(".name-container").innerHTML = document.getElementById("name").value;
    });

    document.getElementById("headline").addEventListener("input",
    function () {
      document.querySelector(".headline-contaniner").innerHTML = document.getElementById("headline").value;
    });

    document.getElementById("email").addEventListener("input",
    function () {
      document.querySelector(".email-container").innerHTML = document.getElementById("email").value;
    });

    document.getElementById("address").addEventListener("input",
    function () {
      document.querySelector(".address-container").innerHTML = document.getElementById("address").value;
    });
    // document.getElementById("add-personal-details").addEventListener(
    //   "click",
    //   function (event) {
    //     event.preventDefault();
    //     left_container.appendChild(personaldetails);
    //     confirmmessege.remove();
    //     document.querySelector(".button-per #delete").style.display = "none"; 
    //   }
    // ); 

    // to uplaod img 
    