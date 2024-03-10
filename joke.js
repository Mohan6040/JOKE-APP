const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");

// API URL for fetching jokes
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

// Function to fetch and display a joke
let getJoke = () => {
  // Remove fade class to display the loading state
  jokeContainer.classList.remove("fade");

  // Fetch data from the joke API
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch joke");
      }
      return response.json();
    })
    .then((data) => {
      // Check if the joke is available
      if (data.joke) {
        jokeContainer.textContent = `${data.joke}`;
        jokeContainer.classList.add("fade");
      } else {
        // Handle the case when the joke is not available
        jokeContainer.textContent = "Oops! No joke available.";
      }
    })
    .catch((error) => {
      // Handle fetch errors
      console.error("Error fetching joke:", error);
      jokeContainer.textContent = "Error fetching joke. Please try again.";
    });
};

// Event listener for the button click to fetch a new joke
btn.addEventListener("click", getJoke);

// Initial joke fetch when the page loads
getJoke();
