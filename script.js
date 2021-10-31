const btn = document.querySelector(".buttons")
btn.addEventListener("click", function () {
    const msg = document.querySelector(".msg")
    msg.innerHTML = (
    `<div class="close-msg alert alert-success d-flex align-items-center" role="alert">
     <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
    <div>
        THANKS FOR RAITING THIS MOVIE  <button type="button" class="close btn btn-secondary"> close </button>
     </div>
 </div>`)

    const close = document.querySelector(".close")
    close.addEventListener("click", function () {
        const closeMsg = document.querySelector(".close-msg")
        closeMsg.remove()
    })
})