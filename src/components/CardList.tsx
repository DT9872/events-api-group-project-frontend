import Event from "../models/Event";
import Card from "./Card";
import "./CardList.css";

interface Props {
  eventArrayProp: Event[];
}

const CardList = ({ eventArrayProp }: Props) => {
  return (
    <div className="CardList">
      <h2>Trending Events</h2>
      <ul>
        {eventArrayProp.map((item) => (
          <Card eventProp={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default CardList;
