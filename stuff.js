





$(document).ready(function(){
  
  $("#div-btn-add").click(function() {
    alert("Clicked the add button");
    
    $("#div-add-tilt").show();
    
  });
  
  $("#btn-add-tilt").click( function() {
    $("#div-add-tilt").hide();
    $("#div-empty-table-text").hide();
  });
  
});
