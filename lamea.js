// lamea.js
document.addEventListener('DOMContentLoaded', () => {
    // 1. بناء عناصر الـ HTML لـ لامع برمجياً
    const lameaHTML = `
        <div id="lameaBtn" onclick="handleLameaClick()" style="position: fixed; bottom: 20px; left: 20px; width: 65px; height: 65px; background: white; border-radius: 50%; border: 3px solid #007bff; cursor: pointer; z-index: 10000; box-shadow: 0 4px 15px rgba(0,0,0,0.2); display: flex; align-items: center; justify-content: center; overflow: hidden;">
            <img src="Images/Lame3.jpg" id="lameaImg" alt="لامع" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" onerror="this.src='./Images/Lame3.png';">
        </div>
        <div id="chatWindow" dir="rtl" style="position: fixed; bottom: 100px; left: 20px; width: 300px; height: 400px; background: white; border-radius: 20px; box-shadow: 0 10px 25px rgba(0,0,0,0.15); display: none; flex-direction: column; z-index: 10000; overflow: hidden; border: 1px solid #eee; text-align: right; font-family: 'Cairo', sans-serif;">
            <div style="background: #007bff; color: white; padding: 15px; text-align: center; font-weight: bold;">مساعدك الذكي لامع ✨</div>
            <div id="chatBody" style="flex: 1; padding: 15px; overflow-y: auto; background: #f9f9f9; font-size: 13px;">
                <div style="text-align: right; margin-bottom: 10px;">
                    <p style="background: #f1f1f1; padding: 8px; border-radius: 10px; display: inline-block;"><b>لامع:</b> يا هلا بك يا هند! كيف بقدر أساعدك اليوم؟ 😊</p>
                </div>
            </div>
            <div style="padding: 10px; display: flex; gap: 5px; border-top: 1px solid #eee;">
                <input type="text" id="userInput" placeholder="اسألي لامع شيئاً..." style="flex: 1; border: 1px solid #ddd; border-radius: 20px; padding: 5px 15px; outline: none;">
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', lameaHTML);

    const input = document.getElementById('userInput');
    if (input) {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });
    }
});

function handleLameaClick() {
    const chat = document.getElementById('chatWindow');
    if (chat) {
        chat.style.display = (chat.style.display === 'none' || chat.style.display === '') ? 'flex' : 'none';
    }
}

function sendMessage() {
    const input = document.getElementById('userInput');
    const body = document.getElementById('chatBody');
    if (!input || !body) return;

    const msg = input.value.trim();
    if (!msg) return;

    body.innerHTML += `<div style="text-align: left; margin-bottom: 10px;"><p style="background: #007bff; color: white; padding: 8px; border-radius: 10px; display: inline-block;"><b>أنتِ:</b> ${msg}</p></div>`;
    input.value = "";
    body.scrollTop = body.scrollHeight;

    setTimeout(() => {
        let res = "أنا معكِ يا هند! هل تريدين معرفة الأسعار أم حجز موعد؟ ✨";
        const lowMsg = msg.toLowerCase();
        if (lowMsg.includes("سعر") || lowMsg.includes("بكم")) res = "أسعارنا بتبدأ من 6 دنانير! 💰";
        else if (lowMsg.includes("حجز") || lowMsg.includes("موعد")) res = "بتقدري تحجزي من صفحة 'البحث عن محطة' بكل سهولة. 📅";
        else if (lowMsg.includes("شكرا")) res = "ولو يا هند! أنا دائماً بخدمتك. 😊";

        body.innerHTML += `<div style="text-align: right; margin-bottom: 10px;"><p style="background: #f1f1f1; padding: 8px; border-radius: 10px; display: inline-block; border-right: 4px solid #007bff;"><b>لامع:</b> ${res}</p></div>`;
        body.scrollTop = body.scrollHeight;
    }, 800);
}