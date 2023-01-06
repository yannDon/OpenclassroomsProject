
const input = document.getElementById('input')
const p = document.getElementById('p')

let inputList = input.addEventListener('input', () => {
    p.innerHTML = (input.value)
})

