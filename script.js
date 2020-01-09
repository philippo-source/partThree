document.querySelector('header').addEventListener('click', handleHeaderClick);
document.getElementById("io").addEventListener("click", gehAn);
document.getElementById("io2").addEventListener("click", gehAus);





function handleHeaderClick(event) {

    console.log(event);

    switch (event.target.id) {

        case 'btnMusik':
            createMusikDivs();
            break;

        case 'btnMaps':
            createMapsDivs();
            break;

        case 'btnLock':
            createLockDivs();
            break;
        case 'btnCarData':
            createCarDataDivs();
            break;
        
    }

}



function createMapsDivs(){

  let mainElement = document.querySelector('main');

  mainElement.innerHTML = '';

  var div = document.createElement("div");
  div.setAttribute('style','text-align:center');
  mainElement.appendChild(div);

  var ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1477.9707863676097!2d9.654599472690187!3d48.69698507388374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799a3e836d812a3%3A0xbe38af117da25959!2sHochschule%20Esslingen!5e0!3m2!1sen!2sde!4v1577050103466!5m2!1sen!2sde");
    ifrm.style.width = "600px";
    ifrm.style.height = "400px";

  div.appendChild(ifrm);

}

function logger(){
  let mainElement = document.querySelector('main');

  mainElement.innerHTML = '';

  var log = document.createElement("div");
  log.setAttribute('id','log');
   mainElement.appendChild(log);

  if (!console) {
    console = {};
}
var old = console.log;
var logger = document.getElementById('log');
console.log = function (message) {
    if (typeof message == 'object') {
        logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + '<br />';
    } else {
        logger.innerHTML += message + '<br />';
    }
}
}



function showPosition(position) {

   var newCarDataDiv2_2 = document.getElementById("CarData2").children[1]

  newCarDataDiv2_2.innerText = "Lat: " + position.coords.latitude +
  ", Long: " + position.coords.longitude;
}


//setTimeout (createCarDataDivs, 1000);

