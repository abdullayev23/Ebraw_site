let hamburger = document.querySelector(".burger")
let closeBtn = document.querySelector(".times")
let modal = document.querySelector(".active")
let elBody = document.body
let elLink = document.querySelectorAll("#teg")

hamburger.addEventListener("click", ()=>{
    modal.classList.toggle("active-modal")
    elBody.classList.add("scroll")
})
closeBtn.addEventListener("click", ()=>{
    modal.classList.remove("active-modal")
    elBody.classList.remove("scroll")
})

for(let nom of elLink){
    nom.addEventListener("click",()=>{
        modal.classList.remove("active-modal")
        elBody.classList.remove("scroll")
    })
}