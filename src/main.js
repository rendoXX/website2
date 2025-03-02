function downloadFile(fileName) {
    const folderPath = "files/"; // Change this to your actual folder path
    const fileUrl = `${folderPath}${fileName}.zip`;

    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = `${fileName}.zip`; // Sets correct filename for the download
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}