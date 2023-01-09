import './Animal.css';
// import animalImage from '../../../public/animals';

export default function Animal(props) {
  return (
    <div className="animal" style={{ top: props.top, left: props.left }}>
      <h2 className="animal name">{props.name}</h2>
      <img src={`/animals/${props.type}.svg`} />
      <p>{props.says}</p>
    </div>
  );
}
