const UserInfo = () => {
  const userData = [
    {
      username: "Paari",
      email: "paari@test.com",
      location: "UK",
    },
    {
      username: "Pegan",
      email: "pegan@test.com",
      location: "Arab",
    },
    {
      username: "sss",
      email: "sss@test.com",
      location: "UAE",
    },
  ];
  return (
    <>
      {userData.map((user) => (
        <ul key={Math.random() * 10}>
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>{user.location}</li>
        </ul>
      ))}
    </>
  );
};

export default UserInfo;
