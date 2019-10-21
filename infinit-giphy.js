
const giphyButton = document.querySelector('.giphy-button')
const giphyInput = document.querySelector('.giphy-input')
const giphyBody = document.querySelector('body')
const giphyList = document.querySelector(".giphy-list")

const giphyArticle = document.querySelector('article')
let count = 0

const selectGuiphy = function (event) {
    event.preventDefault()
    // while(giphyArticle.firstChild) {
    //     giphyArticle.removeChild(giphyList.firstChild)
    // }
    while (giphyList.firstChild) {
        giphyList.removeChild(giphyList.firstChild)
    }
    retrieveGiphy()
}

const retrieveGiphy = function () {
    const userInput = giphyInput.value
    const options = {
        url: `http://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=6xwSLRnOU0PmP2IDGMRhQQQ3RJ2yAf7R&limit=10&offset=${count}`
    }

    $.ajax(options).done(function (resp) {
        // debugger
        for (var i = 0; i < 11; i++) {
            const eachGiphy = resp.data[i].images.fixed_height_small.url
            const createGiphy = document.createElement('img')
            createGiphy.src = eachGiphy
            createGiphy.className = "display"
            giphyList.appendChild(createGiphy)
        }


    })
}

window.addEventListener('scroll', function () {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight
    const scrolled = window.scrollY
    // console.log(scrollable)// 746
    if (scrolled === scrollable) {
        count = count + 10
        retrieveGiphy()
    }
})

giphyButton.addEventListener('click', selectGuiphy)








