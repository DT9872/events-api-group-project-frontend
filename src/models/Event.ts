interface Start {
  localDate: string;
  localTime: string;
}

interface Date {
  start: Start;
}

interface State {
  stateCode: string;
}

interface City {
  name: string;
}

interface Venue {
  name: string;
  city: City;
  state: State;
}

interface Embedded {
  venues: Venue[];
}

interface Image {
  url: string;
}

export default interface Event {
  name: string;
  id: string;
  images: Image[];
  _embedded: Embedded;
  // venues: Venue[];
  dates: Date;
}
