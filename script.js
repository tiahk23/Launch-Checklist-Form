// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotName = document.querySelector("input[name=pilotName]");
      let coPilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      if (fuelLevel < 10000){
         let fuelStatus = document.querySelector("li[id=fuelStatus]");
         let faultyItemsStyle = document.querySelector("element[id=#faultyItems]");
         let launchStatus = document.querySelector("h2[id=launchStatus]");
         let launchStatusColor = document.querySelector("element[id=h2]");
         faultyItemsStyle.innerHTML = "visible";
         fuelStatus.innerHTML = "Fuel Level NOT high enough for launch.";
         launchStatus.innerHTML = "Shuttle not ready for Launch";
         launchStatusColor.innerHTML = "Red";
      } else {
         let launchStatus = document.querySelector("h2[id=launchStatus]");
         let launchStatusColor = document.querySelector("element[id=h2]");
         launchStatus.innerHTML = "Shuttle is ready for Launch.";
         launchStatusColor.innerHTML = "Green";
      }
      if (fuelLevel > 10000){
         let faultyItemsStyle = document.querySelector("element[id=#faultyItems]");
         let cargoStatus = document.querySelector("li[id=cargoStatus]");
         let launchStatus = document.querySelector("h2[id=launchStatus]");
         let launchStatusColor = document.querySelector("element[id=h2]");
         faultyItemsStyle.innerHTML = "visible";
         cargoStatus = "There is too much mass for the shuttle to take off";
         launchStatus.innerHTML = "Shuttle not ready for Launch";
         launchStatusColor.innerHTML = "Red";
      } else {
         let launchStatus = document.querySelector("h2[id=launchStatus]");
         let launchStatusColor = document.querySelector("element[id=h2]");
         launchStatus.innerHTML = "Shuttle is ready for Launch.";
         launchStatusColor.innerHTML = "Green";
      }
      if (pilotName.value === "" || coPilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
         event.preventDefault();
         }
      if (isNaN(pilotName.value) === false || isNaN(coPilotName.value) === false || isNaN(fuelLevel.value) === true || isNaN(cargoMass.value) === true){
         alert("Not a Valid Submission.");
         event.preventDefault();
      }
      
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
