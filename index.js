function showMessage(response) {
    if (response === "No") {
        const noButton = document.getElementById("no-button");
        const maxWidth = window.innerWidth - noButton.offsetWidth;
        const maxHeight = window.innerHeight - noButton.offsetHeight;

        noButton.style.position = "absolute";

        document.getElementsByClassName("f-image")[0].src = "./images/sad_otter.gif";

        const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
        const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

        noButton.style.left = randomX + "px";
        noButton.style.top = randomY + "px";

        document.getElementById("question").textContent = "ale ninka 🥺 prosiim 🥺 ahh";
        document.getElementById("name").style.display = "none";

        noButton.addEventListener("mouseover", () => {

            const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
            const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

            noButton.style.zIndex = "100";
            noButton.style.left = randomX + "px";
            noButton.style.top = randomY + "px";

        });
    }

    if (response === "Yes") {

        document.getElementById("name").remove();
        document.getElementById("no-button").remove();

        const yesMessage = document.getElementById("question");
        yesMessage.textContent = "ANOO OMG !!! VIDIME SA 14TH NINI <3";
        yesMessage.style.display = "block";
        yesMessage.style.fontStyle = "normal";
        document.getElementsByClassName("f-image")[0].src = "./images/otter_dance.gif";

        document.getElementById("yesButton").remove();
    }
}