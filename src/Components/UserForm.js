import React, { useState } from "react";
import { Cell, Button, Colors } from "react-foundation";

const UserForm = ({ addUser }) => {
  const initialFormState = { id: null, name: "", username: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = e => {
    let userChange = { ...user };
    userChange[e.target.name] = e.target.value;
    setUser(userChange);
  };
  return (
    <Cell style={{ padding: 20 }} large={6}>
      <h5>User Form</h5>
      <form>
        <label>Titre</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={e => handleInputChange(e)}
        />
        <label>Utilisateur</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={e => handleInputChange(e)}
        />
        <Button
          onClick={e => {
            e.preventDefault();
            addUser(user);
            setUser(initialFormState);
          }}
          color={Colors.SUCCESS}
        >
          Ajouter nouvel utilisateur
        </Button>
      </form>
    </Cell>
  );
};

export default UserForm;
