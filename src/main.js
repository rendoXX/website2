function downloadFile(fileName) {
    const folderPath = "/files/";
    const fileUrl = `${folderPath}${fileName}.zip`;

    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = `${fileName}.zip`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
