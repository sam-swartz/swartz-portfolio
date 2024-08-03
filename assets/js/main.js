document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('theme-toggle');
    const slider = document.querySelector('.switch .slider');
    const html = document.documentElement;
    const favicon = document.getElementById('favicon');

    // Function to update favicon
    function updateFavicon(theme) {
        if (theme === 'dark') {
            favicon.setAttribute('href', './assets/icons/favicon/logo_icon-dark.png'); // URL for dark theme favicon
        } else {
            favicon.setAttribute('href', './assets/icons/favicon/logo_icon-light.png'); // URL for light theme favicon
        }
    }

    // Check local storage for saved theme preference
    if (localStorage.getItem('theme') === 'dark') {
        html.setAttribute('themeMode', 'dark');
        toggle.checked = true;
        slider.classList.add('on');
        updateFavicon('dark');
    } else {
        html.setAttribute('themeMode', 'light');
        slider.classList.remove('on');
        updateFavicon('light');
    }

    // Event listener for theme toggle
    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            html.setAttribute('themeMode', 'dark');
            localStorage.setItem('theme', 'dark');
            slider.classList.add('on');
            updateFavicon('dark');
        } else {
            html.setAttribute('themeMode', 'light');
            localStorage.setItem('theme', 'light');
            slider.classList.remove('on');
            updateFavicon('light');
        }
    });
});