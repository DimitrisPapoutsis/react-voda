import React, { Component } from "react";
import Modal from "react-modal";

const inputStyle = {
  padding: "10px 10px",
  border: "none",
  borderBottom: "2px solid #fff",
  backgroundColor: "transparent",
  color: "#fff"
};

const customStyle = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, .8)",
    zIndex: "2"
  },

  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    border: "none",
    marginRight: "-50%",
    backgroundColor: "transparent",
    transform: "translate(-50%, -50%)"
  }
};

//Modal.setAppElement(document.getElementById("header-search-id"));
Modal.setAppElement('#root');

class Search extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
          <img
            onClick={this.openModal}
            className="header-search"
            id="header-search-id"
            src="/img/searchIcon.png"
            alt="Search-Icon"
          />
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={customStyle}
            contentLabel="Search-Modal"
          >
          <form>
            <input style={inputStyle} type="search" />
          </form>
        </Modal>
      </div>
    );
  }
}
export default Search;
