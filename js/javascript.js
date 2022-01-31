class Animal {
  constructor(spicies, name, country, color, imgurl) {
    this.spicies = spicies;
    this.name = name;
    this.country = country;
    this.color = color;
    this.imgurl = imgurl;
  }
  feedAnimal() {
    console.log(this.name, "trenger mere mat");
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


AnimalOne.feedAnimal();

var animalText = document.getElementById("animalone-spicies");
animalText.innerHTML = AnimalOne.spicies;

var animalText = document.getElementById("animalone-name");
animalText.innerHTML = AnimalOne.name;

var animalText = document.getElementById("animalone-country");
animalText.innerHTML = AnimalOne.country;

var animalText = document.getElementById("animalone-color");
animalText.innerHTML = AnimalOne.color;

