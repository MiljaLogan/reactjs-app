const JsxExpression = () => {
  const myName = "Milja Else Ausgustine";
  const multiply = (s, b) => s * b;
  const specialClass = "not-simple-class";
  return (
    <>
      <h1>Hello {myName} </h1>
      <p> 32*45={multiply(32, 45)}</p>
      <p className={specialClass}>
        My Freiends List : {["Mary ", "Lilly ", myName]}
      </p>
    </>
  );
};

export default JsxExpression;
