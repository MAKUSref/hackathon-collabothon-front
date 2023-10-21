import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type GlobalGoalType =
  | "NO_POVERTY"
  | "ZERO_HUNGER"
  | "GOOD_HEALTH_AND_WELLBEING"
  | "QUALITY EDUCATION"
  | "GENDER EQUALITY"
  | "CLEAN_WATER_AND_SANITATION"
  | "AFFORDABLE_AND_CLEAN_ENERGY"
  | "DECENT_WORK_AND_ECONOMIC_GROWTH"
  | "INDUSTRY_INNOVATION_AND_INFRASTRUCTURE"
  | "REDUCED INEQUALITIES"
  | "SUSTAINABLE_CITIES_AND_COMMUNITIES"
  | "RESPONSIBLE_CONSUMPTION_AND_PRODUCTION"
  | "CLIMATE_ACTION"
  | "LIFE_BELOW_WATER"
  | "LIFE_ON_LAND"
  | "PEACE_JUSTICE_AND_STRONG_INSTITUTIONS"
  | "PARTNERSHIPS_FOR_THE_GOALS";

export interface GlobalGoal {
  goal: string;
  id: number;
  type: GlobalGoalType;
  color?: string;
  icon?: string;
}

export interface GlobalGoalDetails extends GlobalGoal {
  goal: string;
  name: string;
  priority: string;
  definition: string;
  methodology: string;
}

interface Response {
  "1-1-b": {
    metadata: GlobalGoalDetails[];
  }[];
}

export const globalGoalsApi = createApi({
  reducerPath: "globalGoalsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: ``,
  }),
  endpoints: (builder) => ({
    getGlobalGoal: builder.query({
      query: () =>
        "https://api.github.com/repos/statisticspoland/sdg-indicators-pl/contents/api/v1/en/national/1/1-1-b.json",
      transformResponse: (res: Response) => {
        const globalGoal: GlobalGoalDetails = {
          ...res["1-1-b"][0].metadata[0],
          id: 1,
          type: "NO_POVERTY",
        };
        return globalGoal;
      },
    }),
  }),
});

export const { useGetGlobalGoalQuery } = globalGoalsApi;
