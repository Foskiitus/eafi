$(document).ready(function() {
  $('select').material_select();

  toggleFields();
  toggleFields1();
  toggleFields2();
  toggleFields3();

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
  else
      $("#dtexfio").hide();
};
function toggleFields1() {
  if ($("#tfio").val() == "pes" && $("#dtexfio-1").val() == "44")
      $("#pes44").show();
  else
      $("#pes44").hide();
};
function toggleFields2() {
  if ($("#tfio").val() == "pes" && $("#dtexfio-1").val() == "78")
      $("#pes78").show();
  else
      $("#pes78").hide();
};
function toggleFields3() {
  if ($("#tfio").val() == "pes" && $("#dtexfio-1").val() == "167")
      $("#pes167").show();
  else
      $("#pes167").hide();
};
