const cursor = document.querySelector('.cursor');
const section = document.querySelector('#learnmore');

document.addEventListener("mousemove", e => {
    let y = e.pageY - 10;
    let x = e.pageX - 10;

    cursor.setAttribute("style","top: "+(e.pageY - scrollY)+"px; left: "+(e.pageX)+"px")
})

let open=false;
const navlist = document.querySelector('.navphone ul');

function navOpen() {
    gsap.set('.navphone ul', {opacity: 0, scale: 1})
    if (open==false) {
        gsap.to(navlist, {display: "flex", duration: 0.1, opacity: 1, ease: "linear"});
        gsap.to('#hamburgericon', {duration: 1.5, rotation: "90deg", ease: "elastic", color: "#1D3354"});
        open=true;
    } else if (open==true) {
        gsap.to(navlist, {display: "none", duration: 0.1, opacity: 0, ease: "linear", scale: 1.5});
        setTimeout(() => {
            console.log("closed");
        }, 1000);
        gsap.set('.navphone ul', {opacity: 0, scale: 1});
        gsap.to('#hamburgericon', {duration: 1.5, rotation: "0deg", ease: "elastic",  color: "#EAEAEA"});
        open=false;
    }
    console.log(open);
}

function navClose() {
    gsap.to(navlist, {display: "none", duration: 0.1, opacity: 0, ease: "linear", scale: 1.5});
    setTimeout(() => {
        console.log("closed");
    }, 1000);
    gsap.set('.navphone ul', {opacity: 0, scale: 1});
    gsap.to('#hamburgericon', {duration: 1.5, rotation: "0deg", ease: "elastic",  color: "#EAEAEA"});
    open=false;
}