// first example how to resolve fdp task
/*const resultOne = 
 ["13:00",
 "12:30",
 "12:00",
 "11:30",
 "11:00",
 "12:45",
 "12:15",
 "11:45",
 "11:15",
 "10:45",
 "12:30",
 "12:00",
 "11:30",
 "11:00",
 "10:30",
 "12:15",
 "11:45",
 "11:15",
 "10:45",
 "10:15",
 "12:00",
 "11:30",
 "11:00",
 "10:30",
 "10:00",
 "11:45",
 "11:15",
 "10:45",
 "10:15",
 "9:45",
 "11:30",
 "11:00",
 "10:30",
 "10:00",
 "9:30",
 "11:15",
 "10:45",
 "10:15",
 "9:45",
 "9:15",
 "11:00",
 "10:30",
 "10:00",
 "9:30",
 "9:00",
 "12:00",
 "11:30",
 "11:00",
 "10:30",
 "10:00",
 "12:15",
 "11:45",
 "11:15",
 "10:45",
 "10:15",
 "12:30",
 "12:00",
 "11:30",
 "11:00",
 "10:30",
 "12:45",
 "12:15",
 "11:45",
 "11:15",
 "10:45"
 ]; */

//second example how to resolve fdp task
let obj = {};
fetch("/script/fdp.json")
  .then(response => response.json())
  .then(json => (obj = json));

