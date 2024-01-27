import React, { useState } from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

// class DisPlayInfor extends React.Component {
//   render() {
//     console.log('>>> rendered')
//     const { listUser } = this.props;
//     return (
//       <div className="display-infor-container">
//         {true && (
//           <>
//             {listUser.map((user) => {
//               return (
//                 <div
//                   key={user.id}
//                   className={+user.age >= 35 ? "green" : "red"}
//                 >
//                   <div>My name is {user.name}</div>
//                   <div>My Age is {user.age}</div>
//                   <div>
//                     <button
//                       onClick={() => this.props.handleDeleteUser(user.id)}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                   <hr />
//                 </div>
//               );
//             })}
//           </>
//         )}
//       </div>
//     );
//   }
// }

const DisPlayInfor = (props) => {
  const { listUser } = props;

  const [isShowHideListUser, setShowHideListUser] = useState(true);

  const handleShowHideListUser = () => {
    setShowHideListUser(!isShowHideListUser);
  };

  return (
    <div className="display-infor-container">
      <div>
        <span onClick={() => handleShowHideListUser()}>
          {isShowHideListUser === true ? "Hide list users" : "Show list users"}
        </span>
      </div>
      {isShowHideListUser && (
        <>
          {listUser.map((user) => {
            return (
              <div key={user.id} className={+user.age >= 35 ? "green" : "red"}>
                <div>My name is {user.name}</div>
                <div>My Age is {user.age}</div>
                <div>
                  <button onClick={() => props.handleDeleteUser(user.id)}>
                    Delete
                  </button>
                </div>
                <hr />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default DisPlayInfor;
