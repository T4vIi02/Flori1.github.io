function openModal(imageIndex) {
    const modal = document.getElementById('myModal');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');
    const modalImage1 = document.getElementById('modal-image1');
    const modalImage2 = document.getElementById('modal-image2');
    const modalImage3 = document.getElementById('modal-image3');

    // Set the content based on the clicked image
    switch (imageIndex) {
        case 1:
            modalTitle.innerText = 'Title 1';
            modalText.innerText = 'Detailed information about Image 1.';
            modalImage1.src = 'image1.jpg';
            modalImage2.src = 'image1_2.jpg';
            modalImage3.src = 'image1_3.jpg';
            break;
        case 2:
            modalTitle.innerText = 'Title 2';
            modalText.innerText = 'Detailed information about Image 2.';
            modalImage1.src = 'image2.jpg';
            modalImage2.src = 'image2_2.jpg';
            modalImage3.src = 'image2_3.jpg';
            break;
        case 3:
            modalTitle.innerText = 'Title 3';
            modalText.innerText = 'Detailed information about Image 3.';
            modalImage1.src = 'image3.jpg';
            modalImage2.src = 'image3_2.jpg';
            modalImage3.src = 'image3_3.jpg';
            break;
        case 4:
            modalTitle.innerText = 'Title 4';
            modalText.innerText = 'Detailed information about Image 4.';
            modalImage1.src = 'image4.jpg';
            modalImage2.src = 'image4_2.jpg';
            modalImage3.src = 'image4_3.jpg';
            break;
        case 5:
            modalTitle.innerText = 'Title 5';
            modalText.innerText = 'Detailed information about Image 5.';
            modalImage1.src = 'image5.jpg';
            modalImage2.src = 'image5_2.jpg';
            modalImage3.src = 'image5_3.jpg';
            break;
        case 6:
            modalTitle.innerText = 'Title 6';
            modalText.innerText = 'Detailed information about Image 6.';
            modalImage1.src = 'image6.jpg';
            modalImage2.src = 'image6_2.jpg';
            modalImage3.src = 'image6_3.jpg';
            break;
        default:
            modalTitle.innerText = 'Title';
            modalText.innerText = 'Detailed information about the selected image.';
            modalImage1.src = '';
            modalImage2.src = '';
            modalImage3.src = '';
    }

    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
