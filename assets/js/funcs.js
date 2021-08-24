document.querySelectorAll('[data-toggle="accordeon"]').forEach( a => {
    a.addEventListener("click", () => {
        document.querySelectorAll("nav ul li").forEach( li => {
            li.classList.remove("active")
        })
        a.removeAttribute("href")
        a.parentElement.classList.add("active")
        const item = document.querySelectorAll(".accordeon .item")
        item.forEach(i => {
            i.classList.remove("active")
        })
        document.querySelector(a.dataset.target).classList.add("active")
    })
})