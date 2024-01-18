document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('dark-mode-toggle');
  const body = document.body;

  // Attach the click event listener to the toggle button
  toggleButton.addEventListener('click', toggleDarkMode);

  // Toggle dark mode and save the preference to a cookie
  function toggleDarkMode() {
      body.classList.toggle('dark-mode');
      const isDarkMode = body.classList.contains('dark-mode');
      setCookie('darkMode', isDarkMode);
  }

  // Function to set a cookie with a specified name, value, and expiration time
  function setCookie(name, value, days = 365) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      const expires = `expires=${date.toUTCString()}`;
      document.cookie = `${name}=${value};${expires};path=/`;
  }

  function getCookie(name) {
      const cookieName = `${name}=`;
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
          let cookie = cookies[i].trim();
          if (cookie.indexOf(cookieName) === 0) {
              return cookie.substring(cookieName.length, cookie.length);
          }
      }
      return '';
  }

  // Apply dark mode based on the stored cookie immediately on page load
  const storedPreference = getCookie('darkMode');
  if (storedPreference === 'true') {
      body.classList.add('dark-mode');
  }
});