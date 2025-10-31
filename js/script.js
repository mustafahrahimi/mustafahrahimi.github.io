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

document.addEventListener("DOMContentLoaded", () => {
  const name = document.querySelector(".info h1");
  name.addEventListener("animationend", (e) => {
    if (e.animationName === "typing") {
      name.classList.add("finished");
    }
  });
});

  