var loader = document.getElementById("preloader");

  window.addEventListener("load", function() {
    loader.style.display = "none";
  });

  
  document.getElementById('profile').addEventListener('click', function() {
    // Open the new page in a new window
    window.open('../profile/pofile.html', '_self');
});