
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
function showPopup(id) { document.getElementById(id).style.display = 'flex'; }
function hidePopup(id) { document.getElementById(id).style.display = 'none'; }
