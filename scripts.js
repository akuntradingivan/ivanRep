const data_wrapper = document.getElementById('dataWrapper')
const tampilkan_nama = document.getElementById('tampilkanNama')

async function ambilData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    
    const data_nama = []
    for (let i = 0; i < data.length; i++){
        data_nama.push(data[i].name)
    }
    
    tampilkan_nama.addEventListener('click', (event) => {
        data_wrapper.innerHTML = ''
        for (let i = 0; i < data_nama.length; i++){
            const elementNama = document.createElement('li')
            elementNama.innerText = data_nama[i]
            data_wrapper.appendChild(elementNama)
        }
    } )
}

ambilData()