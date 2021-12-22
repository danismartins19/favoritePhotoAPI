const c = el => document.querySelector(el);
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let buttonBack = c('.return');
let indexPhoto = 0;
let modalOpen = false;





//functions

const renderImages = () =>{
    favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if(favorites.length > 0 ) {

        document.querySelector('.noPhoto').style.display    = 'none';
        document.querySelector('.album').style.display      = 'flex';

        favorites.map((photo, index)=>{
            let modelPhoto = c('.imgLiked').cloneNode(true);
            modelPhoto.querySelector('img').src = photo;
            modelPhoto.setAttribute('data-key', index);
        
            modelPhoto.addEventListener('click' , (e) =>{
                e.preventDefault();
                indexPhoto = e.target.closest('.imgLiked').getAttribute('data-key');
                updateImageModal(indexPhoto);
            })
        
            c( '.album' ).append( modelPhoto );
        })
    } else {

        let textNoPhoto = document.querySelector('.noPhoto');
        document.querySelector('.album').style.display      = 'none';
        textNoPhoto.style.display    = 'flex';
        textNoPhoto.innerHTML = 'Não há imagens curtidas!'
    }
    
}

renderImages();

const updateImageModal = (indexPhotoModal) =>{

    modalOpen = true;

    document.querySelector('.modal--Image').src = favorites[indexPhotoModal];    
    document.querySelector('.modal').style.display = 'flex';
}

const closeModal = () =>{
    document.querySelector('.modal').style.display = 'none';
}


//events

document.addEventListener('keydown', (e) =>{
    if((e.key === "Escape" || e.key === "Esc") && (modalOpen)){
        modalOpen = false;
        closeModal();
    }
})

document.querySelector('.closeModal').addEventListener('click' , () =>{
    closeModal();
})

document.querySelector('.next--Image').addEventListener('click' , () =>{
    if(indexPhoto < (favorites.length - 1)){
        indexPhoto++;
        updateImageModal(indexPhoto);
        console.log('index: '+indexPhoto + ' tamanho do array: ' + favorites.length);
    }
})

document.querySelector('.previous--Image').addEventListener('click' , () =>{
    if(indexPhoto >= 1){
        indexPhoto--;
        updateImageModal(indexPhoto);

    }
})



buttonBack.addEventListener('click' , () =>{
    window.open('../index.html', '_self');
})

