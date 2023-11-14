const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d409e940e0msh74d172f987d48fap118abajsnf45b7fa74d4f",
    "X-RapidAPI-Host": "youtube-search-results.p.rapidapi.com",
  },
};

const userInput = document.querySelector("input");
const btn = document.querySelector("button");

let params = "";
const callParams = () => {
  params = userInput.value;
  fetch(
    `https://youtube-search-results.p.rapidapi.com/youtube-search/?q=${params}`,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      // for (let i = 0; i < data.videos.length; i++) {
      //   let links = data.videos[i].link;
      //   console.log(links);
      // }
      let output = "";
      data.videos.map((video) => {
        // console.log(video.title);
        // console.log(video.link);
        // console.log(video.thumbnail);

        output += `
    
        <a href="${video.link}" target="_blank">
          <img src="${video.thumbnail}"/>
          <h3>${video.title}</h3>
        </a>
        
        `;
      });
      document.querySelector(".result").innerHTML = output;
    })
    .catch((err) => console.error(err));
  userInput.value = "";
};

btn.addEventListener("click", callParams);
