import React from "react";

import UserItem from "./UserItem";
import Card from '../../shared/components/UIElements/Card'
import "./UsersList.css";

const UsersList = (props) => {

  if (props.items.length === 0) {
    return (
      <Card>
        <h2>No User Found!</h2>
      </Card>
    );
  }

  return (
    <ul className="users-list">
      {props.items.map((user) => {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.place}
          />
        );
      })}
    </ul>
  );
};

export default UsersList;
