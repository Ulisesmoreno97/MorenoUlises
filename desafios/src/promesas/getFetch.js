
let producto = [
    {
    id: 1,
    resumen: 'Breve texto sobre el producto',
    stock: 7,    
    title: 'Perfume 1',
    price: 250,
    pictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtgwf7RhaOLa5yO3v7PiviaULyk6VnfJsdbA&usqp=CAU"
}, {
    id: 2,
    resumen: 'Breve texto sobre el producto',
    stock: 15,    
    title: 'Perfume 2',
    price: 100,
    pictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtgwf7RhaOLa5yO3v7PiviaULyk6VnfJsdbA&usqp=CAU"
}, {
    id: 3,
    resumen: 'Breve texto sobre el producto probando',
    stock: 4,    
    title: 'Perfume 3',
    price: 150,
    pictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtgwf7RhaOLa5yO3v7PiviaULyk6VnfJsdbA&usqp=CAU"
}]

export const getFetch = new Promise((respuesta, rejected) => {
    let url = producto.com
    if (url === producto.com) {
        setTimeout(() => {
           respuesta(producto); 
        }, 2000);        
    } else {
        rejected('400 not found')
    }
})