function loadEvent(){

    let img1 = document.getElementById('img1');
    let img2 = document.getElementById('img2');
    let img3 = document.getElementById('img3');
    let imgArray = [img1, img2, img3];
    let count = 1;

    function changeImage(buttonId) {

        for (const item of imgArray) {
            item.classList.remove("showImg");
            item.classList.add("noImg");
        }
        if (buttonId === "leftBtn") {
            if (count < 1) {
                imgArray[2].classList.remove("noImg");
                imgArray[2].classList.add("showImg");
                count = 2;
            }
            else {
                imgArray[count].previousElementSibling.classList.remove("noImg");
                imgArray[count].previousElementSibling.classList.add("showImg");
                count--;
            }
        }
        else {
            if (count > 1) {
                imgArray[0].classList.remove("noImg");
                imgArray[0].classList.add("showImg");
                count = 0;
            }
            else {
                imgArray[count].nextElementSibling.classList.remove("noImg");
                imgArray[count].nextElementSibling.classList.add("showImg");
                count++;
            }
        } 
    }

    document.getElementById('leftBtn').addEventListener("click", function(){ changeImage("leftBtn")});
    document.getElementById('rightBtn').addEventListener("click", function(){ changeImage("rightBtn")});
};
  
window.addEventListener('load', loadEvent);