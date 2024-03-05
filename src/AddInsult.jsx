const AddInsult = (props) => {
  const { addInsult } = props;

  let insult = {
    insult: "",
    author: "",
  };

  const handleInput = (event) => {
    insult.insult = event.target.value;
  };

  const handleInput2 = (event) => {
    insult.author = event.target.value;
  };

  const addInsultHandler = () => {
    addInsult(insult);
    console.log("added insult : " + insult);
  };

  return (
    <div>
      <input type="text" onChange={handleInput} placeholder="New Insult here" />
      <br />
      <input type="text" onChange={handleInput2} placeholder="From what play" />

      <button onClick={addInsultHandler}>ADD</button>
    </div>
  );
};

export default AddInsult;
