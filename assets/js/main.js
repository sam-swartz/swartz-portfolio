document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('theme-toggle');
    const slider = document.querySelector('.switch .slider');
    const html = document.documentElement;

    // Check local storage for saved theme preference
    if (localStorage.getItem('theme') === 'dark') {
        html.setAttribute('themeMode', 'dark');
        toggle.checked = true;
        slider.classList.add('on');
    } else {
        html.setAttribute('themeMode', 'light');
        slider.classList.remove('on');
    }

    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            html.setAttribute('themeMode', 'dark');
            localStorage.setItem('theme', 'dark');
            slider.classList.add('on');
        } else {
            html.setAttribute('themeMode', 'light');
            localStorage.setItem('theme', 'light');
            slider.classList.remove('on');
        }
    });
});