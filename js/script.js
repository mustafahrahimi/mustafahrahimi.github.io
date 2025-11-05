function openFile(filePath) {
    window.open(filePath, '_blank');
}

function downloadResume() {
    const filePath = 'docs/CV.pdf';
    const link = document.createElement('a');
    link.href = filePath;
    link.download = 'Mustafah Rahimi CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

window.addEventListener('load', () => {
    const span = document.getElementById('open-btn');

    setTimeout(() => {
        span.classList.add('shake');

        span.addEventListener('animationend', () => {
            span.classList.remove('shake');
        });
    }, 3000);
});

document.addEventListener("DOMContentLoaded", () => {
  const name = document.querySelector(".info h1");
  name.addEventListener("animationend", (e) => {
    if (e.animationName === "typing") {
      name.classList.add("finished");
    }
  });
});

if (window.innerWidth > 1024) { 
  const img = document.getElementById('scrollImage');
  window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      img.style.transform = `translateY(${scrollY * 0.8}px)`;
  });
}

function toggleDropdown() {
    const dropdown = document.getElementById("dropdownMenu");
    dropdown.classList.toggle("show");
}

window.addEventListener("click", function(e) {
    if (!e.target.closest('.download-container')) {
        document.getElementById("dropdownMenu").classList.remove("show");
    }
});
  