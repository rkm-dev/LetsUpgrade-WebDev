
var tagH1 = document.getElementsByTagName("h1");
console.log(tagH1[0].textContent);

var cls1 = document.getElementsByClassName("art1");
console.log(cls1[0].textContent);

var para1 = document.getElementById("para1");
console.log(para1.innerText);


// just a "wee bit" of a flair
setTimeout(h1Change, 3000);
function h1Change() {
    console.log('Just a "wee bit" of a flair.');
    tagH1[0].innerText="Hi, I am an Upgrader";
    cls1[0].style.textAlign="center";
    cls1[0].innerHTML="<img alt='welcome-mat' src='https://media.giphy.com/media/fU4elxKlRsulB4Jy7w/giphy.gif'>";
}