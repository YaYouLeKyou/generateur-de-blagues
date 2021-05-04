generateJoke();

function generateJoke() {
  //API

  const request = new XMLHttpRequest();

  request.open("GET", "https://official-joke-api.appspot.com/random_ten", true);
  request.onload = function () {
    const data = JSON.parse(this.response);

    //pick a random joke
    const item = data[Math.floor(Math.random() * data.length)];
    console.log(item);

    document.getElementById("joke").innerHTML = `${
      item.setup + " <br>" + item.punchline
    }`;
  };

  request.send();
}
