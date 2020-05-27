// let pageOneBtn = document.querySelector("#page1-btn"); /* equivalent to getElementById and getElementsByClassName */
// let pageOne = document.querySelector("#page1");
// pageOneBtn.addEventListener("click", function(){
//     if(pageOne.classList.contains("hidden")){
//         pageOne.classList.remove("hidden");
//         pageOne.classList.add("show");
//     } else{
//         pageOne.classList.remove("show");
//         pageOne.classList.add("hidden");
//     }
// })

let pageTwoBtn = document.querySelector("#page2-btn");
// let pageTwo = document.querySelector("#page2");
pageTwoBtn.addEventListener("click", async function(){
  let response = await axios.get('music.html');
  page2.innerHTML = response.data; 
  page2.classList.add("show");
  page2.classList.remove("hidden");
})

let pageThreeBtn = document.querySelector("#page3-btn");
// let pageThree = document.querySelector("#page3");
pageThreeBtn.addEventListener("click", async function(){
  let response = await axios.get('butter.html');
  page3.innerHTML = response.data; 
  page3.classList.add("show");
  page3.classList.remove("hidden");
})

// let button = document.getElementById("animate-btn");
// button.addEventListener("click", function(){
//     let butterImg = document.getElementById("butter-img");
//     butterImg.classList.add("moving"); 
// })

let pageFourBtn = document.querySelector("#page4-btn");// let pageFour = document.querySelector("#page4");
pageFourBtn.addEventListener("click", async function(){
  let response = await axios.get('baby.html');
  page4.innerHTML = response.data;
  page4.classList.add("show");
  page4.classList.remove("hidden");
})