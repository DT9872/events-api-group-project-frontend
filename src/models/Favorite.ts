import Event from "./Event";

export default interface Favorite {
  _id?: string;
  event: Event;
  userId?: string;
}
