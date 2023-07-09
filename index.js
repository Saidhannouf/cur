var nom = [];
var valeur = [];
fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(Countries => {
        console.log(Countries);
        nom = Countries;

        for (let i = 0; i < Countries.length; i++) {
            var option = document.createElement('option');
            option.innerHTML = Countries[i].name.common;
            document.getElementById('Countries').appendChild(option);
        }
    })

function city() {

    var selectedValue = document.getElementById('Countries').value;
    pays = nom.find((x) => x.name.common == selectedValue);
    console.log(pays);
    var img = document.createElement('img');
    img.src = pays.flags.png;
    document.getElementById('img').innerHTML = '';
    document.getElementById('img').appendChild(img);
    var currency = pays.currencies;
    currency = Object.entries(currency);

    console.log('currency', currency);
    for (let i = 0; i < currency.length; i++) {
        var button = document.createElement('button');
        var span = document.createElement('span')
        document.getElementById('EXC').innerHTML = '';
        document.getElementById('EXC').appendChild(button).addEventListener('click', clickHandler);
        document.getElementById('EXC').appendChild(span).setAttribute('id','inp');
        button.innerHTML = currency[i][0];
         valeur = currency[i][0];
    }
}
function clickHandler() {
    console.log('currency', valeur);
    fetch('https://api.fastforex.io/fetch-multi?from='+ valeur +'&to=USD&api_key=8e1e6065c8-62b4789eb3-rqe2ww')
      .then(response => response.json())
      .then(response => {console.log(response);
        console.log(response.results);
            console.log(response.results.USD);
            document.getElementById('inp').innerHTML = response.results.USD +'$';
           
      })
 }
