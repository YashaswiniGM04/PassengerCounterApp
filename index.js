// document.getElementById("count-el").innerText=5;

// let count = 0;
// console.log(count);

//Increment function

let count =0;
let paragraph = document.getElementById("p-str")
let countElement = document.getElementById("count-el")

function increment()
{
    count += 1;
    countElement.textContent = count
}


function save()
{
    paragraph.textContent+= count+" - " 
    count=0;
    countElement.textContent=count;

}