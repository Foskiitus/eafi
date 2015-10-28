$(document).ready(function() {
  $('select').material_select();

  toggleFields();
  toggleFields1();
  toggleFields2();
  toggleFields3();
  toggleFields4();
  toggleFields5();
  toggleFields6();

  $("#tfio").change(function () {
      toggleFields();
  });
  $("#dtexfio-1").change(function () {
      toggleFields1();
  });
  $("#pes78-1").change(function () {
      toggleFields2();
  });
  $("#dtexelas-1").change(function () {
      toggleFields3();
  });
  $("#elas17-1").change(function () {
      toggleFields4();
  });
  $("#ncabos-1").change(function () {
      toggleFields5();
  });
  $("#tcone-1").change(function () {
      toggleFields6();
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
  if ($("#tfio").val() == "pes" && $("#dtexfio-1").val() == "78")
      $("#pes78").show();
  else
      $("#pes78").hide();
  if ($("#tfio").val() == "pes" && $("#dtexfio-1").val() == "167")
      $("#pes167").show();
  else
      $("#pes167").hide();
};
function toggleFields2() {
  if ($("#pes78-1").val() == "1" || $("#pes78-1").val() == "2" || $("#pes78-1").val() == "3" )
      $("#dtexelas").show();
  else
      $("#dtexelas").hide();
};
function toggleFields3() {
  if ($("#dtexelas-1").val() == "17")
      $("#elas17").show();
  else
      $("#elas17").hide();

  if ($("#dtexelas-1").val() == "22")
      $("#elas22").show();
  else
      $("#elas22").hide();

  if ($("#dtexelas-1").val() == "33")
      $("#elas33").show();
  else
      $("#elas33").hide();

  if ($("#dtexelas-1").val() == "44")
      $("#elas44").show();
  else
      $("#elas44").hide();

  if ($("#dtexelas-1").val() == "78")
      $("#elas78").show();
  else
      $("#elas78").hide();
};

function toggleFields4() {
  if ($("#elas17-1").val() == "1" || $("#elas17-1").val() == "2" || $("#elas17-1").val() == "3" || $("#elas17-1").val() == "4" || $("#elas17-1").val() == "5" || $("#elas22-1").val() == "1" || $("#elas22-1").val() == "2" || $("#elas22-1").val() == "3" || $("#elas22-1").val() == "4" || $("#elas22-1").val() == "5" || $("#elas33-1").val() == "1" || $("#elas33-1").val() == "2" || $("#elas33-1").val() == "3" || $("#elas33-1").val() == "4" || $("#elas33-1").val() == "5" || $("#elas44-1").val() == "1" || $("#elas44-1").val() == "2" || $("#elas44-1").val() == "3" || $("#elas44-1").val() == "4" || $("#elas44-1").val() == "5"|| $("#elas78-1").val() == "1" || $("#elas78-1").val() == "2" || $("#elas78-1").val() == "3" || $("#elas78-1").val() == "4" || $("#elas78-1").val() == "5" )
      $("#ncabos").show();
  else
      $("#ncabos").hide();
};
function toggleFields5() {
  if ($("#ncabos-1").val() == "1" || $("#ncabos-1").val() == "2" || $("#ncabos-1").val() == "3")
      $("#tcone").show();
  else
      $("#tcone").hide();
};
function toggleFields6() {
  if ($("#tcone-1").val() == "1" || $("#tcone-1").val() == "2" )
      $("#tirag").show();
  else
      $("#tirag").hide();
};
