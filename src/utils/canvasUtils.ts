import html2canvas from 'html2canvas';

export function downloadCanvasAsPNG(canvasName: string){
    const canvasElement = document.getElementById(canvasName);
    const canvas: HTMLCanvasElement | null = <HTMLCanvasElement | null>canvasElement;
    if(!canvas) return null;
    // Convert the canvas content to a data URL
    const dataURL = canvas.toDataURL("image/png");
    return dataURL
}

// export function captureDivAsPNG(divId: string) {
//     const divToCapture: any = document.getElementById(divId);
//     console.log("capturing div", divToCapture)
  
//     if (!divToCapture) {
//       console.error(`Element with ID "${divId}" not found.`);
//       return null;
//     }
  
//     // Create a canvas element
//     const canvas = document.createElement("canvas");
//     canvas.width = divToCapture.clientWidth;
//     canvas.height = divToCapture.clientHeight;
//     const context: any = canvas.getContext("2d");
//     if (!context) {
//       console.error("Canvas 2D context is not supported.");
//       return null;
//     }

//     context.fillStyle = "#ffffff"; // Set background color
//     context.fillRect(0, 0, canvas.width, canvas.height);
//     const divHTML = new XMLSerializer().serializeToString(divToCapture);
//     const img = new Image();
//     img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(divHTML)));
//     img.onload = function () {
//       console.log("came here tooo")
//       context.drawImage(img, 0, 0);
//       // Convert the canvas to a data URL
//       const dataURL = canvas.toDataURL("image/png");
//       console.log("PNG Data URL:", dataURL);
  
//       // To display or save the image, you can use this data URL as the source of an image element or trigger a download.
//     };
//     return 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(divHTML)))

//   }


export function captureDivAsPNG(divId: string): void {
  const divToCapture = document.getElementById(divId);

  if (!divToCapture) {
    console.error(`Element with ID "${divId}" not found.`);
    return;
  }

  html2canvas(divToCapture).then((canvas) => {
    // Convert the canvas to a data URL
    const dataURL = canvas.toDataURL('image/png');

    // Create an anchor element for download
    const a = document.createElement('a');
    a.href = dataURL;
    a.download = 'captured-image.png';
    a.innerText = 'Download PNG';
    a.addEventListener('click', () => a.remove());
    console.log(dataURL);
    // Trigger a click event on the anchor to start the download
    a.click();
  });
}
