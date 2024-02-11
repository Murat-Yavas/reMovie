import { useSelector } from "react-redux";
import CardUI from "../UI/Card/CardUI";

function WatchList() {
  const list = useSelector((state) => state.user.userWatchList);

  if (list.length === 0) {
    return (
      <div
        style={{ minHeight: "82vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <h2 className="overflow-hidden">Your Watch List is currently empty</h2>
      </div>
    );
  }

  return (
    <>
      <div className="row">
        {list
          ? list.map((item) => (
              <CardUI item={item} btnText="Remove" key={item.id} />
            ))
          : ""}
      </div>
    </>
  );
}

export default WatchList;
