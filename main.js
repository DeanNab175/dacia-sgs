const contactUsBtn = document.getElementById("contact-us-btn");
const modalContainer = document.getElementById("modal-container");

contactUsBtn.addEventListener("click", () => {
    getModal();
})

async function getModal() {
    try {
        const response = await fetch('modal.html');
        const modalHtmlStr = await response.text();
        
        displayModal(modalHtmlStr, response.status);
    } catch (error) {
        console.error(`Error: ${error}`);
    }
    
}

function displayModal(htmlStr, status) {
    if(status !== 200) return;

    modalContainer.innerHTML = htmlStr;
    document.body.style.overflow = "hidden";

    const closeBtn = document.querySelector('.modal .modal-close');

    closeBtn.addEventListener("click", () => {
        document.body.style.overflow = "auto";
        modalContainer.innerHTML = "";
    })
}