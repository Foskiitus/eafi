"use strict";
$(document).ready(function() {
  {$('select').material_select();}

  toggleFields();

  $("#tfio").change(function () {
      toggleFields();
  });
  $("#dtexfio-1").change(function () {
      toggleFields();
  });
  $("#pes78-1").change(function () {
      toggleFields();
  });
  $("#dtexelas-1").change(function () {
      toggleFields();
  });
  $("#elas17-1").change(function () {
      toggleFields();
  });
  $("#ncabos-1").change(function () {
      toggleFields();
  });
  $("#tcone-1").change(function () {
      toggleFields();
  });

});
function toggleFields() {
  if ($("#tfio").val() == "pes")
      {$("#dtexfio").show();}
  else
      {$("#dtexfio").hide();}
  if ($("#tfio").val() == "pa")
      {$("#dtexfio").show();}
  else
      {$("#dtexfio").hide();}
  if ($("#tfio").val() == "poy")
      {$("#dtexfio").show();}
  else
      {$("#dtexfio").hide();}
if ($("#tfio").val() == "pes" && $("#dtexfio-1").val() == "78")
      {$("#pes78").show();}
  else
      {$("#pes44").hide();
      $("#pes50").hide();
      $("#pes78").hide();}
  if ($("#tfio").val() == "pes" && $("#dtexfio-1").val() == "167")
      {$("#pes167").show();}
  else
      {$("#pes167").hide();}
  if ($("#tfio").val() == "pa" && $("#dtexfio-1").val() == "44")
      {$("#pa44").show();}
  else
      {$("#pa44").hide();}
  if ($("#tfio").val() == "pa" && $("#dtexfio-1").val() == "78")
      {$("#pa78").show();}
  else
      {$("#pa78").hide();}
  if ($("#tfio").val() == "pa" && $("#dtexfio-1").val() == "110")
      {$("#pa110").show();}
  else
      {$("#pa110").hide();}
  if ($("#tfio").val() == "poy" && $("#dtexfio-1").val() == "50")
      {$("#poy50").show();}
  else
      {$("#poy50").hide();}
  /*if ($("#tfio").val() == "pes" && $("#dtexfio-1").val() == "44")
      {$("#pes44").show();}
  else
    {$("#pes44").hide();}
  if ($("#tfio").val() == "pes" && $("#dtexfio-1").val() == "50")
      {$("#pes50").show();}
  else
      {$("#pes50").hide();}*/
if ($("#pes44-1").val() == "1" || $("#pes44-1").val() == "2" || $("#pes44-1").val() == "3")
      {$("#dtexelas").show();}
  else
      {$("#dtexelas").hide();}
  if ($("#pes50-1").val() == "1" || $("#pes50-1").val() == "2" || $("#pes50-1").val() == "3")
      {$("#dtexelas").show();}
  else
      {$("#dtexelas").hide();}
  if ($("#pes78-1").val() == "1" || $("#pes78-1").val() == "2" || $("#pes78-1").val() == "3")
      {$("#dtexelas").show();}
  else
      {$("#dtexelas").hide();}
  if ($("#pes167-1").val() == "1" || $("#pes167-1").val() == "2" || $("#pes167-1").val() == "3")
      {$("#dtexelas").show();}
  else
      {$("#dtexelas").hide();}
  if ($("#pa44-1").val() == "1" || $("#pa44-1").val() == "2" || $("#pa44-1").val() == "3")
      {$("#dtexelas").show();}
  else
      {$("#dtexelas").hide();}
  if ($("#pa78-1").val() == "1" || $("#pa78-1").val() == "2" || $("#pa78-1").val() == "3")
      {$("#dtexelas").show();}
  else
      {$("#dtexelas").hide();}
  if ($("#pa110-1").val() == "1" || $("#pa110-1").val() == "2" || $("#pa110-1").val() == "3")
      {$("#dtexelas").show();}
  else
      {$("#dtexelas").hide();}
if ($("#dtexelas-1").val() == "17")
      {$("#elas17").show();}
  else
      {$("#elas17").hide();}

  if ($("#dtexelas-1").val() == "22")
      {$("#elas22").show();}
  else
      {$("#elas22").hide();}

  if ($("#dtexelas-1").val() == "33")
      {$("#elas33").show();}
  else
     { $("#elas33").hide();}

  if ($("#dtexelas-1").val() == "44")
      {$("#elas44").show();}
  else
      {$("#elas44").hide();}

  if ($("#dtexelas-1").val() == "78")
     { $("#elas78").show();}
  else
      {$("#elas78").hide();}
 if ($("#elas17-1").val() == "1" || $("#elas17-1").val() == "2" || $("#elas17-1").val() == "3" || $("#elas17-1").val() == "4" || $("#elas17-1").val() == "5")
      {$("#ncabos").show();}

  else if ($("#elas22-1").val() == "1" || $("#elas22-1").val() == "2" || $("#elas22-1").val() == "3" || $("#elas22-1").val() == "4" || $("#elas22-1").val() == "5")
      {$("#ncabos").show();}

  else if ($("#elas33-1").val() == "1" || $("#elas33-1").val() == "2" || $("#elas33-1").val() == "3" || $("#elas33-1").val() == "4" || $("#elas33-1").val() == "5")
      {$("#ncabos").show();}

  else if ($("#elas44-1").val() == "1" || $("#elas44-1").val() == "2" || $("#elas44-1").val() == "3" || $("#elas44-1").val() == "4" || $("#elas44-1").val() == "5"|| $("#elas78-1").val() == "1" || $("#elas78-1").val() == "2" || $("#elas78-1").val() == "3" || $("#elas78-1").val() == "4" || $("#elas78-1").val() == "5" )
      {$("#ncabos").show();}

  else if ($("#elas78-1").val() == "1" || $("#elas78-1").val() == "2" || $("#elas78-1").val() == "3" || $("#elas78-1").val() == "4" || $("#elas78-1").val() == "5" )
      {$("#ncabos").show();}

  else
      {$("#ncabos").hide();}
if ($("#ncabos-1").val() == "1" || $("#ncabos-1").val() == "2" || $("#ncabos-1").val() == "3")
      {$("#tcone").show();}
  else
      {$("#tcone").hide();}
if ($("#tcone-1").val() == "1" || $("#tcone-1").val() == "2" )
      {$("#tirag").show();}
  else
      {$("#tirag").hide();}
}
