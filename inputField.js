const studentItems = document.querySelectorAll('.student-item');
const searchInput = document.querySelector('input[type="search"]');

searchInput.addEventListener('input', () => {
    studentItems.forEach((studentItem) => {
        const name = studentItem.querySelector('h4').innerHTML;
        if (!name.toLowerCase().includes(searchInput.value.toLowerCase())) {
            studentItem.style.display = 'none';
        } else {
            studentItem.style.display = 'block';
        }
    });
});