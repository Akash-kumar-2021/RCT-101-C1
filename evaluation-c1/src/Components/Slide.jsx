
function Slide({data})
{
    return(
        <div className="slide-conatiner">
            <h3>{data.title}</h3>
            <hr></hr>
            <p>{data.description}</p>
        </div>
    );
}
export default Slide ;