const imgWrapper = document.getElementById("imageWrapper");
const eyeIcon = document.getElementById("eyeIcon");

imgWrapper.addEventListener("click", () => {
    eyeIcon.style.opacity = 1;
    document.body.style.backgroundColor = "aqua";
});