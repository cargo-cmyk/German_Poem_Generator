function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "a3fbf9429t7a57989ac706ao0d0b154f";
  let context =
    "You are a creative poem expert who writes witty and funny German poems. Generate a 4-line poem based on the user's topic. Follow these rules strictly: 1) Each line must rhyme properly and make logical sense. 2) Use <br /> to separate each line. 3) Cleverly incorporate apples into the poem. 4) Do not include a title. 5) Add two line breaks before the signature. 6) Sign with <strong>I love Apples</strong> at the very end. 7) Return only the poem with <br /> tags - no backticks, no code blocks, no other HTML formatting.";
  let prompt = `User instructions: Generate a German poem about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a German poem about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);
}

function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
