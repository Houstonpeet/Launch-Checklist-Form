// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let input1 = document.querySelector("input[name=pilotName]")
      let input2 = document.querySelector("input[name=copilotName]")
      let input3 = document.querySelector("input[name=fuelLevel]")
      let input4 =  document.querySelector("input[name=cargoMass]")
      event.preventDefault()
      
      if (input1.value === "" || input2.value === "" || input3.value === "" || input4.value === "") {
         alert("All Fields Required!");
      } else if (isNaN(input3.value) === true || isNaN(input4.value) === true) {
         alert("Make sure to enter valid information in every field");
      } else if (isNaN(input1.value) === false || isNaN(input2.value) === false) {
         alert("Make sure to enter valid information in every field")
      } else { 
         const div = document.getElementById('launchStatusCheck');
         const fuelLevel = input3.value > 10000 ? "Fuel level high enough for launch" : 'Fuel level too low'
         const cargoMass = input4.value < 10000 ? "Cargo mass low enough for launch" : "Cargo mass too high"
         const launchStatusReady =  (input3.value > 10000 && input4.value < 10000)
         
         div.innerHTML = `
         <h2 id="launchStatus" class="launchReady-${launchStatusReady}">${launchStatusReady ? "Shuttle ready for launch" : "Shuttle not ready for launch"}</h2>
            <div>
                <ol>
                    <li id="pilotStatus">Pilot ${input1.value} Ready</li>
                    <li id="copilotStatus">Co-pilot ${input2.value} Ready</li>
                    <li id="fuelStatus">${fuelLevel}</li>
                    <li id="cargoStatus">${cargoMass}</li>
                </ol>
            </div>
         `
      }
   });
});

window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
       // Access the JSON in the response
       response.json().then( function(json) {
          const planet = json[Math.floor(Math.random() * json.length)]
          console.log(planet)
         const div = document.getElementById("missionTarget");
         /*randomize this*/
         div.innerHTML = `
         <h2>Mission Destination</h2>
           <ol>
               <li>Name: ${planet.name}</li>
               <li>Diameter: ${planet.diameter}</li>
               <li>Star: ${planet.star}</li>
               <li>Distance from Earth: ${planet.distance}</li>
               <li>Number of Moons: ${planet.number}</li>
           </ol>
           <img src="${planet.image}">
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
