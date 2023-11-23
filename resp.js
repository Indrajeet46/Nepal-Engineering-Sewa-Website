burger=document.querySelector('.burger')
navigation=document.querySelector('.navigation')
log=document.querySelector('.log')

burger.addEventListener('click',()=>{
    log.classList.toggle('v-class-resp');
    navigation.classList.toggle('h-nav-resp');
})
