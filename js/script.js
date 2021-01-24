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

const container = document.querySelector(".cat-container");

console.log(container);

let html = "";

function createCats(cats) {
    for (let i = 0; i < cats.length; i++);

    html += `<div class="pet">
        <h5>${cats[i].name}</h5>
        <p>Age: ${cats[i].age}</p>
        </div>
    `;

    console.log(html);
}

container.innerHTML = html;

// Here nothing comes up in my page in Live Server. Dont know whats wrong, so i wont come any longer than this.