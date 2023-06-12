import moment from "moment-timezone";

export const formatDate = (date: Date, timeZone: string) => {
  return moment(date).tz(timeZone).format("YYYY-MM-DD HH:mm:ss Z");
};
