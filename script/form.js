const currentYear = document.querySelector("#currentyear")
const lastModified = document.querySelector("#lastModified")
const input = document.querySelector(".select")

const today = new Date()

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
];
  

products.forEach(item => {
  
  const product = document.createElement("option")
  
  product.innerHTML =
  `<option value="${item.name}" >${item.name}</option>`

  input.appendChild(product)
  
})


currentYear.innerHTML = `<span id="currentyear">${today.getFullYear()}</span>`;

lastModified.innerHTML = `<p id="lastModified">Last Modification: ${document.lastModified}</p>`;
