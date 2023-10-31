const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", oyun);
});

function oyun(event) {
    const secim = event.target.id;
    const secenekler = ["tas", "kagiz", "makas"];
    const botSecimi = secenekler[Math.floor(Math.random() * 3)];
    
    const netice = qarsilasdir(secim, botSecimi);
    
    document.getElementById("netice").innerText = `Siz: ${secim}, bot: ${botSecimi}, Netice: ${netice}`;
}
buttons.forEach(button => {
            button.addEventListener("click", oyun);
        });

        function qarsilasdir(secim, botSecimi) {
            if (secim === botSecimi) {
                return "Berabere";
            } else if (
                (secim === "tas" && botSecimi === "makas") ||
                (secim === "kagiz" && botSecimi === "tas") ||
                (secim === "makas" && botSecimi === "kagiz")
            ) {
                return "Qazandiniz!";
            } else {
                return "Bot qazandi!";
            }
        }