window.addEventListener('DOMContentLoaded', () => {
    const nameBox = document.getElementById('name-box');
    
    // جلب الاسم من بيانات المستخدم المسجلة
    const userName = "سالم صالح الكعبي";
    
    setTimeout(() => {
        nameBox.textContent = userName;
    }, 400);
});
