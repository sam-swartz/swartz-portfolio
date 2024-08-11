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


function createRandomDotsSvg() {
    const svgNamespace = "http://www.w3.org/2000/svg";
    const svgElement = document.createElementNS(svgNamespace, "svg");
    const width = window.innerWidth;
    const height = window.innerHeight;

    svgElement.setAttribute("width", width);
    svgElement.setAttribute("height", height);
    svgElement.setAttribute("viewBox", `0 0 ${width} ${height}`);
    svgElement.setAttribute("style", "position:absolute; top:0; left:0;");

    const numberOfDots = 100; // Adjust this to increase/decrease the number of dots

    for (let i = 0; i < numberOfDots; i++) {
        const dot = document.createElementNS(svgNamespace, "circle");
        const randomX = Math.random() * width;
        const randomY = Math.random() * height;
        const randomSize = Math.random() * 3 + 1; // Dot sizes between 1 and 4

        dot.setAttribute("cx", randomX);
        dot.setAttribute("cy", randomY);
        dot.setAttribute("r", randomSize);
        dot.setAttribute("fill", "#00ff00"); // Change to your desired dot color
        dot.setAttribute("class", "space_item_primary"); // Adding the class here

        svgElement.appendChild(dot);
    }

    return svgElement;
}

document.addEventListener("DOMContentLoaded", () => {
    const svgContainer = document.getElementById("svg-container");
    const svg = createRandomDotsSvg();
    svgContainer.appendChild(svg);

    // Re-generate SVG on window resize to fit new dimensions
    window.addEventListener('resize', () => {
        svgContainer.innerHTML = '';
        const resizedSvg = createRandomDotsSvg();
        svgContainer.appendChild(resizedSvg);
    });
});