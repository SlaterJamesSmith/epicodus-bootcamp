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

    var stressIndex = stressTest(warningSigns, healthSymptoms, copingMechanisms);

    if (stressIndex > 9) {
      $("#result").text("You're screwed.");
    } else if (stressIndex <= 9 && stressIndex >= 6) {
      $("#result").text("You're normal.");
    } else {
      $("#result").text("You're too easy going.");
    }

    $("#result").show();
  });
});
