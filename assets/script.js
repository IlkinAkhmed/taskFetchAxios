const container = document.querySelector(".container")
const tbody = document.querySelector("#tbody")
const btn = document.querySelector("#btn")
const table = document.querySelector("#table")
container.classList.add("container")


//----------------------------- FETCH-------------------------------

// async function fetchData() {
//     const res = await fetch('https://api.tvmaze.com/shows')
//     const data = await res.json()
//     data.forEach(items => {

//         // datas for table
//         const trow = document.createElement('tr')
//         const filmname = document.createElement('td')
//         const filmlang = document.createElement('td')
//         const filmrate = document.createElement('td')
//         const filmimgtd = document.createElement('td')
//         const filmimg = document.createElement('img')

//         filmname.textContent = items.name
//         filmlang.textContent = items.language
//         filmrate.textContent = items.rating.average
//         filmimg.src = items.image.medium
//         filmimg.classList.add("image")
//         filmimgtd.append(filmimg)
//         trow.append(filmname, filmlang, filmrate, filmimgtd)
//         tbody.append(trow)

//         // datas for cards

//         const card = document.createElement("div")
//         const imgdiv = document.createElement("div")
//         const namediv = document.createElement("div")
//         const ratediv = document.createElement("div")
//         const cardimg = document.createElement("img")
//         const cardname = document.createElement("h1")
//         const cardlang = document.createElement("p")
//         const cardrate = document.createElement("p")
//         cardimg.src = items.image.medium
//         cardname.textContent = items.name
//         cardlang.textContent = items.language
//         cardrate.innerHTML = `<i class="fa-solid fa-star"></i>${items.rating.average}`
//         cardrate.style.fontSize = '20px'
//         card.classList.add('card')
//         imgdiv.classList.add('img')
//         ratediv.classList.add('rate')
//         cardimg.classList.add('cardimage')
//         cardname.classList.add('cardname')
//         ratediv.append(cardlang, cardrate)
//         imgdiv.append(cardimg)
//         card.append(imgdiv, cardname, ratediv)
//         container.append(card)
//     });
// }
// fetchData()

//----------------------------- AXIOS-------------------------------


async function AxiosData() {
    const res = await axios('https://api.tvmaze.com/shows') 
    data = res.data
    data.forEach(items => {

        // datas for table
        const trow = document.createElement('tr')
        const filmname = document.createElement('td')
        const filmlang = document.createElement('td')
        const filmrate = document.createElement('td')
        const filmimgtd = document.createElement('td')
        const filmimg = document.createElement('img')

        filmname.textContent = items.name
        filmlang.textContent = items.language
        filmrate.textContent = items.rating.average
        filmimg.src = items.image.medium
        filmimg.classList.add("image")
        filmimgtd.append(filmimg)
        trow.append(filmname, filmlang, filmrate, filmimgtd)
        tbody.append(trow)

        // datas for cards

        const card = document.createElement("div")
        const imgdiv = document.createElement("div")
        const namediv = document.createElement("div")
        const ratediv = document.createElement("div")
        const cardimg = document.createElement("img")
        const cardname = document.createElement("h1")
        const cardlang = document.createElement("p")
        const cardrate = document.createElement("p")
        cardimg.src = items.image.medium
        cardname.textContent = items.name
        cardlang.textContent = items.language
        cardrate.innerHTML = `<i class="fa-solid fa-star"></i>${items.rating.average}`
        cardrate.style.fontSize = '20px'
        card.classList.add('card')
        imgdiv.classList.add('img')
        ratediv.classList.add('rate')
        cardimg.classList.add('cardimage')
        cardname.classList.add('cardname')
        ratediv.append(cardlang, cardrate)
        imgdiv.append(cardimg)
        card.append(imgdiv, cardname, ratediv)
        container.append(card)
    });
}
AxiosData()

btn.addEventListener('click', () => {
    if (table.style.display==='block') {
        table.style.display='none'
    }else{table.style.display='block'}
})