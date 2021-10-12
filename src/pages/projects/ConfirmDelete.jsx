import React from "react";

const ConfirmDelete = ({ setOpenModal, onClick }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            className="close"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            &times;
          </button>
        </div>
        <div className="ten wide column">
          <div className="body">
            <p>
              <strong>Are you sure you want to delete this project?</strong>
            </p>
          </div>
        </div>
        <div
          className="four wide column"
          style={{ marginLeft: "auto", marginTop: "2rem" }}
        >
          <div className="ui buttons">
            <button
              className="ui primary button"
              onClick={() => {
                setOpenModal(false);
              }}
            >
              Cancel
            </button>
            <div className="or" />
            <button className="ui red button" onClick={onClick}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;