async function createCarDataDivs() {


    let mainElement = document.querySelector('main');

    mainElement.innerHTML = '';



      const response = await fetch('http://169.254.65.26:5000/status');
      const myJson = await response.json();
      console.log(JSON.stringify(myJson));



    var newCarDataDiv1 = document.createElement("div");
    var newCarDataDiv2 = document.createElement("div");
    var newCarDataDiv3 = document.createElement("div");
    var newCarDataDiv4 = document.createElement("div");
    var newCarDataDiv5 = document.createElement("div");
    var newCarDataDiv6 = document.createElement("div");
    var newCarDataDiv7 = document.createElement("div");


    newCarDataDiv1.setAttribute('id', 'CarData1');
    newCarDataDiv1.setAttribute('style', 'margin: 20; display:inline-block; width:100%');
    newCarDataDiv2.setAttribute('id', 'CarData2');
    newCarDataDiv2.setAttribute('style', 'margin: 20; display:inline-block; width:100%');
    newCarDataDiv3.setAttribute('id', 'CarData3');
    newCarDataDiv3.setAttribute('style', 'margin: 20; display:inline-block; width:100%');
    newCarDataDiv4.setAttribute('id', 'CarData4');
    newCarDataDiv4.setAttribute('style', 'margin: 20; display:inline-block; width:100%');
    newCarDataDiv5.setAttribute('id', 'CarData5');
    newCarDataDiv5.setAttribute('style', 'margin: 20; display:inline-block; width:100%');
    newCarDataDiv6.setAttribute('id', 'CarData6');
    newCarDataDiv6.setAttribute('style', 'margin: 20; display:inline-block; width:100%');
    newCarDataDiv7.setAttribute('id', 'CarData7');
    newCarDataDiv7.setAttribute('style', 'margin: 20; display:inline-block; width:100%');


    mainElement.appendChild(newCarDataDiv1);
    mainElement.appendChild(newCarDataDiv2);
    mainElement.appendChild(newCarDataDiv3);
    mainElement.appendChild(newCarDataDiv4);
    mainElement.appendChild(newCarDataDiv5);
    mainElement.appendChild(newCarDataDiv6);
    mainElement.appendChild(newCarDataDiv7);

    var newCarDataDiv1_1 = document.createElement("div");
    newCarDataDiv1_1.setAttribute('style', 'width:30%; float:left');
    newCarDataDiv1_1.innerText = "Geschwindigkeit";
    var newCarDataDiv1_2 = document.createElement("div");
    newCarDataDiv1_2.innerText = Math.round(myJson.speed) + " km/h";
    document.getElementById("CarData1").appendChild(newCarDataDiv1_1);
    document.getElementById("CarData1").appendChild(newCarDataDiv1_2);



    var newCarDataDiv2_1 = document.createElement("div");
    newCarDataDiv2_1.setAttribute('style', 'width:30%; float:left');
    newCarDataDiv2_1.innerText = "Position";
    var newCarDataDiv2_2 = document.createElement("div");

    document.getElementById("CarData2").appendChild(newCarDataDiv2_1);
    document.getElementById("CarData2").appendChild(newCarDataDiv2_2);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      newCarDataDiv2_2.innerHTML = "Geolocation is not supported by this browser.";
    }



    var newCarDataDiv3_1 = document.createElement("div");
    newCarDataDiv3_1.setAttribute('style', 'width:30%; float:left');
    newCarDataDiv3_1.innerText = "Verbrauch";
    var newCarDataDiv3_2 = document.createElement("div");
    newCarDataDiv3_2.innerText = myJson.consumption + " l/100km";
    document.getElementById("CarData3").appendChild(newCarDataDiv3_1);
    document.getElementById("CarData3").appendChild(newCarDataDiv3_2);

    var newCarDataDiv4_1 = document.createElement("div");
    newCarDataDiv4_1.setAttribute('style', 'width:30%; float:left');
    newCarDataDiv4_1.innerText = "Reichweite";
    var newCarDataDiv4_2 = document.createElement("div");
    newCarDataDiv4_2.innerText = Math.round(70/myJson.consumption*100) + "km";
    document.getElementById("CarData4").appendChild(newCarDataDiv4_1);
    document.getElementById("CarData4").appendChild(newCarDataDiv4_2);

    var newCarDataDiv5_1 = document.createElement("div");
    newCarDataDiv5_1.setAttribute('style', 'width:30%; float:left');
    newCarDataDiv5_1.innerText = "Luftfeuchte";
    var newCarDataDiv5_2 = document.createElement("div");
    newCarDataDiv5_2.innerText = Math.round(myJson.humidity) + " %";
    document.getElementById("CarData5").appendChild(newCarDataDiv5_1);
    document.getElementById("CarData5").appendChild(newCarDataDiv5_2);

    var newCarDataDiv6_1 = document.createElement("div");
    newCarDataDiv6_1.setAttribute('style', 'width:30%; float:left');
    newCarDataDiv6_1.innerText = "Reifendruck";
    var newCarDataDiv6_2 = document.createElement("div");
    newCarDataDiv6_2.innerText = Math.round(myJson.pressure) + " psi";
    document.getElementById("CarData6").appendChild(newCarDataDiv6_1);
    document.getElementById("CarData6").appendChild(newCarDataDiv6_2);

    var newCarDataDiv7_1 = document.createElement("div");
    newCarDataDiv7_1.setAttribute('style', 'width:30%; float:left');
    newCarDataDiv7_1.innerText = "Temperatur";
    var newCarDataDiv7_2 = document.createElement("div");
    newCarDataDiv7_2.innerText = Math.round(myJson.temp,100) + " °C";
    document.getElementById("CarData7").appendChild(newCarDataDiv7_1);
    document.getElementById("CarData7").appendChild(newCarDataDiv7_2);




}

