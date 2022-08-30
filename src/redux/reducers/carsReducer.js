const initialState = [
    {
        id: 1,
        name: "Audi",
        speed: "234.45",
        weight: 1.4,
        desc: "R8 просто замечательныый автомобил!",
        img: "https://s.mediasalt.ru/images/327/327554/original.jpg",
    },
    {
        id: 2,
        name: "BMW",
        speed: "314.5",
        weight: 1.2,
        desc: "Автомобили с отметкой 'M' всегда были быстрее!",
        img: "https://carsweek.ru/upload/iblock/34b/34bdbf4724eb113eed45397a7f8f6736.jpg",
    },
    {
        id: 3,
        name: "Mercedes",
        speed: "277.15",
        weight: 1.3,
        desc: "Крутая тачка!",
        img: "https://www.autoguru.at/wp-content/gallery/mercedes_e200_coupe_test_1017/IMG_5681a.jpg",
    }
]
const carReducer = (state=initialState, action) => {
    switch(action.type){
        default: return state;
    }
}

export default carReducer;