
let taskInput = document.querySelector("#taskInput");
let addTask = document.querySelector("#addTask");

addTask.addEventListener("click", () => {
  const text = taskInput.value.trim();

  // console.log(text)

  if (text !== "") {



    let down = document.querySelector("#down");

    let div = document.createElement("div");
    div.style.width = "250px";
    div.style.height = "250px";
    div.style.backgroundColor = "rgba(50, 93, 255, 0.9)";
    // div.style.border="2px solid Red"
    div.style.margin="10px"
    div.style.display="flex"
    div.style.flexDirection="column"
    div.style.justifyContent="space-around"
    div.style.alignItems="center"
    div.style.borderRadius="10px"
    div.style.hover
    div.style.color="#fff"
    


    let ul = document.createElement("ul");
    ul.id = "taskList";



    let li = document.createElement("li");
    li.style.backgroundColor="#fff"
    li.style.color="black"
    li.style.margin="0 40px 0 40px"
    li.style.borderRadius="15px"
    li.style.fontWeight="600"
    li.appendChild(document.createTextNode(text));




    let btn = document.createElement("button");
    btn.style.backgroundColor="rgb(255, 19, 87)"
    btn.style.fontSize="large"
    btn.style.padding="12px"
    btn.textContent = "Delete";
    btn.style.borderRadius="12px"
    // btn.style.color="black"
    btn.style.fontWeight="600"
    btn.style.hover






    btn.addEventListener("click", () => {
      down.removeChild(div);
    });
    btn.addEventListener("mouseover",()=>{
        btn.style.backgroundColor="rgb(255, 26, 44)"
    })
    btn.addEventListener("mouseout",()=>{
        btn.style.backgroundColor="rgb(255, 19, 87)"
    })





    // li.appendChild(btn);
    // let AA= ul.appendChild(li);

    div.appendChild(ul.appendChild(li));
    div.appendChild(btn)
    down.appendChild(div);

    taskInput.value = "";
  }
});
