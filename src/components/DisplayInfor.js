import React from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";
class DisPlayInfor extends React.Component {
  state = {
    isShowListUser: true,
  };
  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    });
  };
  render() {
    const { listUser } = this.props;
    return (
      <div className="display-infor-container">
        {/* <img src={logo} /> */}
        <div>
          <span
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.isShowListUser === true
              ? "Hide list user"
              : "Show list user"}
          </span>
        </div>
        {this.state.isShowListUser && (
          <>
            {listUser.map((user) => {
              return (
                <div
                  key={user.id}
                  className={+user.age >= 35 ? "green" : "red"}
                >
                  <div>My name is {user.name}</div>
                  <div>My Age is {user.age}</div>
                  <div>
                    <button
                      onClick={() => this.props.handleDeleteUser(user.id)}
                    >
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
  }
}

export default DisPlayInfor;
