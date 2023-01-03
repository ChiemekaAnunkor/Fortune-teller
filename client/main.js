const complimentBtn = document.getElementById("complimentButton");
const fortuneButton = document.getElementById("fortuneButton");
const fortuneSubmit = document.getElementById("fortuneSubmit");
const deleteButton = document.getElementById("deleteButton");

const updateSubmit = document.getElementById("updateSubmit");

const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const getFortune = () => {
  axios.get("http://localhost:4000/api/fortune/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const postFortune = () => {
  let inputs = document.getElementById("fortune").value;

  axios.post("http://localhost:4000/api/fortune/", { value: inputs }).then((res) => {
    const data = res.data;
  });
  console.log(inputs);
};

const updateFortune = () => {
  let inputs = document.getElementById("fortuneupdate").value;
  let index = document.getElementById("index").value;
  let update = { fortune: inputs, index: index };
  console.log(update);

  axios.put("http://localhost:4000/api/fortune/", update).then((res) => {
    const data = res.data;
    alert("updated: " + data);
  });
  console.log(inputs);
};
const deleteFortune = () => {
  axios.delete("http://localhost:4000/api/fortune/").then((res) => {
    const data = res.data;
    alert("we deleted:" + data);
  });
};

complimentBtn.addEventListener("click", getCompliment);
fortuneButton.addEventListener("click", getFortune);
fortuneSubmit.addEventListener("click", postFortune);
deleteButton.addEventListener("click", deleteFortune);
updateSubmit.addEventListener("click", updateFortune);
