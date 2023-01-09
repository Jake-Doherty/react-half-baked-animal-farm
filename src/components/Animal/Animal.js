import './Animal.css';

export default function Animal(props) {
  return (
    <div className="animal" style={{ top: props.top, left: props.left }}>
      <h1 className="animal name">{props.name}</h1>
      <p>{props.type}</p>
      <p>{props.says}</p>
    </div>
  );
}
