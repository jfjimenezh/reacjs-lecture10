import React from "react";
import axios from "axios";

function verUsuarios() {
  useEffect(() => {
    axios
      .get("https://localhost:8080/user")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {});
  });
}

const printData = (params) => {
  return (
    <div>
      <TextField
        id='outlined-basic'
        label='Outlined'
        variant='outlined'
        onChange={a}
      />
      {userData.data.map((val) => (
        <p key={val.userid}>{JSON.stringify(val)}</p>
      ))}
    </div>
  );
};
export default verUsuarios;
