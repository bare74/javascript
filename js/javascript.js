class Animal {
  constructor(spicies, name, country, color, imgurl) {
    this.spicies = spicies;
    this.name = name;
    this.country = country;
    this.color = color;
    this.imgurl = imgurl;
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
console.log(AnimalOne.name);
console.log(AnimalTwo.color);
console.log(AnimalOne.spicies);
console.log(AnimalTwo.imgurl);
console.log(AnimalOne.country);

