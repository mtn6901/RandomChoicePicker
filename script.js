
const tagsEle = document.getElementById("tag")
const text = document.querySelector(".input")


text.focus()

text.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if (e.key === "Enter"){
        setTimeout(()=>{
            e.target.value = ""
        }, 10)
        randomSelect()
    }
})

function createTags(input) {
    const tags = input.split(",").filter(tag=>tag.trim()).map(tag=>tag.trim())

    tagsEle.innerHTML = ""

    tags.forEach(tag => {
        const tagEle = document.createElement("span")
        tagEle.classList.add("tag")
        tagEle.innerText = tag
        tagsEle.appendChild(tagEle)
    })
}

function randomSelect() {
    const times = document.querySelectorAll(".tag").length*5

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        if (randomTag !== undefined) highlight(randomTag)
        
        setTimeout(() => {
            unHighlight(randomTag)
        }, 100)

    }, 100)

    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            const randomTag = pickRandomTag()
            highlight(randomTag)
        }, 100)
    }, times*100)
    
}

function pickRandomTag() {
    const tags = document.querySelectorAll(".tag")
    return tags[Math.floor(Math.random()*tags.length)]
}

function highlight(tag) {
    tag.classList.add("highlight")
}

function unHighlight(tag) {
    tag.classList.remove("highlight")
}