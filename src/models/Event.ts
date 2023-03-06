interface Image {
  url: string;
}

export default interface Event {
  name: string;
  id: string;
  images: Image[];
}
