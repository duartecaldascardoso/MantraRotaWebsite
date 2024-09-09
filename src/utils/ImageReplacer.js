const ImageReplacer = {
    imageRepoPath: "docs/assets/",
    imageList: ["band.jpeg", "band2.jpeg", "band3.jpeg"],
    currentIndex: 0,

    start: function () {
        const imgElement = document.getElementById("mainImage"); 

        if (!imgElement) {
            console.error("Image element not found");
            return;
        }

        // Self called function to update the image according to the interval and image array 
        const updateImage = () => {
            this.currentIndex = (this.currentIndex + 1) % this.imageList.length;
            imgElement.src = this.imageRepoPath + this.imageList[this.currentIndex];
        };

        updateImage();

        setInterval(updateImage, 15000);
    }
};

export default ImageReplacer;
