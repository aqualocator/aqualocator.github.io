const myimage = new URLSearchParams(window.location.search).get('image');
document.getElementById("aquaemp").src= myimage + ".png";
