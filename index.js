document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');
    const logoutBtn = document.getElementById('logout-btn');
  
    signupForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const username = document.getElementById('signup-username').value;
      const password = document.getElementById('signup-password').value;
      localStorage.setItem('user', JSON.stringify({ username, password }));
      alert('Sign up successful!');
    });
  
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const username = document.getElementById('login-username').value;
      const password = document.getElementById('login-password').value;
      const storedUser = JSON.parse(localStorage.getItem('user'));
  
      if (storedUser && username === storedUser.username && password === storedUser.password) {
        alert('Login successful!');
        loginForm.reset();
        showLogoutButton();
        redirectToHomepage(); // Redirect to the homepage after successful login
      } else {
        alert('Invalid credentials. Please try again.');
      }
    });
  
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('user');
      hideLogoutButton();
      alert('Logout successful!');
    });
  
    function showLogoutButton() {
      loginForm.style.display = 'none';
      signupForm.style.display = 'none';
      logoutBtn.style.display = 'block';
    }
  
    function hideLogoutButton() {
      logoutBtn.style.display = 'none';
      loginForm.style.display = 'block';
      signupForm.style.display = 'block';
    }
  
    function redirectToHomepage() {
      // Replace 'homepage.html' with the actual URL of your homepage
      window.open('./home-page/home-page.html', '_self');
    }
  
    // Check if a user is logged in (if their data is in local storage)
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      showLogoutButton();
    }
  });
  