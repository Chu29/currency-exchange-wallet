import { APP_ID } from "../utils/constants";
import { api } from "./api";

export const getRates = async () => {
  const res = api.get("latest.json", {
    searchParams: {
      app_id: APP_ID,
    },
  });
  return res.json();
};
