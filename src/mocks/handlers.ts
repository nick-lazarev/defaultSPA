import { BASE_URL } from "@shared/libs";
import { http, HttpResponse } from "msw";

export const handlers = [
  http.post(`${BASE_URL}/login`, () => {
    return HttpResponse.json({
      token: "token",
    });
  }),
];
