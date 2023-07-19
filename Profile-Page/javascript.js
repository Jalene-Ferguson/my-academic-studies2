var loader = document.getElementById("preloader");

window.addEventListener("load", function() {
  loader.style.display = "none";
});


document.addEventListener('DOMContentLoaded', () => {
  const logoutBtn = document.getElementById('logout-btn');

  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('user');
    redirectToLoginPage();
  });

  function redirectToLoginPage() {
    // Replace 'index.html' with the actual file name and extension of your login page
    window.open('../index.html', '_self');
  }
});


// const apiKey = 'AIzaSyA6K492K_D_9u5sxROWzeX2eZcz7AsYZ8Y';


// function fetchAndEmbedCalculusVideo() {
//   const apiUrl = 'https://youtube.googleapis.com/youtube/v3/search';
//   const params = {
//     key: apiKey,
//     part: 'snippet',
//     q: 'calculus',
//     type: 'video',
//     maxResults: 1,
//   };

//   const url = new URL(apiUrl);
//   Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       const videoId = data.items[0].id.videoId;
//       const videoUrl = `https://www.youtube.com/embed/${videoId}`;
//       const embedHtml = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
//       document.getElementById('videoContainer').innerHTML = embedHtml;
//     })
//     .catch(error => {
//       console.error('Error fetching video:', error);
//     });
// }


// fetchAndEmbedCalculusVideo();


