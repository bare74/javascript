class Animal {
  constructor(spicies, name, country, color, imgurl) {
    this.spicies = spicies;
    this.name = name;
    this.country = country;
    this.color = color;
    this.imgurl = imgurl;
  }
  feedAnimal() {
    console.log(this.name, "is now eating");
  }
}

const AnimalOne = new Animal(
  "Lion",
  "Panthera leo",
  "Afrika",
  "Brun",
  "https://www.allkunne.no/prod_images/doc_10067_8.jpg"
);
const AnimalTwo = new Animal(
  "Fugl",
  "Lerke",
  "Norge",
  "grå",
  "https://media.snl.no/media/44525/standard_compressed_lerke_sanglerke.jpg"
);
console.log(AnimalOne.spicies);
console.log(AnimalOne.name);
console.log(AnimalOne.country);
console.log(AnimalTwo.color);
console.log(AnimalTwo.imgurl);

var animalText = document.getElementById("animalone-spicies");
animalText.innerHTML = AnimalOne.spicies;

var animalText = document.getElementById("animalone-name");
animalText.innerHTML = AnimalOne.name;

var animalText = document.getElementById("animalone-country");
animalText.innerHTML = AnimalOne.country;

var animalText = document.getElementById("animalone-color");
animalText.innerHTML = AnimalOne.color;

var img = new Image(300);
var div = document.getElementById("animalone-img");

img.onload = function () {
  div.appendChild(img);
};

img.src = AnimalOne.imgurl;

var animalText = document.getElementById("animaltwo-spicies");
animalText.innerHTML = AnimalTwo.spicies;

var animalText = document.getElementById("animaltwo-name");
animalText.innerHTML = AnimalTwo.name;

var animalText = document.getElementById("animaltwo-country");
animalText.innerHTML = AnimalTwo.country;

var animalText = document.getElementById("animaltwo-color");
animalText.innerHTML = AnimalTwo.color;

var img1 = new Image(300);
var div1 = document.getElementById("animaltwo-img");

img1.onload = function () {
  div1.appendChild(img1);
};

img1.src = AnimalTwo.imgurl;

function myFunction() {
  AnimalOne.feedAnimal();
}

function myFunction1() {
  AnimalTwo.feedAnimal();
}
