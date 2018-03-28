function stressTest(signs, symptoms, coping) {
  return signs + symptoms - coping;
};

$(document).ready(function() {

  $("form").submit(function(event) {
    event.preventDefault();

    var warningSigns = 0;
    var healthSymptoms = 0;
    var copingMechanisms = 0;

    $("input:checkbox[name=warning-signs]:checked").each(function() {
      warningSigns += parseInt($(this).val());
    });
    $("input:checkbox[name=health-symptoms]:checked").each(function() {
      healthSymptoms += parseInt($(this).val());
    });
    $("input:checkbox[name=coping-mechanisms]:checked").each(function() {
      copingMechanisms += parseInt($(this).val());
    });

    stressIndex = stressTest(warningSigns, healthSymptoms, copingMechanisms);

    $(".jumbotron").show();

    if (stressIndex > 9) {
      $("#output").text("Game over pal!");
    } else if (stressIndex <= 9 && stressIndex >= 6){
      $("#output").text("Take a yoga class?");
    } else {
      $("#output").text("Why are you even here?");
    }
  });

});
