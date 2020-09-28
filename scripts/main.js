const canvas = document.getElementsById("ufo-canvas");
const ctx = canvas.getContext('2d');

// auto resize 
function resize() {
  const height = window.innerHeight - 20;
  const ratio = canvas.width / canvas.height;
  const width = height * ratio;

  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px'; 
};

window.addEventListener('load', resize, false);


