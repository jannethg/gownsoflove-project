function GownCard(props) {
    return (
        <div className="bg-light border p-4 m-2">
        <h4>{props.gown.name}</h4>
        <p>{props.gown.color}</p>
        <p>{props.gown.category}</p>      
        </div>
    );
}

export default GownCard;