function ChangeFunc() {
  let format = "H:mm";

  let getResultDiv = document.getElementById("result");
  let fdpSelect = document.getElementById("fdpSelect");
  let fdpValue = fdpSelect.options[fdpSelect.selectedIndex].value;
  let sectorSelect = document.getElementById("sectorSelect");
  let timeSelect = document.getElementById("time");
  let timeValue = timeSelect.options[timeSelect.selectedIndex].value;
  let getResultTimeDiv = document.getElementById("resultTime");
  let getResultTimeFdp = document.getElementById("resultFdp");

  let sectorValue = sectorSelect.options[sectorSelect.selectedIndex].value;
  if (fdpValue in obj && sectorValue in obj[fdpValue])
    // checks if json is present and contains necessary values
    getResultDiv.innerHTML =
      "Allowable FDP: " + moment(obj[fdpValue][sectorValue], format).format(format);

  getResultTimeDiv.innerHTML =
    "Duty time till: " +
    moment(obj[fdpValue][sectorValue], format)
      .add(moment(timeValue, format).hours(), "hours")
      .add(moment(timeValue, format).minutes(), "minutes")
      .add(20, "m")
      .format(format);
  getResultTimeFdp.innerHTML =
    "FDP till: " +
    moment(obj[fdpValue][sectorValue], format)
      .add(moment(timeValue, format).hours(), "hours")
      .add(moment(timeValue, format).minutes(), "minutes")
      .format(format) +
    "<br>" +
    "Extension not included";
  //add 1h to duty time and fdp
  document.getElementById("addBtn").addEventListener("click", incrementBtn);
  function incrementBtn() {
    getResultTimeDiv.innerHTML =
      "Duty time till: " +
      moment(obj[fdpValue][sectorValue], format)
        .add(moment(timeValue, format).hours(), "hours")
        .add(1, "H")
        .add(moment(timeValue, format).minutes(), "minutes")
        .add(20, "m")
        .format(format);
    getResultTimeFdp.innerHTML =
      "FDP till: " +
      moment(obj[fdpValue][sectorValue], format)
        .add(moment(timeValue, format).hours(), "hours")
        .add(1, "H")
        .add(moment(timeValue, format).minutes(), "minutes")
        .format(format);
  }
  //add 2h to duty time and fdp
  document
    .getElementById("addBtnTwo")
    .addEventListener("click", incrementBtnTwo);
  function incrementBtnTwo() {
    getResultTimeDiv.innerHTML =
      "Duty time till: " +
      moment(obj[fdpValue][sectorValue], format)
        .add(moment(timeValue, format).hours(), "hours")
        .add(2, "H")
        .add(moment(timeValue, format).minutes(), "minutes")
        .add(20, "m")
        .format(format);
    getResultTimeFdp.innerHTML =
      "FDP till: " +
      moment(obj[fdpValue][sectorValue], format)
        .add(moment(timeValue, format).hours(), "hours")
        .add(2, "H")
        .add(moment(timeValue, format).minutes(), "minutes")
        .format(format);
  }

  /*function incrementBtn() {
	let items = document.querySelectorAll("#resultTime, #resultFdp");

	items.forEach(items => {
		items.innerHTML = items.innerHTML + moment(obj[fdpValue][sectorValue], format)
			.add(moment(timeValue, format).hours(), "hours").add(1,"H")
			.add(moment(timeValue, format).minutes(), "minutes").add(20,"m")
			.format(format);
	})
};*/

  /*function incrementBtn() {
      let button = document.querySelectorAll("#resultTime, #resultFdp");
    
      for (let i = 0; i < items.length; i++)
      {
        button[i].onclick = function() { 
          this.innerHTML = this.innerHTML + moment(obj[fdpValue][sectorValue], format)
          .add(moment(timeValue, format).hours(), "hours").add(1,"H")
          .add(moment(timeValue, format).minutes(), "minutes")
          .format(format);
        };
      }
    };
    incrementBtn();*/

  // first example how to resolve fdp task
  /* if(sectorValue === "sectorOneTwo" && fdpValue === "fdpOne") {
     getResultDiv.innerHTML = "Result: " + resultOne[0]
  }else if (sectorValue === "sectorThree" && fdpValue === "fdpOne") {
    getResultDiv.innerHTML = "Result: " + resultOne[1]
  }else if (sectorValue === "sectorFour" && fdpValue === "fdpOne") {
    getResultDiv.innerHTML = "Result: " + resultOne[2]
}else if (sectorValue === "sectorFive" && fdpValue === "fdpOne") {
  getResultDiv.innerHTML = "Result: " + resultOne[3]
}else if (sectorValue === "sectorSix" && fdpValue === "fdpOne") {
  getResultDiv.innerHTML = "Result: " + resultOne[4]
}else if (sectorValue === "sectorOneTwo" && fdpValue === "fdpTwo") {
  getResultDiv.innerHTML = "Result: " + resultOne[5]
 }else if (sectorValue === "sectorThree" && fdpValue === "fdpTwo") {
  getResultDiv.innerHTML = "Result: " + resultOne[6]
 }else if (sectorValue === "sectorFour" && fdpValue === "fdpTwo") {
  getResultDiv.innerHTML = "Result: " + resultOne[7]
 }else if (sectorValue === "sectorFive" && fdpValue === "fdpTwo") {
  getResultDiv.innerHTML = "Result: " + resultOne[8]
 }else if (sectorValue === "sectorSix" && fdpValue === "fdpTwo") {
  getResultDiv.innerHTML = "Result: " + resultOne[9]
 }else if (sectorValue === "sectorOneTwo" && fdpValue === "fdpThree") {
  getResultDiv.innerHTML = "Result: " + resultOne[10]
 }else if (sectorValue === "sectorThree" && fdpValue === "fdpThree") {
  getResultDiv.innerHTML = "Result: " + resultOne[11]
 }else if (sectorValue === "sectorFour" && fdpValue === "fdpThree") {
  getResultDiv.innerHTML = "Result: " + resultOne[12]
 }else if (sectorValue === "sectorFive" && fdpValue === "fdpThree") {
  getResultDiv.innerHTML = "Result: " + resultOne[13]
 }else if (sectorValue === "sectorSix" && fdpValue === "fdpThree") {
  getResultDiv.innerHTML = "Result: " + resultOne[14]
 }else if (sectorValue === "sectorOneTwo" && fdpValue === "fdpFour") {
  getResultDiv.innerHTML = "Result: " + resultOne[15]
 }else if (sectorValue === "sectorThree" && fdpValue === "fdpFour") {
  getResultDiv.innerHTML = "Result: " + resultOne[16]
 }else if (sectorValue === "sectorFour" && fdpValue === "fdpFour") {
  getResultDiv.innerHTML = "Result: " + resultOne[17]
 }else if (sectorValue === "sectorFive" && fdpValue === "fdpFour") {
  getResultDiv.innerHTML = "Result: " + resultOne[18]
 }else if (sectorValue === "sectorSix" && fdpValue === "fdpFour") {
  getResultDiv.innerHTML = "Result: " + resultOne[19]
 }else if (sectorValue === "sectorOneTwo" && fdpValue === "fdpFive") {
  getResultDiv.innerHTML = "Result: " + resultOne[20]
 }else if (sectorValue === "sectorThree" && fdpValue === "fdpFive") {
  getResultDiv.innerHTML = "Result: " + resultOne[21]
 }else if (sectorValue === "sectorFour" && fdpValue === "fdpFive") {
  getResultDiv.innerHTML = "Result: " + resultOne[22]
 }else if (sectorValue === "sectorFive" && fdpValue === "fdpFive") {
  getResultDiv.innerHTML = "Result: " + resultOne[23]
 }else if (sectorValue === "sectorSix" && fdpValue === "fdpFive") {
  getResultDiv.innerHTML = "Result: " + resultOne[24]
 }else if (sectorValue === "sectorOneTwo" && fdpValue === "fdpSix") {
  getResultDiv.innerHTML = "Result: " + resultOne[25]
 }else if (sectorValue === "sectorThree" && fdpValue === "fdpSix") {
  getResultDiv.innerHTML = "Result: " + resultOne[26]
 }else if (sectorValue === "sectorFour" && fdpValue === "fdpSix") {
  getResultDiv.innerHTML = "Result: " + resultOne[27]
 }else if (sectorValue === "sectorFive" && fdpValue === "fdpSix") {
  getResultDiv.innerHTML = "Result: " + resultOne[28]
 }else if (sectorValue === "sectorSix" && fdpValue === "fdpSix") {
  getResultDiv.innerHTML = "Result: " + resultOne[29]
 }else if (sectorValue === "sectorOneTwo" && fdpValue === "fdpSeven") {
  getResultDiv.innerHTML = "Result: " + resultOne[30]
 }else if (sectorValue === "sectorThree" && fdpValue === "fdpSeven") {
  getResultDiv.innerHTML = "Result: " + resultOne[31]
 }else if (sectorValue === "sectorFour" && fdpValue === "fdpSeven") {
  getResultDiv.innerHTML = "Result: " + resultOne[32]
 }else if (sectorValue === "sectorFive" && fdpValue === "fdpSeven") {
  getResultDiv.innerHTML = "Result: " + resultOne[33]
 }else if (sectorValue === "sectorSix" && fdpValue === "fdpSeven") {
  getResultDiv.innerHTML = "Result: " + resultOne[34]
 }else if (sectorValue === "sectorOneTwo" && fdpValue === "fdpEight") {
  getResultDiv.innerHTML = "Result: " + resultOne[35]
 }else if (sectorValue === "sectorThree" && fdpValue === "fdpEight") {
  getResultDiv.innerHTML = "Result: " + resultOne[36]
 }else if (sectorValue === "sectorFour" && fdpValue === "fdpEight") {
  getResultDiv.innerHTML = "Result: " + resultOne[37]
 }else if (sectorValue === "sectorFive" && fdpValue === "fdpEight") {
  getResultDiv.innerHTML = "Result: " + resultOne[38]
 }else if (sectorValue === "sectorSix" && fdpValue === "fdpEight") {
  getResultDiv.innerHTML = "Result: " + resultOne[39]
 }else if (sectorValue === "sectorOneTwo" && fdpValue === "fdpNine") {
  getResultDiv.innerHTML = "Result: " + resultOne[40]
 }else if (sectorValue === "sectorThree" && fdpValue === "fdpNine") {
  getResultDiv.innerHTML = "Result: " + resultOne[41]
 }else if (sectorValue === "sectorFour" && fdpValue === "fdpNine") {
  getResultDiv.innerHTML = "Result: " + resultOne[42]
 }else if (sectorValue === "sectorFive" && fdpValue === "fdpNine") {
  getResultDiv.innerHTML = "Result: " + resultOne[43]
 }else if (sectorValue === "sectorSix" && fdpValue === "fdpNine") {
  getResultDiv.innerHTML = "Result: " + resultOne[44]
 }else if (sectorValue === "sectorOneTwo" && fdpValue === "fdpTen") {
  getResultDiv.innerHTML = "Result: " + resultOne[45]
 }else if (sectorValue === "sectorThree" && fdpValue === "fdpTen") {
  getResultDiv.innerHTML = "Result: " + resultOne[46]
 }else if (sectorValue === "sectorFour" && fdpValue === "fdpTen") {
  getResultDiv.innerHTML = "Result: " + resultOne[47]
 }else if (sectorValue === "sectorFive" && fdpValue === "fdpTen") {
  getResultDiv.innerHTML = "Result: " + resultOne[48]
 }else if (sectorValue === "sectorSix" && fdpValue === "fdpTen") {
  getResultDiv.innerHTML = "Result: " + resultOne[49]
 }else if (sectorValue === "sectorOneTwo" && fdpValue === "fdpEleven") {
  getResultDiv.innerHTML = "Result: " + resultOne[50]
 }else if (sectorValue === "sectorThree" && fdpValue === "fdpEleven") {
  getResultDiv.innerHTML = "Result: " + resultOne[51]
 }else if (sectorValue === "sectorFour" && fdpValue === "fdpEleven") {
  getResultDiv.innerHTML = "Result: " + resultOne[52]
 }else if (sectorValue === "sectorFive" && fdpValue === "fdpEleven") {
  getResultDiv.innerHTML = "Result: " + resultOne[53]
 }else if (sectorValue === "sectorSix" && fdpValue === "fdpEleven") {
  getResultDiv.innerHTML = "Result: " + resultOne[54]
 }else if (sectorValue === "sectorOneTwo" && fdpValue === "fdpTwelve") {
  getResultDiv.innerHTML = "Result: " + resultOne[55]
 }else if (sectorValue === "sectorThree" && fdpValue === "fdpTwelve") {
  getResultDiv.innerHTML = "Result: " + resultOne[56]
 }else if (sectorValue === "sectorFour" && fdpValue === "fdpTwelve") {
  getResultDiv.innerHTML = "Result: " + resultOne[57]
 }else if (sectorValue === "sectorFive" && fdpValue === "fdpTwelve") {
  getResultDiv.innerHTML = "Result: " + resultOne[58]
 }else if (sectorValue === "sectorSix" && fdpValue === "fdpTwelve") {
  getResultDiv.innerHTML = "Result: " + resultOne[59]
 }else if (sectorValue === "sectorOneTwo" && fdpValue === "fdpThirteen") {
  getResultDiv.innerHTML = "Result: " + resultOne[60]
 }else if (sectorValue === "sectorThree" && fdpValue === "fdpThirteen") {
  getResultDiv.innerHTML = "Result: " + resultOne[61]
 }else if (sectorValue === "sectorFour" && fdpValue === "fdpThirteen") {
  getResultDiv.innerHTML = "Result: " + resultOne[62]
 }else if (sectorValue === "sectorFive" && fdpValue === "fdpThirteen") {
  getResultDiv.innerHTML = "Result: " + resultOne[63]
 }else if (sectorValue === "sectorSix" && fdpValue === "fdpThirteen") {
  getResultDiv.innerHTML = "Result: " + resultOne[64]
 }*/
}

let timeSelection = document.getElementById("time");
timeSelection.length = 0;

let defaultOption = document.createElement("option");
defaultOption.text = "Check-in time";
timeSelection.add(defaultOption);
timeSelection.selectedIndex = 0;

fetch("/script/time.json").then(function(response) {
  response.json().then(function(data) {
    let option;

    for (let i = 0; i < data.length; i++) {
      option = document.createElement("option");
      option.text = data[i].time;
      timeSelection.add(option);
    }
  });
});
// alert msg
alert = () => {
  swal({
    title: "User guide",
    text:
    "1. First two selectors (TIME and SECTORS) helps you to find out your Max FDP\n(chose your check-in time and number of sectors)\n2. 3rd selector (Check-in time) helps you to select your exact check-in time\n(won't work if you not select first two selectors)\n3. Extension buttons (Extension +1h and Extension +2h)\n(add 1 or 2 hours to FDP and Duty time)\n4. Installation\n(To install App on your device, open browser menu and save web page as application to Home screen)"
  });
};