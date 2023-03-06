interface Start {
  localDate?: string;
}

interface Date {
  start?: Start;
}

interface Image {
  url: string;
}

export default interface Event {
  name: string;
  id: string;
  images: Image[];
  date?: Date;
}
