const titles = ["Designer Gráfico.", "UX/UI.", "Programador.", "Front-End.", "Full Stack."]

let titleDiv = document.querySelector(".main-container div")
let ogTitle = titles[0];

function responsiveTitle () {
    if (window.innerWidth <= 620)  {
      titleDiv.innerHTML = `<h1>Meu nome é <br/>
      <span>Nicolas Debianchi</span><br/>
      e eu sou <br/>
      <span class="title-span">Designer Gráfico.</span></h1>`
      titleDiv.classList.remove("title-desktop")
      titleDiv.classList.add("title-mobile")
  } else {
      titleDiv.innerHTML = `<h1>Meu nome é <span>Nicolas Debianchi</span> <br/>
      e eu sou <span class="title-span">Designer Gráfico.</span></h1>`
      titleDiv.classList.remove("title-mobile")
      titleDiv.classList.add("title-desktop")
  }};

function titleChanger () {  
  let currentTitle = document.querySelector(".title-span");  
  
  currentTitle.innerHTML = ogTitle;

  let titleIndex = titles.indexOf(currentTitle.innerHTML)    
  if(titleIndex < titles.length - 1){    
      let newTitle = titles[titleIndex + 1] 
      currentTitle.innerHTML = newTitle
      ogTitle = newTitle              
  } else {
      currentTitle.innerHTML = titles[0]
      ogTitle = titles[0]
  } 

  currentTitle.innerHTML = currentTitle.textContent.replace(/\S/g, "<span class='title-letter'>$&</span>");
}

window.addEventListener("resize", responsiveTitle);
window.addEventListener("load", responsiveTitle);

setInterval(() => {
    titleChanger(),       
    anime.timeline({loop: false})
    .add({
        targets: '.title-span',
        scaleY: [0,1],
        opacity: [0.5,1],
        easing: "easeOutExpo",
        duration: 300
      })
      .add({
        targets: '.title-span',
        translateX: [0, document.querySelector('.title-span .title-letter').getBoundingClientRect().width + 10],
        easing: "easeOutExpo",
        duration: 300,
        delay: 100
      })
      .add({
        targets: '.title-span .title-letter',
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 200,
        offset: '-=775',
        delay: (el, i) => 34 * (i+1)
      })
      .add({
        targets: '.title-span',
        opacity: 0,
        duration: 100,
        easing: "easeOutExpo",
        delay: 300
      });
}, 1300)

