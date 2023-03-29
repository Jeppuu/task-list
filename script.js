const enterButton = document.getElementById("btn");
enterButton.addEventListener("click",function() {
  if (inputLength() > 0) {
      createTask();
  }
  });

const input = document.getElementById("input");
input.addEventListener("keypress", function() {
  if (inputLength() > 0 && event.which ===13) {
      createTask();
}
});

const ul = document.getElementById("to-do");
function inputLength() {
  return input.value.length;
}

function createTask()
{
  let li = document.createElement("li");

if(input.value != '') { li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}


 li.addEventListener("click", function() {
   li.classList.toggle("done");
 });

  let delBtn = document.createElement("button");
  let trash = document.createElement("i");
  
  trash.classList.add("fa-solid", "fa-trash");
  delBtn.appendChild(trash);
  li.appendChild(delBtn);
  delBtn.addEventListener("click", function() {
    li.classList.add("delete")
  });
}
