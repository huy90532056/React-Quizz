import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisPlayInfor from "./DisplayInfor";

const Mycomponent = (props) => {
  const [listUsers, setListUsers] = useState([
    { id: 1, name: "Benzema", age: "35" },
    { id: 2, name: "Ronaldo", age: "38" },
    { id: 3, name: "Bale", age: "33" },
  ]);

  const handleAddNewUser = (userObj) => {
    setListUsers([userObj, ...listUsers]);
  };

  const handleDeleteUser = (userId) => {
    let listUserClone = listUsers;
    listUserClone = listUserClone.filter((item) => item.id !== userId);
    setListUsers(listUserClone);
  };

  return (
    <>
      <div className="a">
        <AddUserInfor handleAddNewUser={handleAddNewUser} />
        <br />
        <br />
        <DisPlayInfor
          listUser={listUsers}
          handleDeleteUser={handleDeleteUser}
        />
      </div>
      <div className="b"></div>
    </>
  );
};

export default Mycomponent;
