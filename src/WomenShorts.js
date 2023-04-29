function WomenShorts(props){
    return(
        <div className="card">
            <h3>Название: {props.title}</h3>
            <h3>Размер: {props.size}</h3>
            <h3>Цвет: {props.color}</h3>
            <h3>Брэнд: {props.brand}</h3>
        </div>
    )
}

export default WomenShorts;