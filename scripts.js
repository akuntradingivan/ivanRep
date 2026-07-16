const tombol = document.getElementById('myButton')
const daftar_nama = document.getElementById('daftarNama')
const tampilkan_nama = document.getElementById('tampilkanNama')

tombol.addEventListener('click', function(event) {
    alert(event.target.textContent)
})


async function ambilData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    
    const data_nama = []
    for (let i = 0; i < data.length; i++){
        data_nama.push(data[i].name)
    }
    
    tampilkan_nama.addEventListener('click', (event) => {
        daftar_nama.innerHTML = ''
        for (let i = 0; i < data_nama.length; i++){
            const elementNama = document.createElement('li')
            elementNama.innerText = data_nama[i]
            daftar_nama.appendChild(elementNama)
            console.log(data_nama[i])
        }
    } )
}

ambilData()