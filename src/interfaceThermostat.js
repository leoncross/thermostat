$ ( document ).ready(function() {

  var thermostat = new Thermostat
  temperatureUpdate();
  $("#powerSavingLabelOff").hide();

  $('#up').on('click', function() {
    thermostat.up();
    temperatureUpdate();
  })

  $('#down').on('click', function() {
    thermostat.down();
    temperatureUpdate();
  })

  $('#reset').on('click', function() {
    thermostat.reset();
    temperatureUpdate();
  })

  $("#powerSaving").click(function(){
    thermostat.powerSaving();
    $(".PowerSaving").toggle();
    temperatureUpdate();

  });

  function temperatureUpdate() {
    $('#temperature').text(thermostat.temperature);
  }
});
