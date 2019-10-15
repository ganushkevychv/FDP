/*const fdpContainer = document.getElementById('startOfFdp')
fetch('fdp.json')
.then(response =>response.json())
.then(fdp=>{
  fdp
  .forEach(fdps=>{
    const fdpNode = document.createElement('option')
    fdpNode.textContent = fdps
    fdpContainer.appendChild(fdpNode);
  })
}
)
const sectorsContainer = document.getElementById('sectors')
fetch('fdp.json')
.then(response =>response.json())
.then(sectors=>{
  sectors
  .forEach(sector=>{
    const sectorsNode = document.createElement('option')
    sectorsNode.textContent = sector.
    sectorsContainer.appendChild(sectorsNode);
  })
}
)*/
/*let fdpOne = "06:00 - 13:29";
let sectorOne = "1 - 2";
let resultOne = "13:00";
if (fdpOne !== sectorOne){
  console.log(resultOne);
}
else (console.log(alert("error")))

function updateChar() {

  let sector = document.getElementById("sectorSelect");

  if (sector.value === "sectorOne"){

      alert("You clicked Zone 1.");
  }
}*/
const resultOne = 
 ["13:00",
 "12:30",
 "12:00",
 "11:30",
 "11:00"
 ];

function sectorChangeFunc() {
  let sectorSelect = document.getElementById("sectorSelect");
  let sectorValue = sectorSelect.options[sectorSelect.selectedIndex].value;

 }
 function fdpChangeFunc() {
  let fdpSelect = document.getElementById("fdpSelect");
  let fdpValue = fdpSelect.options[fdpSelect.selectedIndex].value;
 }
 

 if(document.getElementById("sectorSelect").value === "sectorOnetwo" && document.getElementById("fdpSelect").value === "fdpOne") 
 console.log("Result: " + resultOne[0])
{
  document.getElementById("result").innerHTML = "Result: " + resultOne[0]
}
 if (document.getElementById("sectorSelect").value === "sectorThree" && document.getElementById("fdpSelect").value === "fdpOne")
{
  document.getElementById("result").innerHTML = "Result: " + resultOne[1]
}