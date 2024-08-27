//  adityadav2809@gmail.com aditya learning js day 10
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function() {
  let item = document.createElement("li");
  item.innerText = inp.value;

  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.classList.add("Delete");

  item.appendChild(delBtn);
  ul.appendChild(item);
  inp.value = "";
});

ul.addEventListener("click", function(event)
  {
    let par = event.target.parentElement;
    par.remove();
  }
);
