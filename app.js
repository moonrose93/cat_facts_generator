const btnEl = document.getElementById("btn");
const catFactTxt = document.getElementById("fact");
const catImage = document.getElementById("image");

const catImagesApi = "https://api.thecatapi.com/v1/images/search";

btnEl.addEventListener("click", async () => {
  catFactTxt.innerHTML = "Loading...";
  btnEl.disabled = true;
  catImage.src = "spinner.svg";

  try {
    // Fetch the cat fact first
    const responseFact = await fetch("https://catfact.ninja/fact");
    const dataFact = await responseFact.json();
    catFactTxt.innerHTML = dataFact.fact;

    // Fetch the cat images
    const responseImages = await fetch("https://api.thecatapi.com/v1/images/search");
    const dataImages = await responseImages.json();
    console.log(dataImages);
    // Assuming you want to display the first image from the fetched images
    catImage.src = dataImages[0].url;

  } catch (error) {
    console.error("Error fetching data:", error);
    catFactTxt.innerHTML = "Error fetching data.";
  } finally {
    btnEl.disabled = false;
  }
});



