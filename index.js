// import "./styles.css";

const onClickAdd = () => {
    //inputが空文字の時は関数を抜ける
    if (document.getElementById("add-text").value === "") {
        return
    }

    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    createIncompleteList(inputText);
}

document
    .getElementById("add-button")
    .addEventListener("click", () => onClickAdd());

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
}

//未完了リストに追加する関数
const createIncompleteList = (text) => {
    const div = document.createElement("div");
    div.className = "list-row";

    const li = document.createElement("li");
    li.innerText = text;

    //buttonタグの生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
        deleteFromIncompleteList(completeButton.parentNode);

        //完了リストに追加する要素
        const addTarget = completeButton.parentNode;
        //TODO内容テキストを取得
        const text = addTarget.firstElementChild.innerText;

        //div以下を初期化
        addTarget.textContent = null;

        const li = document.createElement("li");
        li.innerText = text;

        const backButton = document.createElement("button");
        backButton.innerText = "戻す";

        //戻すボタンのイベントを作成
        backButton.addEventListener("click", () => {
            const deleteTarget = backButton.parentNode;
            document.getElementById("complete-list").removeChild(deleteTarget);

            //テキスト取得
            const text = backButton.parentNode.firstChild.innerText;
            createIncompleteList(text);

        })

        //divタグの子要素に各要素を設定
        addTarget.appendChild(li);
        addTarget.appendChild(backButton);

        //完了リストに追加
        document.getElementById("complete-list").appendChild(addTarget);

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