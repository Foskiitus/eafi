$(document).ready(function() {
  $('select').material_select();

  toggleFields();
  toggleFields1();
  toggleFields2();
  toggleFields3();
  toggleFields4();

  $("#tfio").change(function () {
      toggleFields();
  });
  $("#dtexfio-1").change(function () {
      toggleFields1();
  });
  $("#pes44-1").change(function () {
      toggleFields2();
  });
  $("#pes78-1").change(function () {
      toggleFields3();
  });
  $("#pes167-1").change(function () {
      toggleFields4();
  });

});
function toggleFields() {
  if ($("#tfio").val() == "pes")
      $("#dtexfio").show();
  else if (($("#tfio").val() == "pes" && $("#dtexfio-1").val() == "44"))
    $("#dtexfio").show();
    $("#pes44").show();
  else
      $("#dtexfio").hide();
      $("#pes44").hide();
      $("#pes78").hide();
      $("#pes167").hide();
};
