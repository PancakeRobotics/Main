// Honeycomb background
const svgNS = "http://www.w3.org/2000/svg";
const svg = document.getElementById("honeySvg");
svg.setAttribute("width", "100%");
svg.setAttribute("height", "100%");

const radius = 45;
const hexWidth = 2 * radius;
const hexHeight = Math.sqrt(3) * radius;

function createHex(x, y) {
  const points = [];
  for (let i = 0; i < 6; i++) {
    const angle = Math.PI / 180 * (60 * i);
    points.push(`${x + radius * Math.cos(angle)},${y + radius * Math.sin(angle)}`);
  }
  const polygon = document.createElementNS(svgNS, "polygon");
  polygon.setAttribute("points", points.join(" "));
  polygon.setAttribute("class", "hex");
  return polygon;
}

function drawHexGrid() {
  while (svg.firstChild) svg.removeChild(svg.firstChild);
  const cols = Math.ceil(window.innerWidth / (hexWidth * 0.75)) + 4;
  const rows = Math.ceil(window.innerHeight / hexHeight) + 4;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = col * hexWidth * 0.75;
      const y = row * hexHeight + (col % 2 ? hexHeight / 2 : 0);
      svg.appendChild(createHex(x, y));
    }
  }
}
drawHexGrid();
window.addEventListener('resize', drawHexGrid);




// Nav toggle
const header = document.querySelector('header');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = navMenu.querySelectorAll('a');

const startTopDesktop = 120; // desktop initial
const endTopDesktop = 16;    // desktop final
const startTopMobile = 140;  // mobile initial
const endTopMobile = 16;     // mobile final

// Scroll-based top animation
function updateNavPosition() {
  const scrollY = window.scrollY;
  const isMobile = window.innerWidth <= 768;

  const startTop = isMobile ? startTopMobile : startTopDesktop;
  const endTop = isMobile ? endTopMobile : endTopDesktop;
  const headerHeight = header.offsetHeight;

  const t = Math.min(Math.max(scrollY / headerHeight, 0), 1);
  navToggle.style.top = startTop - (startTop - endTop) * t + "px";
}

// Initialize
updateNavPosition();

// Update on scroll and resize
window.addEventListener('scroll', updateNavPosition);
window.addEventListener('resize', updateNavPosition);

// Nav toggle functionality
navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close nav when a link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
  });
});
