import axios from "axios";
import TicketMasterResponse from "../models/TicketMasterResponse";

const baseURL: string = "https://app.ticketmaster.com/discovery/v2/events";
const key: string = process.env.REACT_APP_TICKET_KEY || "";

export const getEvents = async (): Promise<TicketMasterResponse> => {
  return (await axios.get(baseURL, { params: { apikey: key } })).data;
};
