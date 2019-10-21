import React from "react";
import { Cell, Button, Colors } from "react-foundation";

const UserTable = ({ users, deleteUser, handleEdit }) => {
  return (
    <Cell style={{ padding: 20 }} large={6}>
      <h5>User Table</h5>
      <table>
        <thead>
          <tr>
            <th>Titre</th>
            <th>Utilisateur</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => {
            return (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>
                  <Button
                    color={Colors.PRIMARY}
                    onClick={() => handleEdit(user)}
                  >
                    Edit
                  </Button>
                  <Button
                    style={{ marginLeft: 2 }}
                    color={Colors.ALERT}
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Cell>
  );
};

export default UserTable;
