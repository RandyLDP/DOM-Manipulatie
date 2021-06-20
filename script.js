    const animal = document.getElementById('spotted-animals-list')
    const buttonEvent = document.querySelectorAll('.big-five-button').forEach(buttoenEvent => {
    buttonEvent.addEventListener('click', (e) => { 

    let text = document.createTextNode(buttonEvent.textContent);
    let newLi = document.createElement('li')

    buttonEvent.appendChild(newLi);
    animal.appendChild(newLi).appendChild(text);})
});


// Deel 2
    let child = animal.getElementsByTagName('li')[0]
    const delete1 = document.querySelector('#remove-first-item-button')
    delete1.addEventListener('click' , e => animal.removeChild(child))
            
// Deel 3

    const deleteAll = document.querySelector('#remove-all-button')
    deleteAll.addEventListener('click', e => {
     while (animal.firstChild) {
            animal.removeChild(animal.firstChild)
        }
    })
   