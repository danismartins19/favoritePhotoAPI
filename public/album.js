const c = el => document.querySelector(el);
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let buttonBack = c('.return');
let indexPhoto = 0;
let modalOpen = false;

favorites.map((photo, index)=>{
    let modelPhoto = c('.imgLiked').cloneNode(true);
    modelPhoto.querySelector('img').src = photo;
    modelPhoto.setAttribute('data-key', index);

    modelPhoto.addEventListener('click' , (e) =>{
        e.preventDefault();
        indexPhoto = e.target.closest('.imgLiked').getAttribute('data-key');
        updateImage(indexPhoto);
    })

    c( '.album' ).append( modelPhoto );
})



//functions

const updateImage = (indexPhotoModal) =>{

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
        updateImage(indexPhoto);
        console.log('index: '+indexPhoto + ' tamanho do array: ' + favorites.length);
    }
})

document.querySelector('.previous--Image').addEventListener('click' , () =>{
    if(indexPhoto >= 1){
        indexPhoto--;
        updateImage(indexPhoto);

    }
})



buttonBack.addEventListener('click' , () =>{
    window.open('../index.html', '_self');
})

