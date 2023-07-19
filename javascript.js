const apiKey = 'AIzaSyA6K492K_D_9u5sxROWzeX2eZcz7AsYZ8Y';

var randomNum = Math.floor(Math.random() * 20);
console.log(randomNum);

// Function to fetch a video about calculus and embed it into the website
function fetchAndEmbedCalculusVideo() {
  const apiUrl = 'https://youtube.googleapis.com/youtube/v3/search';
  const params = {
    key: apiKey,
    part: 'snippet',
    q: 'calculus',
    type: 'video',
    maxResults: 100,
  };

  const url = new URL(apiUrl);
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data.items.length);
      const videoId = data.items[randomNum].id.videoId;
      console.log(data);
      const videoUrl = `https://www.youtube.com/embed/${videoId}`;
      const embedHtml = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
      document.getElementById('videoContainer').innerHTML = embedHtml;
    })
    .catch(error => {
      console.error('Error fetching video:', error);
    });
}

// Call the function to fetch and embed the calculus video
fetchAndEmbedCalculusVideo();


