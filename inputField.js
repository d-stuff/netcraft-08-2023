const studentItems = document.querySelectorAll('.student-item');
const searchInput = document.querySelector('input[type="search"]');

searchInput.addEventListener('input', () => {
    studentItems.forEach((studentItem) => {
        if (!studentItem.innerHTML.toLowerCase().includes(searchInput.value.toLowerCase())) {
            studentItem.style.display = 'none';
        } else {
            studentItem.style.display = 'flex';
        }
    });
});