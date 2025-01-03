function toggleAnswer(id) {
    const answer = document.getElementById(`answer-${id}`);
    const toggleIcon = document.getElementById(`toggle-icon-${id}`);

    if (answer.style.display === "block") {
        answer.style.display = "none";
        toggleIcon.textContent = "+";
    } else {
        answer.style.display = "block";
        toggleIcon.textContent = "−";
    }
}
