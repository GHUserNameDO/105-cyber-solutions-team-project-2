document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalText = document.getElementById("modal-text");
    const modalSvg = document.querySelector(".modal-svg");
    const body = document.body;

    function openModal() {
        modal.style.display = "flex";
        body.style.overflow = "hidden"; 
    }

    function closeModal() {
        modal.style.display = "none";
        body.style.overflow = "auto"; 
    }

    document.querySelectorAll(".benefits-item").forEach(item => {
        item.addEventListener("click", () => {
            modalTitle.textContent = item.getAttribute("data-modal-title");
            modalText.textContent = item.getAttribute("data-modal-text");

            const svgIcon = item.querySelector("svg").cloneNode(true);
            modalSvg.innerHTML = "";
            modalSvg.appendChild(svgIcon);

            openModal();
        });
    });

    document.querySelector(".close").addEventListener("click", () => {
        closeModal();
    });

    window.addEventListener("click", (event) => {
        if (event.target == modal) {
            closeModal();
        }
    });

    window.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeModal();
        }
    });
});