function createLockDivs() {

let mainElement = document.querySelector('main');

mainElement.innerHTML = '';

var newLockDiv1 = document.createElement("div");
var newLockDiv2 = document.createElement("div");
var newLockDiv3 = document.createElement("div");
var newLockDiv4 = document.createElement("div");


newLockDiv1.setAttribute('id', 'Lock1');
newLockDiv1.setAttribute('style', 'margin: 20; display:inline-block; width:100%');
newLockDiv2.setAttribute('id', 'Lock2');
newLockDiv2.setAttribute('style', 'margin: 20; display:inline-block; width:100%');
newLockDiv3.setAttribute('id', 'Lock3');
newLockDiv3.setAttribute('style', 'margin: 20; display:inline-block; width:100%');
newLockDiv4.setAttribute('id', 'Lock4');
newLockDiv4.setAttribute('style', 'margin: 20; display:inline-block; width:100%');


mainElement.appendChild(newLockDiv1);
mainElement.appendChild(newLockDiv2);
mainElement.appendChild(newLockDiv3);
mainElement.appendChild(newLockDiv4);

var newLockDiv1_1 = document.createElement("div");
newLockDiv1_1.setAttribute('style', 'width: 30%; float:left');
newLockDiv1_1.innerHTML = "Türen";
var newLockDiv1_2 = document.createElement("div");
newLockDiv1_2.setAttribute('id','ButtonBereich');
var buttonCreate = document.createElement("button");
//buttonCreate.setAttribute = ('id', 'buttonTuerAuf');
buttonCreate.innerHTML = "Auf";
var buttonCreate2 = document.createElement("button");
//buttonCreate2.setAttribute = ('id', 'buttonTuerZu');
buttonCreate2.innerHTML = "Zu";
document.getElementById("Lock1").appendChild(newLockDiv1_1);
document.getElementById("Lock1").appendChild(newLockDiv1_2);
document.getElementById("ButtonBereich").appendChild(buttonCreate);
document.getElementById("ButtonBereich").appendChild(buttonCreate2);

document.getElementById("ButtonBereich").children[0].addEventListener("click", fetchUnLock);
document.getElementById("ButtonBereich").children[1].addEventListener("click", fetchLock);

var newLockDiv2_1 = document.createElement("div");
newLockDiv2_1.setAttribute('style', 'width: 30%; float:left');
newLockDiv2_1.innerHTML = "Fenster vorne";
var newLockDiv2_2 = document.createElement("div");
newLockDiv2_2.setAttribute('id','ButtonBereichFensterVorne');
var buttonCreate3 = document.createElement("button");
//buttonCreate3.setAttribute = ('id', 'buttonFensterVorneHoch');
buttonCreate3.innerHTML = "Hoch";
var buttonCreate4 = document.createElement("button");
//buttonCreate4.setAttribute = ('id', 'buttonFensterVorneRunter');
buttonCreate4.innerHTML = "Runter";
document.getElementById("Lock2").appendChild(newLockDiv2_1);
document.getElementById("Lock2").appendChild(newLockDiv2_2);
document.getElementById("ButtonBereichFensterVorne").appendChild(buttonCreate3);
document.getElementById("ButtonBereichFensterVorne").appendChild(buttonCreate4);

document.getElementById("ButtonBereichFensterVorne").children[0].addEventListener("click", fetchUnLock);
document.getElementById("ButtonBereichFensterVorne").children[1].addEventListener("click", fetchLock);

var newLockDiv3_1 = document.createElement("div");
newLockDiv3_1.setAttribute('style', 'width: 30%; float:left');
newLockDiv3_1.innerHTML = "Fenster hinten";
var newLockDiv3_2 = document.createElement("div");
newLockDiv3_2.setAttribute('id','ButtonBereichFensterHinten');
var buttonCreate5 = document.createElement("button");
//buttonCreate5.setAttribute = ('id', 'buttonFensterHintenHoch');
buttonCreate5.innerHTML = "Hoch";
var buttonCreate6 = document.createElement("button");
//buttonCreate6.setAttribute = ('id', 'buttonFensterHintenRunter');
buttonCreate6.innerHTML = "Runter";
document.getElementById("Lock3").appendChild(newLockDiv3_1);
document.getElementById("Lock3").appendChild(newLockDiv3_2);
document.getElementById("ButtonBereichFensterHinten").appendChild(buttonCreate5);
document.getElementById("ButtonBereichFensterHinten").appendChild(buttonCreate6);

document.getElementById("ButtonBereichFensterHinten").children[0].addEventListener("click", fetchUnLock);
document.getElementById("ButtonBereichFensterHinten").children[1].addEventListener("click", fetchLock);

var newLockDiv4_1 = document.createElement("div");
newLockDiv4_1.setAttribute('style', 'width: 30%; float:left');
newLockDiv4_1.innerHTML = "Fenster gesamt";
var newLockDiv4_2 = document.createElement("div");
newLockDiv4_2.setAttribute('id','ButtonBereichFensterGesamt');
var buttonCreate7 = document.createElement("button");
//buttonCreate7.setAttribute = ('id', 'buttonFensterGesamtHoch');
buttonCreate7.innerHTML = "Hoch";
var buttonCreate8 = document.createElement("button");
//buttonCreate8.setAttribute = ('id', 'buttonFensterGesamtRunter');
buttonCreate8.innerHTML = "Runter";
document.getElementById("Lock4").appendChild(newLockDiv4_1);
document.getElementById("Lock4").appendChild(newLockDiv4_2);
document.getElementById("ButtonBereichFensterGesamt").appendChild(buttonCreate7);
document.getElementById("ButtonBereichFensterGesamt").appendChild(buttonCreate8);

document.getElementById("ButtonBereichFensterGesamt").children[0].addEventListener("click", fetchUnLock);
document.getElementById("ButtonBereichFensterGesamt").children[1].addEventListener("click", fetchLock);

}

