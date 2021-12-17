//variables

let favorites       = JSON.parse(localStorage.getItem('favorites')) || [];
let imageContainer  = document.querySelector('.image');
let albumDiv        = document.querySelector('#album');
let updateimage     = document.querySelector('button');


//click events

albumDiv.addEventListener('click', () =>{
    window.open('../album.html', '_blank');
})

updateimage.addEventListener('click' , () =>{
    getExternalImage();
})

imageContainer.addEventListener('click', async () => {
        
    let imageSource = await document.querySelector('.image img').src;
    let index = await favorites.indexOf(imageSource);

    if(index !== -1){
        favorites.splice(index, 1);
        imageContainer.classList.remove('fav');
        imageContainer.classList.add('unfav');


    } else {
        favorites.push(imageSource);
        imageContainer.classList.remove('unfav');
        imageContainer.classList.add('fav');
    }

    localStorage.setItem('favorites', JSON.stringify(favorites))
   
})

//methods

const getExternalImage = async ()=> {
    
    document.querySelector('.image').innerHTML =  '';
    const response = await fetch('https://source.unsplash.com/random')
    document.querySelector('.image').innerHTML =  `<img src= "${response.url}">`;
   

    let checkIndex = favorites.indexOf(response.url);
    if(checkIndex == -1){
        imageContainer.classList.remove('fav');
        imageContainer.classList.add('unfav'); 
    }else{
        imageContainer.classList.remove('unfav');
        imageContainer.classList.add('fav');     
    }
}

getExternalImage();
