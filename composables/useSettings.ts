export const useSettings = () => {
  return useAsyncData("settings", () => queryContent("/settings").findOne());
};
