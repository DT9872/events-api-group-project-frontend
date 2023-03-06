import axios from "axios";
import Event from "../models/Event";
import TicketMasterResponse from "../models/TicketMasterResponse";

const baseURL: string = "https://app.ticketmaster.com/discovery/v2/events";
const key: string = process.env.REACT_APP_TICKET_KEY || "";

export const getEvents = async (): Promise<TicketMasterResponse> => {
  return (await axios.get(baseURL, { params: { apikey: key } })).data;
};

export const getEventsByKeyword = async (
  keyword: string
): Promise<TicketMasterResponse> => {
  return (
    await axios.get(baseURL, {
      params: { apikey: key, keyword: keyword },
    })
  ).data;
};

export const getEventById = async (id: string): Promise<Event> => {
  return (
    await axios.get(baseURL + "/" + encodeURIComponent(id), {
      params: { apikey: key },
    })
  ).data;
};

export const getEventByDate = async (
  id: string
): Promise<TicketMasterResponse> => {
  return (
    await axios.get(baseURL, {
      params: { apikey: key, startDateTime: Date },
    })
  ).data;
};
