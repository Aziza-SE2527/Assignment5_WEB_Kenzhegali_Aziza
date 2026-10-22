console.log("Name: Aziza, Group: SE-2527");
alert("Hello, JavaScript World!");

let str = "Hello";
let num = 5;
console.log(str + " World");
console.log(num + 10);

document.getElementById("btn-text").onclick = function() {
    document.getElementById("text-to-change").innerText = "Text changed!";
};

let box = document.getElementById("style-box");
document.getElementById("btn-color").onclick = function() {
    box.style.backgroundColor = "#ffb6c1";
};
document.getElementById("btn-size").onclick = function() {
    box.style.fontSize = "24px";
};

let list = document.getElementById("list");
let count = 1;
document.getElementById("btn-add").onclick = function() {
    count++;
    let li = document.createElement("li");
    li.innerText = "Item " + count;
    list.appendChild(li);
};
document.getElementById("btn-remove").onclick = function() {
    if (list.lastElementChild) {
        list.removeChild(list.lastElementChild);
        count--;
    }
};

let hoverBox = document.getElementById("hover-box");
hoverBox.onmouseover = function() {
    hoverBox.style.backgroundColor = "#0d1b2a";
    hoverBox.style.color = "white";
};
hoverBox.onmouseout = function() {
    hoverBox.style.backgroundColor = "#f0f0f0";
    hoverBox.style.color = "black";
};

document.getElementById("live-input").onkeyup = function(e) {
    document.getElementById("live-output").innerText = e.target.value;
};

document.getElementById("btn-calc").onclick = function() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let op = document.getElementById("operator").value;
    let res = 0;

    if (op === "+") res = n1 + n2;
    if (op === "-") res = n1 - n2;
    if (op === "*") res = n1 * n2;
    if (op === "/") res = n1 / n2;

    document.getElementById("calc-result").innerText = res;
};

let tasksArray = [];

document.getElementById("btn-add-task").onclick = function() {
    let title = document.getElementById("task-title").value;
    let desc = document.getElementById("task-desc").value;

    if (title === "" || desc === "") {
        alert("Fill all fields!");
        return;
    }

    let task = {
        id: Date.now(),
        title: title,
        desc: desc,
        done: false
    };

    tasksArray.push(task);
    drawTasks();

    document.getElementById("task-title").value = "";
    document.getElementById("task-desc").value = "";
};

function drawTasks() {
    let container = document.getElementById("tasks-container");
    container.innerHTML = "";

    for (let i = 0; i < tasksArray.length; i++) {
        let t = tasksArray[i];

        let div = document.createElement("div");
        div.className = "task-item";
        if (t.done === true) {
            div.classList.add("done");
        }

        let textSpan = document.createElement("span");
        textSpan.innerHTML = "<b>" + t.title + "</b><br>" + t.desc;
        textSpan.style.cursor = "pointer";
        textSpan.onclick = function() {
            t.done = !t.done;
            drawTasks();
        };

        let delBtn = document.createElement("button");
        delBtn.innerText = "X";
        delBtn.onclick = function() {
            tasksArray.splice(i, 1);
            drawTasks();
        };

        div.appendChild(textSpan);
        div.appendChild(delBtn);
        container.appendChild(div);
    }
}