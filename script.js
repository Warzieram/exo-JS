
const footer = document.getElementsByTagName("footer")[0];
var click_ammount = 0
footer.addEventListener("click", function () {
    click_ammount += 1
    console.log("clique " + click_ammount);

});

var header = document.getElementById("navbarHeader")
const navbarToggler = document.getElementsByClassName("navbar-toggler")[0]
navbarToggler.addEventListener("click", function () { header.classList.toggle("collapse") })

const first_card = document.getElementsByClassName("card")[0]
let first_edit_button = first_card.getElementsByTagName("button")[1]


first_edit_button.addEventListener("click", function () {
    first_card.style = "color: red;"
})

const second_card = document.getElementsByClassName("card")[1]
let second_edit_button = second_card.getElementsByTagName("button")[1]


second_edit_button.addEventListener("click", function () {

    second_card.style = second_card.style.cssText.localeCompare("color: green;") == 0 ? "" : "color: green;"
    console.log(second_card.style.cssText);
})

let link = document.getElementsByTagName("link")[0]
const link_save = link.href


let header_ = document.getElementsByClassName("navbar")[0]


header_.addEventListener("dblclick", function () {
    link.href = link.href.localeCompare(link_save) == 0 ? "" : link_save
})

all_cards = document.getElementsByClassName("card")
Array.prototype.forEach.call(all_cards, function (card) {

    card.addEventListener("mouseover", function () {
        card_text = card.getElementsByClassName("card-text")[0]
        card_img = card.getElementsByTagName("img")[0]
        card_text.style.display = "none"
        card_img.style = "width: 20%;"
    })


    card.addEventListener("mouseleave", function () {
        card_text = card.getElementsByClassName("card-text")[0]
        card_img = card.getElementsByTagName("img")[0]
        card_text.style.display = "block"
        card_img.style = "width: 100%;"
    })
})


const right_button = document.getElementsByClassName("my-2")[1]
right_button.addEventListener("click", function () {
    let parent = document.getElementsByClassName("row")[1]
    const cards = parent.children
    const first = cards[0]
    const last = cards[cards.length - 1]
    //console.log(parent)

    parent.insertBefore(last, first)
})



const left_button = document.getElementsByClassName("my-2")[0]
console.log(left_button)
left_button.href = "#"
left_button.addEventListener("click", function () {

    let parent = document.getElementsByClassName("row")[1]
    const cards = parent.children
    const first = cards[0]
    parent.removeChild(first)
    parent.appendChild(first)


})

const logo = document.getElementsByClassName("navbar-brand")[0]

logo.addEventListener("click", function () {
    console.log("activated")
    var body = document.body
    body.addEventListener("keypress", function (e) {


        
        body.className = ""

        if (e.code === "KeyQ") {
            console.log("A")
            body.className = "col-4"
        }
        if (e.code === "KeyY") {
            body.className = "col-4 offset-md-4"
        }
        if (e.code === "KeyP") {
            body.className = "col-4 offset-md-8"
        }
        if (e.code === "KeyB") {
            body.className = ""
        }


    })
})
