
function City(props) {
  return (
    <div>
      <h1>{props.name}</h1>

      <img
        src={props.image}
        alt={props.name}
        width="500"
      />
    </div>
  );
}

export default City;
