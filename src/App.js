import React, { useState } from "react";
import "./App.css";
import { Grid, Cell } from "react-foundation";
import UserTable from "./Components/UserTable";
import UserForm from "./Components/UserForm";
import EditUserForm from "./Components/EditUserForm";

const App = () => {
  const usersData = [
    { id: 1, name: "Tania", username: "floppydiskette" },
    { id: 2, name: "Craig", username: "siliconeidolon" },
    { id: 3, name: "Ben", username: "benisphere" }
  ];

  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: "",
    username: ""
  });
  const [editing, setEditing] = useState(false);

  const handleEdit = user => {
    setEditing(true);
    setCurrentUser(user);
  };

  const cancelEdit = () => {
    setEditing(false);
    setCurrentUser({ id: null, name: "", username: "" });
  };

  const editUser = u => {
    const index = users.findIndex(user => user.id === u.id);
    users[index].name = u.name;
    users[index].username = u.username;
    setUsers(users);
    setEditing(false);
  };

  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = id => {
    setEditing(false);
    const filtered = users.filter(user => user.id !== id);
    setUsers(filtered);
  };
  return (
    <div className="App">
      <h3 style={{ marginTop: 20, marginBottom: 40 }}>
        Crud with React Hooks + Foundation
      </h3>
      <Grid className="display">
        {editing ? (
          <EditUserForm
            editUser={editUser}
            cancelEdit={cancelEdit}
            currentUser={currentUser}
          />
        ) : (
          <UserForm addUser={addUser} />
        )}
        <UserTable
          users={users}
          deleteUser={deleteUser}
          handleEdit={handleEdit}
        />
      </Grid>
    </div>
  );
};

export default App;
