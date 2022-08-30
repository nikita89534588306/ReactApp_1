import { connect } from "react-redux"
import store from "../redux/store"
import CarDetails from "./carDetails/CarDetails"

const CarsList =(props)=>{
    console.log(props)

    const showListCar = () => {
        return props.cars.map((car) => {
            return(
                <li onClick={()=>{props.addSecondValue(car);}} key={car.id}>{car.name}</li>
            )
        })
    }
    return(
        <ol>
            {showListCar()}
        </ol>
    )
}

function mapStateToProps(store){
    return{
        cars: store.cars,
    }
}

function mapDispatchToProps(dispatch){
    return{
        addSecondValue: (car)=> {
            dispatch({type:"CAR_SELECT", payload: car})
        }
    }
}

const ListCars = connect(mapStateToProps, mapDispatchToProps)(CarsList);

const WebPage = () => {
    return (
        <>
            <h3>Cars: </h3>
            <ListCars/>
            <hr/>

            <h3>Details: </h3>
            <CarDetails />
        </>
    )
}

export default WebPage;