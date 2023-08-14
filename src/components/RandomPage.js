export default function RadomPage( {gownsList}) {
    const randomGowns = gownsList [Math.floor(Math.random() * gownsList.length)]
    return (
        <div>
            <h5>You should Play.....</h5>
            <h2 className="display-1">{ randomGowns.name}</h2>
        </div>
    )
}