async function createMusikDivs() {

    let mainElement = document.querySelector('main');

    mainElement.innerHTML = '';

    const response = await fetch('http://169.254.65.26:5000/music');
    const myJson = await response.json();
    console.log(JSON.stringify(myJson));


var newMusikDiv0 = document.createElement("div");
var newMusikDiv1 = document.createElement("div");
var newMusikDiv2 = document.createElement("div");
var newMusikDiv3 = document.createElement("div");

newMusikDiv0.setAttribute('id', 'musikÜberschrift');
newMusikDiv0.setAttribute('style', 'margin: 20; display:inline-block; width:100%');
newMusikDiv1.setAttribute('id', 'musik1');
newMusikDiv1.setAttribute('style', 'margin: 20; display:inline-block; width:100%');
newMusikDiv2.setAttribute('id', 'musik2');
newMusikDiv2.setAttribute('style', 'margin: 20; display:inline-block; width:100%');
newMusikDiv3.setAttribute('id', 'musik3');
newMusikDiv3.setAttribute('style', 'margin: 20; display:inline-block; width:100%');


mainElement.appendChild(newMusikDiv0);
mainElement.appendChild(newMusikDiv1);
mainElement.appendChild(newMusikDiv2);
mainElement.appendChild(newMusikDiv3);

var newMusikDiv0_1 = document.createElement("div");
newMusikDiv0_1.setAttribute('style', 'width: 30%; float:left');
newMusikDiv0_1.innerHTML = "Interpret";
var newMusikDiv0_2 = document.createElement("div");
newMusikDiv0_2.setAttribute('style', 'width: 30%; float:left');
newMusikDiv0_2.innerHTML = "Liedtitel";
document.getElementById("musikÜberschrift").appendChild(newMusikDiv0_1);
document.getElementById("musikÜberschrift").appendChild(newMusikDiv0_2);

var newMusikDiv1_1 = document.createElement("div");
newMusikDiv1_1.setAttribute('style', 'width: 30%; float:left');
newMusikDiv1_1.innerHTML = myJson[0].artist;
var newMusikDiv1_2 = document.createElement("div");
newMusikDiv1_2.setAttribute('style', 'width: 30%; float:left');
newMusikDiv1_2.innerHTML = myJson[0].title;
var newMusikDiv1_3 = document.createElement("i");
newMusikDiv1_3.setAttribute('class','fas fa-play');
newMusikDiv1_3.setAttribute('onclick','playAudio()');
var newMusikDiv1_4 = document.createElement("audio");
newMusikDiv1_4.setAttribute("id","audio1");
var newMusikDiv1_5 = document.createElement("source");
newMusikDiv1_5.setAttribute("type","audio/mp3");
newMusikDiv1_5.setAttribute("src", myJson[0].path);
var newMusikDiv1_6 = document.createElement("i");
newMusikDiv1_6.setAttribute('class','fas fa-pause');
newMusikDiv1_6.setAttribute('onclick','pauseAudio()');

document.getElementById("musik1").appendChild(newMusikDiv1_1);
document.getElementById("musik1").appendChild(newMusikDiv1_2);
document.getElementById("musik1").appendChild(newMusikDiv1_3);
document.getElementById("musik1").appendChild(newMusikDiv1_4);
document.getElementById("audio1").appendChild(newMusikDiv1_5);
document.getElementById("musik1").appendChild(newMusikDiv1_6);

var newMusikDiv2_1 = document.createElement("div");
newMusikDiv2_1.setAttribute('style', 'width: 30%; float:left');
newMusikDiv2_1.innerHTML = myJson[1].artist;
var newMusikDiv2_2 = document.createElement("div");
newMusikDiv2_2.setAttribute('style', 'width: 30%; float:left');
newMusikDiv2_2.innerHTML = myJson[1].title;
var newMusikDiv2_3 = document.createElement("i");
newMusikDiv2_3.setAttribute('class','fas fa-play');
newMusikDiv2_3.setAttribute('onclick','playAudio2()');
var newMusikDiv2_4 = document.createElement("audio");
newMusikDiv2_4.setAttribute("id","audio2");
var newMusikDiv2_5 = document.createElement("source");
newMusikDiv2_5.setAttribute("type","audio/mp3");
newMusikDiv2_5.setAttribute("src", myJson[1].path);
var newMusikDiv2_6 = document.createElement("i");
newMusikDiv2_6.setAttribute('class','fas fa-pause');
newMusikDiv2_6.setAttribute('onclick','pauseAudio2()');
document.getElementById("musik2").appendChild(newMusikDiv2_1);
document.getElementById("musik2").appendChild(newMusikDiv2_2);
document.getElementById("musik2").appendChild(newMusikDiv2_3);
document.getElementById("musik2").appendChild(newMusikDiv2_4);
document.getElementById("audio2").appendChild(newMusikDiv2_5);
document.getElementById("musik2").appendChild(newMusikDiv2_6);

var newMusikDiv3_1 = document.createElement("div");
newMusikDiv3_1.setAttribute('style', 'width: 30%; float:left');
newMusikDiv3_1.innerHTML = myJson[2].artist;
var newMusikDiv3_2 = document.createElement("div");
newMusikDiv3_2.setAttribute('style', 'width: 30%; float:left');
newMusikDiv3_2.innerHTML = myJson[2].title;
var newMusikDiv3_3 = document.createElement("i");
newMusikDiv3_3.setAttribute('class','fas fa-play');
newMusikDiv3_3.setAttribute('onclick','playAudio3()');
var newMusikDiv3_4 = document.createElement("audio");
newMusikDiv3_4.setAttribute("id","audio3");
var newMusikDiv3_5 = document.createElement("source");
newMusikDiv3_5.setAttribute("type","audio/mp3");
newMusikDiv3_5.setAttribute("src", myJson[2].path);
var newMusikDiv3_6 = document.createElement("i");
newMusikDiv3_6.setAttribute('class','fas fa-pause');
newMusikDiv3_6.setAttribute('onclick','pauseAudio3()');
document.getElementById("musik3").appendChild(newMusikDiv3_1);
document.getElementById("musik3").appendChild(newMusikDiv3_2);
document.getElementById("musik3").appendChild(newMusikDiv3_3);
document.getElementById("musik3").appendChild(newMusikDiv3_4);
document.getElementById("audio3").appendChild(newMusikDiv3_5);
document.getElementById("musik3").appendChild(newMusikDiv3_6);


}




