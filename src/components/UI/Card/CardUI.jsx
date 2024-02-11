import "./CardUI.css";
import Card from "react-bootstrap/Card";
import ButtonUI from "../Button/ButtonUI";
import { textTruncate } from "../../../helpers/textTruncate";

const CardUI = ({ item, btnText, onClick, ...props }) => {
  return (
    <>
      {item.overview === "" || !item.poster_path ? null : (
        <div className="col-12 col-md-4 col-xl-3 movie-card" {...props}>
          <div className="movie-card-wrapper">
            <img
              src={`http://image.tmdb.org/t/p/original${item.poster_path}`}
              alt={`${item}-img`}
              className="card-image"
            />
            <h3 className="card-title">{item.title}</h3>
            <p className="card-text">{textTruncate(item.overview, 100)}</p>
            <div className="card-button">
              <button className="btn btn-danger " onClick={onClick}>
                {btnText}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
    // <Card className="col-3 " {...props}>
    //   <Card.Img
    //     variant="top"
    //     src={`http://image.tmdb.org/t/p/w500${item.poster_path}`}
    //     alt={`${item}-img`}
    //     className="card-img"
    //   />
    //   <Card.Body>
    //     <Card.Title className="card-title">{item.title}</Card.Title>
    //     <Card.Text className="card-text">
    //       {textTruncate(item.overview, 100)}
    //     </Card.Text>
    //     <ButtonUI className="btn btn-danger card-button" onClick={onClick}>
    //       {btnText}
    //     </ButtonUI>
    //   </Card.Body>
    // </Card>
  );
};

export default CardUI;
