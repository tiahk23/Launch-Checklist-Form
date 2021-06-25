// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotName = document.querySelector("input[name=pilotName]");
      let coPilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      if (pilotName.value === "" || coPilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
         event.preventDefault();
         }
      if (isNaN(pilotName.value) === false || isNaN(coPilotName.value) === false || isNaN(fuelLevel.value) === true || isNaN(cargoMass.value) === true){
         alert("Not a Valid Submission.");
         event.preventDefault();
      }
      let fuelStatus = document.querySelector("li[id=fuelStatus]");
      let faultyItemsStyle = document.querySelector("#faultyItems");
      let launchStatus = document.querySelector("h2[id=launchStatus]");
      let launchStatusColor = document.querySelector("h2[id=launchStatus]");
      if (fuelLevel.value < 10000){
         launchStatusColor.setAttribute('style','color:red');
         faultyItemsStyle.setAttribute('style', 'visibility:visible');
         //launchStatusColor.style.Color = "red";
         //faultyItemsStyle.style.Visibility = "visible";
         fuelStatus.innerHTML = "Fuel Level too low for launch.";
         launchStatus.innerHTML = "Shuttle not ready for Launch";
         
      } else if (cargoMass.value > 10000){
         launchStatusColor.setAttribute('style','color:red');
         faultyItemsStyle.setAttribute('style', 'visibility:visible');
         let cargoStatus = document.querySelector("li[id=cargoStatus]");
         cargoStatus = "There is too much mass for the shuttle to take off";
         launchStatus.innerHTML = "Shuttle not ready for Launch";
         
      } else {
         launchStatus.innerHTML = "Shuttle is ready for Launch.";
         launchStatusColor.setAttribute('style','color:green');
      }
      
      
   });

   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
               response.json().then( function(json) {
                  const div = document.getElementById("missionTarget");
                  div.innerHTML = `
                  <h2>Mission Destination</h2>
                  <ol>
                     <li>Name: ${json[3].name}</li>
                     <li>Diameter: ${json[3].diameter}</li>
                     <li>Star: ${json[3].star}</li>
                     <li>Distance from Earth: ${json[3].distance}</li>
                     <li>Number of Moons: ${json[3].moons}</li>
                  </ol>
                  <img src="${json[3].image}">
                  `;
               });
            });
});



/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
