// import "./styles.css";

const onClickAdd = () => {
    //inputが空文字の時は関数を抜ける
    if (document.getElementById("add-text").value === "") {
        return
    }

    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    const div = document.createElement("div");
    div.className = "list-row";

    const li = document.createElement("li");
    li.innerText = inputText;

    //buttonタグの生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
        const deleteTarget = completeButton.parentNode;
        document.getElementById("incomplete-list").removeChild(deleteTarget);

    });

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
        deleteFromIncompleteList(deleteButton.parentNode);
    });

    div.appendChild(li);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);

    document.getElementById("incomplete-list").appendChild(div);
}

document
    .getElementById("add-button")
    .addEventListener("click", () => onClickAdd());

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
}