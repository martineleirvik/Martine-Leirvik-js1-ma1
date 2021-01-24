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
    for (var i = 1; i <= 0; i++){
        console.log(i);
    }

}


// question 8

function createCats(cats) {

}