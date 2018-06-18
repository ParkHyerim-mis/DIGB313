//페이지 로드되면 팝업창
function loadFunction() {
    alert("***World Tour 홈페이지에 오신 것을 환영합니다!***");
}

//이미지에 마우스 올리면 크게
function bigImg(x) {
    x.style.height = "500px";
    x.style.width = "600px";
}

function normalImg(x) {
    x.style.height = "250px";
    x.style.width = "300px";
}


//지도
function initMap() {
                var uluru = {lat: 37.556229, lng: 126.972150};
                var map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 10,
                    center: uluru
                    });
                var marker = new google.maps.Marker({
                    position: uluru,
                    map: map
                    });
                }


//이미지 슬라이드
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}