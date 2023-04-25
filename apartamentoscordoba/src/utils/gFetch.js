let departamentos = [
    { id: '1', categoria: 'dptobedo', name: 'Allegro', precio: 10000, foto: '../../imagenes/bedoya/bedoya_sala2.jpg', descripcion: 'El Departamento Allegro se encuentra en Córdoba, a 3,1 km del centro comercial Patio Olmos y a 3,4 km del centro cívico de Córdoba, se ubica a 3,7 km de la Manzana Jesuítica, a 4,2 km de la plaza de España y a 3,6 km de la catedral de Córdoba. El aeropuerto internacional Ingeniero Aeronáutico Ambrosio L.V. Taravella, el aeropuerto más cercano, está a 10 km. Ofrece un alojamiento con wifi gratis y TV de pantalla plana. Cuenta con aire acondicionado, 1 dormitorio, cocina con zona de comedor y baño con bidet.' },
    { id: '2', categoria: 'dptopuey', name: 'Pueyrredon', precio: 13000, foto: '../../imagenes/Pueyrredon/sala.jpg', descripcion: 'El Departamento Pueyrredón ofrece alojamiento en Córdoba, a 600 metros de la plaza de España, a 800 metros del centro comercial Patio Olmos, a 1,3km de la manzana Jesuítica, a la misma distancia de la catedral de Córdoba y a 13km del aeropuerto Ambrosio L. V. Taravella. Este establecimiento dispone de aire acondicionado, WiFi gratuito en todo el recinto y tanto de ropa de cama como toallas. La cocina está equipada con horno y heladera.' },
    { id: '3', categoria: 'dptoron', name: 'Rondeau', precio: 17000, foto: '../../imagenes/Rondeau/camas.jpeg', descripcion: 'Penthouse ubicado en Córdoba, barrio de Nueva Córdoba a 800 metros de la plaza España, a 1km del centro comercial Patio Olmos y a menos de 1km del centro cívico de Córdoba. Otros lugares de interés se encuentran cerca como lo es la ciudad universitaria la catedral, entre otros. Es un departamento muy cómodo y con grandes espacios el cual se ubica en el último piso del edificio. Cuenta con dos habitaciones y dos baños, cocina equipada, comedor y escritorio. Posee aire en las habitaciones, televisor tanto en la habitación principal como en el living, el cual cuenta con un comodo sillón. Dispone de WiFi gratuito, ropa de cama y toallas.' }

]



export const gFetch = () => new Promise((res, rej) => {
    let condition = true
    if (condition) {
        setTimeout(() => {
            res(departamentos)
        }, 1000)
    } else {
        rej('error')
    }
})

