document.addEventListener('DOMContentLoaded', () => {
    const nameForm = document.getElementById('name-form');
    const nameInput = document.getElementById('name-input');
    const inputCard = document.getElementById('input-card');
    const resultCard = document.getElementById('result-card');
    const nameBox = document.getElementById('name-box');
    const resetBtn = document.getElementById('reset-btn');

    nameForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const userName = nameInput.value.trim();
        
        if (userName !== "") {
            nameBox.textContent = userName;
            inputCard.classList.add('hidden');
            resultCard.classList.remove('hidden');
        }
    });

    resetBtn.addEventListener('click', () => {
        nameInput.value = "";
        resultCard.classList.add('hidden');
        inputCard.classList.remove('hidden');
        nameInput.focus();
    });
});
