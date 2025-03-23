// 訪客計數器
let visitorCount = 0;
document.getElementById("counter").innerText = visitorCount;

// 每次載入頁面模擬增加訪客（刷新後會重置）
visitorCount++;
document.getElementById("counter").innerText = visitorCount;

// 留言板功能
function addMessage() {
    const messageInput = document.getElementById("message-input");
    const messageText = messageInput.value.trim();
    
    if (messageText !== "") {
        const messageList = document.getElementById("messages");
        const newMessage = document.createElement("li");
        newMessage.innerText = messageText;
        messageList.appendChild(newMessage);
        messageInput.value = ""; // 清空輸入框
    }
}