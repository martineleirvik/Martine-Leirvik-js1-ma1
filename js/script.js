const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];


// question 1

const cat = {
    complain: "Meow!"
};

console.log(cat);


// question 2

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";


// question 3

heading.style.fontSize = "2em";


// question 4

const classHeading = document.querySelector("h3");

for (let i = 0; i < classHeading.length; i++) {
    classHeading[i].classList.add("subheading");
}


// question 5

const paragraphs = document.querySelectorAll("p");

console.log(paragraphs);

for (let i = 0; i < paragraphs.length; i++) {
    console.dir(paragraphs[i]);
    paragraphs[i].style.color = "red";
}


// question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";


// question 7

function study(list) {
    for (let i = 0; i < list.length; i++){
        console.log(list[i].name);
    }
}

study(cats);


// question 8

function createCats(cats) {

    let html = "";

    for (let i = 0; i < cats.length; i++) {

        let ageCat = "Age unknown";
        
        if (cats[i].age) {
            ageCat = cats[i].age;
        }

        html += `<div class=".cat-container">
                    <h5>${cats[i].name}</h5>
                    <p> Age: ${ageCat}</p>
                </div>`;
    }

    return html;
}

const newHTML = createCats(cats);

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = newHTML;