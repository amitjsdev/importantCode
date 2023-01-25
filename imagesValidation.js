<input
accept="image/png, image/jpeg"
type="file"
id="file"
onChange={(e) => {
  getImage(e);
}}
ref={inputFile}
style={{ display: "none" }}
/>

const getImage = (e) => {
    setPixelError(false);
    var file = e?.target?.files[0];
    let fileSize = file.size;
    const fileMb = fileSize / 1024 ** 2;
    if (fileMb > 2) {
      setPixelError("Size must be less than 2MB");
      return;
    }
    var img = new Image();
    img.onload = function () {
      var sizes = {
        width: this.width,
        height: this.height,
      };
      URL.revokeObjectURL(this.src);
      imageData(file, sizes);
    };
    var objectURL = URL.createObjectURL(file);
    img.src = objectURL;
  };



  const imageData = (file, size) => {
    if (size?.width <= 500 && size?.height <= 500) {
      onUpload(file, viewClicked);
      setPixelError("");
    } else {
      setPixelError("Max image size 500x500");
    }
  };


  ==============================================================================================



  <input
  className="input-file"
  name="file"
  type="file"
  onChange={fileUpload}
  title={preview ? "" : "No file chosen"}
/>


const fileUpload = (e) => {
    setImageError(false);
    var file = e?.target?.files[0];
    setFileName(e?.target?.files);
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (e) => {
      setPreview(e.target.result);
    };
  };



  ==============================================
  //upload validation in antd
  <Upload
  name="backgroundUpload"
  maxCount={1}
  defaultFileList={[
    {
      type: "cover",
      thumbUrl: userDetails?.coverImage,
    },
  ]}
  {...profile}
  beforeUpload={(file, name) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener("load", (event) => {
      const _loadedImageUrl = event.target.result;
      const image = document.createElement("img");
      image.src = _loadedImageUrl;
      const { width, height } = image;


      const isJpgOrPng =
        file.type === "image/jpeg" ||
        file.type === "image/jpg" ||
        file.type === "image/png";
      setImgBgError({
        sizeError: true,
        typeError: !isJpgOrPng,
      });
      if (file?.size <= 5000000) {
        setImgBgError({
          sizeError: true,
          sizeError: false,
        });
      } else {
        setImgBgError({
          typeError: !isJpgOrPng,
          sizeError: true,
        });
      }
      return isJpgOrPng;
    });
    setFileList([
      ...fileList,
      { url: file, key: "backgroundUpload" },
    ]);
    setFileUpload([
      ...fileUpload,
      { url: file, key: "backgroundUpload" },
    ]);
    return false;
  }}
  listType="picture"
>
  <Button icon={<UploadIcon />}>
    Upload picture
  </Button>
</Upload>