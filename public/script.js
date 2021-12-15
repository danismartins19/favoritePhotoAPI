//variables

let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let imageContainer = document.querySelector('.image');




//click events

document.querySelector('button').addEventListener('click' , () =>{
    getExternalImage();
})

document.querySelector('.image').addEventListener('click', () => {
    
    let imageSource = document.querySelector('.image img').src;
    const index = favorites.indexOf(imageSource);

    if(index == -1){
        favorites.push(imageSource);
        imageContainer.classList.remove('unfav');
        imageContainer.classList.add('fav');
        localStorage.setItem('favorites', JSON.stringify(favorites))
    } else {
        favorites.splice(index, 1);
        imageContainer.classList.remove('fav');
        imageContainer.classList.add('unfav');
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }

})

//methods

const getExternalImage = async ()=> {
    

    const response = await fetch('https://source.unsplash.com/random')

    document.querySelector('.image').innerHTML = `<img src= "${response.url}">`

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
