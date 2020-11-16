let modal = document.querySelector(".modal");
let images = document.querySelectorAll(".img-item");
let modalImg = document.querySelector(".modal-img");
let span = document.querySelector(".close-modal");
let next = document.querySelector(".gal-next");
let prev = document.querySelector(".gal-prev")

const openModal = (img) => {
  modal.style.display = "block";
  modalImg.src = img.src;
}

const imgIndex = () => {  
  for(let i = 0; i < images.length; i++){
    if(modalImg.src == images[i].src){    
      return i;
    };
  }
}

span.onclick = () => {
  modal.style.display = "none";
}

for(let img of images){
  img.addEventListener("click", evt => {      
      openModal(img);
  })
}

next.addEventListener("click", evt => {  
  let index = imgIndex();
  if(index + 1 < images.length){
    modalImg.src = images[index + 1].src;
  } else {
    modalImg.src = images[0].src;
  }  
})

prev.addEventListener("click", evt => {  
  let index = imgIndex();
  if(index - 1 >= 0){
    modalImg.src = images[index - 1].src;
  } else {
    modalImg.src = images[images.length - 1].src;
  }  
})

