const displayCoordinates = document.getElementById("display-coordinates");
let deviceLongitude = null;
let deviceLatitude = null;

const myLocation = () => {
  console.log("myLocation function called");
  console.log("Long:" + deviceLongitude);
  console.log("Lat:" + deviceLatitude);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    displayCoordinates.innerHTML = "Tu ubicación está bloqueada. Por favor habilite el permiso de ubicación.";
  }
};

const showPosition = (coordinates) => {
  console.log("showPosition function called");
  deviceLongitude = coordinates.coords.longitude;
  deviceLatitude = coordinates.coords.latitude;
  console.log("Long:" + deviceLongitude);
  console.log("Lat:" + deviceLatitude);

  displayCoordinates.innerHTML = "Longitud: " + deviceLongitude + "<br/>Latitud: " + deviceLatitude;
};
