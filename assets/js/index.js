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
        Title: "Nature View",
        description: text.split(' ').slice(0, 10).join(" "),
        image: "./assets/img/nature.jpg"
    },
];
var count = 0;
const nextPage = () => {
    if (count === 3) count = 0;
    let data = datos[count];
    title.textContent = data.Title,
        paragraph.textContent = data.description,
        document.body.style.backgroundImage = `url("${data.image}")`
    count++;
}
setInterval('nextPage()', 2500)