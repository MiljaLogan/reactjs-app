const PropsExp = ({ img, name, hobbies, realData, children }) => {
  return (
    <>
      <img src={img} alt={name} />
      <h1>Name : {name}</h1>
      <h3>Hobbies : {hobbies} </h3>
      <p>Name : {realData.name} </p>
      <p>Location : {realData.location} </p>
      {children}
    </>
  );
};

export default PropsExp;
