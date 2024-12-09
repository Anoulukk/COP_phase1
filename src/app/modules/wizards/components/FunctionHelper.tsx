export const handleDownload = (data: any) => {
    if (!data) {
      console.log("No file found in localStorage for the specified key.");
      return;
    }
  
    // Remove Base64 prefix if it exists
    const base64Data = data.replace(/^data:.*;base64,/, '');
  
    try {
      // Convert Base64 string to a Blob
      const binaryData = atob(base64Data);
      const byteArray = Uint8Array.from(binaryData, char => char.charCodeAt(0));
      const blob = new Blob([byteArray], { type: data.match(/^data:([^;]+);base64,/)?.[1] }); // Adjust MIME type as needed
  
      // Create a download link
      const url = URL.createObjectURL(blob);
      console.log(url);
      const link = document.createElement('a');
      link.href = url;
      link.target = "_blank";
    //   link.download = fileName || 'download.png'; // Provide a default name if fileName is empty
      document.body.appendChild(link);
      link.click();
  
      // Cleanup
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error decoding Base64 string:", error);
    }
  };

  export function getBase64(file:any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        resolve({
          base64: reader.result,
          name: file.name  // Store the file name along with the base64 data
        });
      };
      reader.onerror = reject;
    });
  }