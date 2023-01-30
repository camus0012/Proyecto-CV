fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById('nombre_apellido').innerHTML = data.results[0].name.first + " " + data.results[0].name.last;
        document.getElementById('ciudad_pais').innerHTML = data.results[0].location.city + ", " + data.results[0].location.state;
        document.getElementById('email').innerHTML = data.results[0].email;
        document.getElementById('telefono').innerHTML = data.results[0].cell;
        document.getElementById('telefono_fijo').innerHTML = data.results[0].phone;
        document.getElementById('foto_perfil').src = data.results[0].picture.medium;

    });

document.getElementById("imagen1").scr = "animated-computer-image-0040.gif";



document.getElementById("informacion_extra").style.display = "none";


document.querySelector("button a").addEventListener("click", function() {
    document.getElementById("informacion_extra").style.display = "block";
});

document.addEventListener("wheel", function(event) {
    if (event.deltaY < 0) {
        document.getElementById("informacion_extra").style.display = "none";
    }
});