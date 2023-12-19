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
    
        
          <div class="video-img">
            
               <a href="${video.link}">
                 <img src="${video.thumbnail}" class="thumbnail"/>
               </a>
                 <div class="video-content">
                    <a href="${video.channel.link}">
                      <img src="${video.channel.thumbnail}" class="channel-thumbnail"/>
                    </a>
            
                    <a href="${video.link}">
                      <h3 class="video-title">${video.title}</h3>
                      <h5 class="channel-name">${video.channel.name}</h5>
                      <h5 class="video-views">觀看次數：${video.views}次</h5>
                    </a>
                </div>
         </div>
       
        
        `;
      });
      document.querySelector(".result").innerHTML = output;
    })
    .catch((err) => console.error(err));
  userInput.value = "";
};

btn.addEventListener("click", callParams);

document.addEventListener("keydown", function (e) {
  console.log("keydown", e);
  keys[e.code] = true; //物件 物件屬性
  if (e.code === "Enter") {
    callParams();
  }
});
