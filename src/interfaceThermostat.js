$ ( document ).ready(function() {

  var thermostat = new Thermostat
  temperatureUpdate();

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

function temperatureUpdate() {
  $('#temperature').text(thermostat.temperature);
}


});
