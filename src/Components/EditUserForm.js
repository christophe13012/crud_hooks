import React, { useState, useEffect } from "react";
import { Cell, Button, Colors } from "react-foundation";

const EditUserForm = props => {
  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const initialFormState = { id: null, name: "", username: "" };
  const [user, setUser] = useState(props.currentUser);

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
            props.editUser(user);
            setUser(initialFormState);
          }}
          color={Colors.SUCCESS}
        >
          Mettre à jour cet utilisateur
        </Button>
        <Button
          style={{ marginLeft: 2 }}
          onClick={e => {
            e.preventDefault();
            props.cancelEdit();
          }}
          color={Colors.ALERT}
        >
          Annuler
        </Button>
      </form>
    </Cell>
  );
};

export default EditUserForm;
