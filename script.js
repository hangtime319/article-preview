const btn_share = document.querySelector(".share");
const btn_shareMedia = document.querySelector(".social-media picture img")
const user = document.querySelector(".content-user")
const socialMedia = document.querySelector(".social-media");

function shareSocialMedia() {
    var screenSize = window.screen.width;
    socialMedia.classList.toggle("display-none");
    
    if (screenSize > 376) {
        btn_shareMedia.classList.add("display-none");
    }
}

btn_share.addEventListener("click", shareSocialMedia);
btn_shareMedia.addEventListener("click", shareSocialMedia);

