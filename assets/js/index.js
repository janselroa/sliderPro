const btnNext = document.querySelector("#next");
const btnPrevious = document.querySelector("#previous");
const title = document.querySelector("h1");
const paragraph = document.querySelector("p");

const text = `
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi voluptatum consectetur odio? Delectus totam cumque molestias inventore ipsa quos, repellendus nam. Quisquam, ullam tempore. Eos incidunt placeat doloremque similique earum.`

const datos = [{
        Title: "Paisaje Oceanico",
        description:`Los océanos son grandes cantidades de agua distribuidas a lo largo y ancho del planeta. 
        Por lo general, separan a dos o más continentes.
        Son considerados como «la superficie más grande del mundo» y son el hogar de millones de especies acuáticas.`,
        image: "./assets/img/ocean.jpg"
    },
    {
        Title: "Lluvia",
        description: `
            La lluvia Los científicos y expertos del clima, dicen que la lluvia se produce cuando el vapor de agua se condensa (pasar de gas a líquido)
             y se vuelve gotas que contienen las nubes y caen, mogando con agua la tierra y dando vida la tierra
        `,
        image: "./assets/img/rain.jpg"
    },
    {
        Title: "Cuidades",
        description: `Las ciudades grandes extecuturas diseñadas y construidas
         por el ser humano forman un paisaje artificial bastante agradable a la vista`,
        image: "./assets/img/city.jpg"
    },
    {
        Title: "Naturaleza",
        description: `Un espacio natural, paisaje natural o ambiente natural,
        es una parte del territorio de la Tierra que no se encuentra 
        modificado por la acción del ser humano`,
        image: "./assets/img/nature.jpg"
    },

    {
        Title: "Parques",
        description: `Los parques son espacios naturalez designados por el ser humano`,
        image: "./assets/img/park.jpg"
    },
    {
        Title: "Beach View",
        description: `Las playas lugares muy agradables, visitados y populares por estar en la horilla del mar y la arena
        forman paisajes muy bonitos`,
        image: "./assets/img/playa.jpg"
    },

    {
        Title: "Montañas",
        description: `Montañas formaciones naturalez de tierra y rocas formas muy hermonos paisajes`,
        image: "./assets/img/Mountain.jpeg"
    }, {
        Title: "Space View",
        description: `El spacio exterior lugar fuera de nuestro pleneta`,
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
