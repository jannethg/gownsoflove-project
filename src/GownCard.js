function GownCard(props) {
    return (
        <div>
        <h4>{props.gown.name}</h4>
        <p>{props.gown.color}</p>
        <p>{props.gown.category}</p>      
        </div>
    );
}

export default GownCard;