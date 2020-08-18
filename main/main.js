console.log(`Warsztat – Obsługa formularza ‚Imie i nazwisko`);

const submitForm = (event) =>{
    event.preventDefault(); // blokujemy wysłanie formularza

    // pobieramy pola formularza:
    let firstName = document.querySelector('[name="fname]');
    let lastName = document.querySelector('[name="lname"]');



console.log(`imie: ${firstName.value}, nazwisko: ${lastName.value}`);

}



let form = document.getElementById('form');

form.addEventListener(`submit`, submitForm); //podpinamy zdarzenie

console.log('form');