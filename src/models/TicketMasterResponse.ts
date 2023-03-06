import Event from "./Event";

interface Embedded {
  events: Event[];
}

export default interface TicketMasterResponse {
  _embedded: Embedded;
}
