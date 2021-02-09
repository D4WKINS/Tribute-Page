// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.querySelector('img.myImg');
// var modalImg = document.getElementById("img-1");
// var captionText = document.getElementById("caption");


// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
//   console.log(modalImg.src);
// }
var img = document.getElementsByClassName('modal_image');

for(var i=0; i<img.length; i++){
   
    var modalImg = document.getElementById("img-01");
    var captionText = document.getElementById("caption");

    img[i].onclick= function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        console.log(modalImg.src);
        captionText.innerHTML = this.alt;
  
    }
 }
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0]; //The Close button

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
