import "./insults.css";

const Insults = (props) => {
  const { insult, author } = props;
  return (
    <div>
      <h1>Shakespear insult generator</h1>
      <h3>{insult}</h3>
      <h2>{"-" + author}</h2>
    </div>
  );
};

export default Insults;
