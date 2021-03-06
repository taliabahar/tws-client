import React from "react";
// import ArticleCountModal from "../Article/ArticleCountModal";
import { Link } from "react-router-dom";

function Header() {
  // const [modalCount, setModalCount] = useState(false);

  // const openModalCount = () => setModalCount(true);
  // const closeModalCount = () => setModalCount(false);

  const handleItemClick = () => {
    // openModalCount();
  };

  return (
    <React.Fragment>
      <div className="ui borderless menu centered">
        <div
          className="ui container"
          style={{
            width: "100vw",
            padding: "0 15px",
          }}
        >
          <a
            href="https://www.google.com/"
            className="fitted item"
            target="_blank"
          >
            <i
              className="facebook f icon"
              style={{
                margin: "0 6px",
              }}
            ></i>
          </a>
          <a
            href="https://twitter.com/get_tws"
            target="_blank"
            className="fitted item"
          >
            <i
              className="twitter icon"
              style={{
                margin: "0 6px",
              }}
            ></i>
          </a>
          <a
            href="https://www.instagram.com/get.tws/"
            target="_blank"
            className="fitted item"
          >
            <i
              className="instagram  icon"
              style={{
                margin: "0 6px",
              }}
            ></i>
          </a>
          <div className="fitted right item">
            <a className="item" href="mailto:askthewholestory@gmail.com">
              <p>
                <i
                  style={{
                    paddingTop: "5px",
                    marginRight: "-2px",
                  }}
                  className="mail outline icon"
                ></i>
              </p>
            </a>
            <a className="item" onClick={() => handleItemClick()}>
              <i className="cog icon"></i>
            </a>
          </div>
        </div>
      </div>
      {/* <ArticleCountModal
        header="Edit the number of articles"
        description="To continue please enter the number of articles you would like to be served"
        modal={modalCount}
        closeModal={closeModalCount}
      /> */}
    </React.Fragment>
  );
}

export default Header;
