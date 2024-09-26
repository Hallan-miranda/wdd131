//save the article tag in the const article
const article = document.querySelector("#article");

//Add a text to the article
article.innerHTML = "The innerHTML support <strong>HTML</strong> tags.";
console.log(article)
//add styles to the article
article.style.textAlign = "center";
article.style.color = "#000"

//add atributes to the article
article.setAttribute('class', 'active');

//creat an element in the article
const paragraph = document.createElement('p');

// Creat an element at the end of article
article.appendChild(paragraph);
article.append(paragraph, 'Hello Word additioned');

// remove the paragraph from the article and the article
article.removeChild(paragraph);
article.remove();