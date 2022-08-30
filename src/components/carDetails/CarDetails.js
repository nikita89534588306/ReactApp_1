
import { connect } from "react-redux/es/exports"
import './style.css'

function CarDetails(props) {
    if(props.car!==null){
    return(
        <div className="conteiner">
            <h2>{props.car.name}</h2>
            <div className="body">
                <img src={props.car.img}/>
                <p>{props.car.desc}</p>
                <p>Скорость: {props.car.speed}, вес: {props.car.weight} </p>
            </div>
        </div>
    )}
    else{
        return <div>Выберети из списка...</div>
    }
}


function mapStateToProps(store) {
    return{
        car: store.selectCar
    }
}

export default connect(mapStateToProps)(CarDetails)
