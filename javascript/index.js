const bar=document.querySelector('#bar')
const nav= document.querySelector('#navbar')
const closeIcon=document.querySelector('#close')
bar.addEventListener('click',()=>{
   nav.classList.toggle('active')
    
})
closeIcon.addEventListener('click',()=>{
   nav.classList.remove('active')
})

