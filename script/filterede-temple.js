const hamburguer = document.querySelector(".hamburger")
const nav = document.querySelector("nav")

hamburguer.addEventListener("click", () => nav.classList.toggle("active"))


const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    {
        templeName: "Campinas Brasil",
        location: "Campinas, Brasil",
        dedicated: "2002, May , 17",
        area: 71000,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/c9a81a6f86750d7d9ade3499d3df52e2f7f726a7/full/320%2C/0/default"
    },
    {
        templeName: "Curitiba Brasil",
        location: "Curitiba, Brasil",
        dedicated: "2008, June, 01",
        area: 68800,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/ea7e0f39c8e26d163a4dfedfcb1ce5c41d650b5b/full/320%2C/0/default"
    },
    {
        templeName: "São Paulo Brasil",
        location: "São Paulo, Brasil",
        dedicated: "1978, October, 30",
        area: 58000,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
];

const templeSection = document.querySelector(".temple")

function filterTemples(condition) {
    const filtredTemples = temples.filter(condition);
    console.log('filtrado')
    console.log(filtredTemples)

    return filtredTemples;
}

document.querySelector('#home').addEventListener('click', () => creatTempleCard(temples))

document.querySelector('#old').addEventListener('click', () => creatTempleCard(filterTemples(temples => new Date(temples.dedicated).getFullYear() < 1900)))

document.querySelector('#new').addEventListener('click', () => creatTempleCard(filterTemples(temples => new Date(temples.dedicated).getFullYear() > 2000)))

document.querySelector('#small').addEventListener('click', () => creatTempleCard(filterTemples(temples => temples.area < 10000)))

document.querySelector('#large').addEventListener('click', () => creatTempleCard(filterTemples(temples => temples.area > 90000)))


let creatTempleCard = (templeList) => {

    while (templeSection.firstChild){
        templeSection.removeChild(templeSection.firstChild)
    }

    templeList.forEach(temple => {

        const card = document.createElement("div");

        card.classList.toggle("card");
        card.innerHTML = `
        <h3>${temple.templeName}</h3>
        <p>Location: ${temple.location}</p>
        <p>Dedication: ${temple.dedicated}</p>
        <p>Size: ${temple.area}</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName}"></div>
        `

        templeSection.appendChild(card);
    });
}