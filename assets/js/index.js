const btnNext = document.querySelector("#next");
const btnPrevious = document.querySelector("#previous");
const title = document.querySelector("h1");
const paragraph = document.querySelector("p");

const text = `
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi voluptatum consectetur odio? Delectus totam cumque molestias inventore ipsa quos, repellendus nam. Quisquam, ullam tempore. Eos incidunt placeat doloremque similique earum.`

const datos = [{
        Title: "Ocean View",
        description: text.split(' ').slice(10, 20).join(" "),
        image: "./assets/img/ocean.jpg"
    },
    {
        Title: "Rain View",
        description: text.split(' ').slice(21, 30).join(" "),
        image: "./assets/img/rain.jpg"
    },
    {
        Title: "City View",
        description: text.split(' ').slice(0, 20).join(" "),
        image: "./assets/img/city.jpg"
    },
    {
        Title: "Nature View",
        description: text.split(' ').slice(0, 10).join(" "),
        image: "./assets/img/nature.jpg"
    },

    {
        Title: "Park View",
        description: text.split(' ').slice(15, 35).join(" "),
        image: "./assets/img/park.jpg"
    },
    {
        Title: "Beach View",
        description: text.split(' ').slice(10, 30).join(" "),
        image: "./assets/img/playa.jpg"
    },

    {
        Title: "Mountain View",
        description: text.split(' ').slice(15, 35).join(" "),
        image: "./assets/img/Mountain.jpeg"
    }, {
        Title: "Space View",
        description: text.split(' ').slice(20, 30).join(" "),
        image: "./assets/img/space.jpg"
    }
];

var count = 0;
const nextPage = () => {
    count++;
    editPage()
}
const prevPage = () => {
    count -= 1;
    editPage()
}

const editPage = () => {
    if (count > 7 || count < 0) count = 0;
    let data = datos[count];
    title.textContent = data.Title,
        paragraph.textContent = data.description,
        document.body.style.backgroundImage = `url("${data.image}")`
}

setInterval('nextPage()', 4000)
btnNext.addEventListener('click', nextPage)
btnPrevious.addEventListener('click', prevPage)