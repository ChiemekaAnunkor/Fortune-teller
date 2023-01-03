const fortune = [
  "A beautiful, smart, and loving person will be coming into your life",
  "A dubious friend may be an enemy in camouflage",
  "A faithful friend is a strong defense",
  "A feather in the hand is better than a bird in the air",
  "A fresh start will put you on your way        ",
];
module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },
  getFortune: (req, res) => {
    let randomIndex = Math.floor(Math.random() * fortune.length);
    let randomFortune = fortune[randomIndex];

    res.status(200).send(randomFortune);
  },
  addFortune: (req, res) => {
    const addFortune = req.body.value;
    fortune.push(addFortune);
    console.log(addFortune)
    res.status(200).send(addFortune);
  },
  updateFortune: (req, res) => {
    console.log(fortune);
    const addFortune = req.body.fortune;
    const indexFortune = req.body.index;

    fortune.splice(indexFortune, 1, addFortune);
    console.log(fortune);
    res.status(200).send(addFortune);
  },
  deleteFortune: (req, res) => {
    let randomIndex = Math.floor(Math.random() * fortune.length);
    let randomFortune = fortune[randomIndex];
    // compair first console.log with the second console.log
    console.log(fortune);
    fortune.splice(randomIndex, 1);
    console.log(fortune);
    res.status(200).send(randomFortune);
  },
};
