import './style.css';

function Title(props) {
  return (
    <div>
      <div className="title">
        <h1>{props.title}</h1>
        <p>
          {props.text}
        </p>
      </div>
    </div>
  );
}

export default Title;