function uhrzeit() {
var jetzt = new Date(),
    h = jetzt.getHours(),
    m = jetzt.getMinutes(),
    s = jetzt.getSeconds();
m = fuehrendeNull(m);
s = fuehrendeNull(s);
document.getElementById('uhr').innerHTML = h + ':' + m + ':' + s;
setTimeout(uhrzeit, 500);

d= jetzt.getDate();
mo= jetzt.getMonth()+1;
y = jetzt.getUTCFullYear();
d = fuehrendeNull(d);
mo = fuehrendeNull(mo);
dat = d + "." + mo +"." +y;


document.getElementById("datum").innerHTML = dat;
}

function fuehrendeNull(zahl) {
zahl = (zahl < 10 ? '0' : '' )+ zahl;
return zahl;
}



function gehAn(){
  var len = document.getElementsByTagName("button").length;
  for (var i=0; i<len; i++){
    document.getElementsByTagName("button")[i].style.display = "block";

  };
  document.getElementsByTagName("main")[0].style.display ="block";
  document.getElementById("io").style.display = "none";

  var mainElement = document.querySelector('main');
  var imgDiv = document.createElement("div");
  imgDiv.setAttribute('style', 'text-align:center');
  mainElement.appendChild(imgDiv);

  var img = document.createElement("img");
  img.setAttribute('src', 'logo.jpg');
  img.setAttribute('style', 'width:400px');
  imgDiv.appendChild(img);

  document.getElementById("io2").style.display ="block";

  document.documentElement.style
      .setProperty('--change-grid', 'a b c');
  document.documentElement.style
      .setProperty('--grid-columns', '33% 33% 33%');

}



function gehAus(){

  window.location.reload();
}

async function fetchLock() {

  const response = await fetch('http://169.254.65.26:5000/action/lock');
  const myJson = await response.json();
  console.log(JSON.stringify(myJson));

}

async function fetchUnLock() {

  const response = await fetch('http://169.254.65.26:5000/action/unlock');
  const myJson = await response.json();
  console.log(JSON.stringify(myJson));

}

function playAudio() {
  document.getElementById("audio1").play();
}
function pauseAudio(){
  document.getElementById("audio1").pause();
}
function playAudio2() {
  document.getElementById("audio2").play();
}
function pauseAudio2(){
  document.getElementById("audio2").pause();
}
function playAudio3() {
  document.getElementById("audio3").play();
}
function pauseAudio3(){
  document.getElementById("audio3").pause();
}
