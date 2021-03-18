const locationBTn = document.getElementById('location-btn')
const maindiv = document.querySelector('.main');
locationBTn.addEventListener('click',getlocation);

const btn = document.createElement('a');
const secondDiv = document.createElement('div');

function getlocation(e){

    navigator.geolocation.getCurrentPosition(whenReceived,whenDenied);
}

function whenReceived(position){
    const Userslatitude = position.coords.latitude;
    const Userslongitude = position.coords.longitude;

    const latitudespan = document.createElement('span')
    const longitudespan = document.createElement('span')
    const latitudespanText = document.createElement('span')
    const longitudespanText = document.createElement('span')

    latitudespan.className = 'h2 fw-bold text-dark';
    latitudespan.innerText = `${Userslatitude}°`;
    latitudespanText.className = 'h2 mx-2';
    latitudespanText.innerText = `Latitude:`;

    longitudespan.className = 'h2 fw-bold text-dark';
    longitudespan.innerText = `${Userslongitude}°`;
    longitudespanText.className = 'h2 mx-2';
    longitudespanText.innerText = `Longitude:`;

    const userslocation = document.createElement('div');
    userslocation.className = 'text-center text-light my-5';
    userslocation.appendChild(latitudespanText);
    userslocation.appendChild(latitudespan);
    userslocation.appendChild(longitudespanText);
    userslocation.appendChild(longitudespan);
    maindiv.appendChild(userslocation)

    createbtn(Userslatitude,Userslongitude);
}

function whenDenied() {
    const deniedDiv = document.createElement('div');
    deniedDiv.className = 'h1 text-warning text-center my-5'
    deniedDiv.innerText = 'Permission was denied! Kindly reload the page and allow to view further'
    maindiv.appendChild(deniedDiv)
    
}

function createbtn(Userslatitude,Userslongitude) {

    secondDiv.className = 'row justify-content-center';
    btn.className = 'btn btn-success w-25 my-5';
    btn.innerText= 'View On Google Maps';
    btn.href = `https://www.google.com/maps/search/?api=1&query=${Userslatitude},${Userslongitude}`;
    secondDiv.appendChild(btn);
    maindiv.appendChild(secondDiv);
    
}
