document.querySelector('body').addEventListener("load",displayWindowObject());

function displayWindowObject(){
    console.log("navigator.userAgent-> ",navigator.userAgent)
    console.log("screen.width-> ",screen.width)
    console.log("screen.height-> ",screen.height)
    console.log("location.href-> ",location.href)
    console.log("location.pathname-> ",location.pathname)
    console.log("sessionStorage-> ",sessionStorage)
    console.log("localStorage-> ",localStorage)
}