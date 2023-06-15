
  const captureScreenshot = () => {
    navigator.mediaDevices
      .getDisplayMedia({ video: true })
      .then((stream) => {
        const videoTrack = stream.getVideoTracks()[0];
        const imageCapture = new ImageCapture(videoTrack);

        imageCapture
          .grabFrame()
          .then((imageBitmap) => {
            const canvas = document.createElement("canvas");
            canvas.width = imageBitmap.width;
            canvas.height = imageBitmap.height;

            const context = canvas.getContext("2d");
            context.drawImage(imageBitmap, 0, 0);

            const screenshot = canvas.toDataURL("image/png");
            takeScreenshot(screenshot);
            var image = new Image();

            image.src = screenshot;
            console.log("screenshot", image);

            setShow(true);
            // Do something with the screenshot, such as displaying it or sending it to a server
          })
          .catch((error) => {
            console.error("Error grabbing frame:", error);
          })
          .finally(() => {
            videoTrack.stop();
          });
      })
      .catch((error) => {
        console.error("Error accessing screen capture:", error);
      });
  };
