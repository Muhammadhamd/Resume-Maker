// Download Resume
var element = $(".box");

  $("#download").on('click', function(){
    const name = document.getElementById("name").innerHTML;
    html2canvas(element , {
      onrendered: function(canvas){
        var imageData = canvas.toDataURL("Resume/png");
        var newData = imageData.replace(/^data:Resume\/png/, "data:application/octet-stream");
        $('#download').attr("download", name +"_resume.png").attr("href", newData);
      }
    });
  });


<!-- some tags for form -->
intership
etracurricular activities
reference
qualiies
certificates
achevement
custimsection
footer
courses