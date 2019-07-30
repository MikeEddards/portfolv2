document.querySelector('.contaner').onmousemove = (e) =>{
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;

    e.target.style.setProperty('--x', `${ x }px`)
    e.target.style.setProperty('--y', `${ y }px`)
}
//938 for about
//1496 for projects
//3226 for form
window.addEventListener('scroll', () => {
    let position = window.scrollY
    const about = document.querySelector('.aboutcontaner')
    const jobber = document.querySelector('.jobber')
    const growth = document.querySelector('.growth')
    const form = document.querySelector('.formbox')
    if(position >= 10){
        about.setAttribute("style", "opacity:1; transform: scale(1) " )
    }else{
        about.setAttribute("style", "opacity:0; transform: scale(.5)" )
    }
    if(position >= 10){

        growth.setAttribute("style", "opacity:1; transform: scale(1) " )
    }else{

        growth.setAttribute("style", "opacity:0; transform: scale(.5)" )
    }
    if(position >= 10){
        jobber.setAttribute("style", "opacity:1; transform: scale(1) " )
    }else{
        jobber.setAttribute("style", "opacity:0; transform: scale(.5)" )
    }
    if(position >= 10){
        form.setAttribute("style", "opacity:1; transform: scale(1) " )
    }else{
        form.setAttribute("style", "opacity:0; transform: scale(.5)" )
    }
})
