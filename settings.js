document.addEventListener("DOMContentLoaded", () => {

    const soundEnabled = localStorage.getItem("soundEnabled") === "true";
    const autoSubmitEnabled = localStorage.getItem("autoSubmitEnabled") === "true";
    const fontSize = localStorage.getItem("fontSize") || "16px";
    const textColor = localStorage.getItem("textColor") || "white";
    const showTips = localStorage.getItem("showTips") === "true";


    document.getElementById("sound-toggle").checked = soundEnabled;
    document.getElementById("auto-submit-toggle").checked = autoSubmitEnabled;
    document.getElementById("font-size-selector").value = fontSize;
    document.getElementById("text-color-selector").value = textColor;
    document.getElementById("show-tips-toggle").checked = showTips;

    
    document.getElementById("sound-toggle").addEventListener("change", (event) => {
        const sound = event.target.checked;
        localStorage.setItem("soundEnabled", sound);
    });

    document.getElementById("auto-submit-toggle").addEventListener("change", (event) => {
        const autoSubmit = event.target.checked;
        localStorage.setItem("autoSubmitEnabled", autoSubmit);
    });

    document.getElementById("font-size-selector").addEventListener("change", (event) => {
        const fontSize = event.target.value;
        localStorage.setItem("fontSize", fontSize);
        document.body.style.fontSize = fontSize;  
    });

    document.getElementById("text-color-selector").addEventListener("change", (event) => {
        const textColor = event.target.value;
        localStorage.setItem("textColor", textColor);
        document.body.style.color = textColor;  
    });

    document.getElementById("show-tips-toggle").addEventListener("change", (event) => {
        const tipsEnabled = event.target.checked;
        localStorage.setItem("showTips", tipsEnabled);
    });

    
    document.getElementById("save-button").addEventListener("click", () => {
        alert("Settings saved successfully!");
    });
});
