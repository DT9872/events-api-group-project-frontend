import axios from "axios";
import Event from "../models/Event";
import TicketMasterResponse from "../models/TicketMasterResponse";

const baseURL: string = "https://app.ticketmaster.com/discovery/v2/events";
const key: string = process.env.REACT_APP_TICKET_KEY || "";

export const getEvents = async (
  keyword: string | null,
  city: string | null,
  stateCode: string | null,
  localDate: string | null
): Promise<TicketMasterResponse> => {
  const params = {
    apikey: key,
    ...(keyword ? { keyword } : {}),
    ...(city ? { city } : {}),
    ...(stateCode ? { stateCode } : {}),
    ...(localDate ? { localDate } : {}),
  };
  return (await axios.get(baseURL, { params })).data;
};

export const getEventById = async (id: string): Promise<Event> => {
  return (
    await axios.get(baseURL + "/" + encodeURIComponent(id), {
      params: { apikey: key },
    })
  ).data;
};
