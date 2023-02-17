const Box = (props) => {
  //  Write your code here.
  const { className, name } = props;
  return (
    <div className={className}>
      <p>{name}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div>
    <h1>Boxes</h1>

    <div class="bg-container">
      <Box className="small" name="Small" />
      <Box className="medium" name="medium" />
      <Box className="big" name="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
