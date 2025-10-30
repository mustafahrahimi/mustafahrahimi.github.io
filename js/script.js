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

  