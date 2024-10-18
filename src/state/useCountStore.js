import { create } from "zustand";

export const useCountStore = create((set, get) => ({
  cost: "",
  gallons: "",
  miles: "",
  perGallonCost: "",
  mpg: "",

  // Test this
  setValue: (key, value) => {
    set((state) => ({ [key]: value }));
  },

  getValue: (key) => {
    return get()[key];
  },

  deleteEverything: () =>
    set({ cost: "", gallons: "", miles: "", perGallonCost: "", mpg: "" }),

  autoPopulate: () => {
    let cost = get().cost;
    let gallons = get().gallons;
    let miles = get().miles;
    let perGallonCost = get().perGallonCost;

    if (cost > 0 && perGallonCost > 0) {
      const calcGallons = cost / perGallonCost;
      set((state) => ({ gallons: calcGallons.toFixed(3) }));
      gallons = get().gallons;
    } else if (perGallonCost > 0 && gallons > 0) {
      const calcCost = perGallonCost * gallons;
      set((state) => ({ cost: calcCost.toFixed(2) }));
      cost = get().cost;
    } else if (cost > 0 && gallons > 0) {
      const calcCostPerGallon = cost / gallons;
      set((state) => ({ perGallonCost: calcCostPerGallon.toFixed(3) }));
    }

    if (gallons > 0 && miles > 0) {
      const calcMpg = miles / gallons;
      set((state) => ({ mpg: calcMpg.toFixed(1) }));
      return;
    }
  },

  getRequestBody: () => {
    return {
      cost: get().cost,
      gallons: get().gallons,
      miles: get().miles,
      perGallonCost: get().perGallonCost,
      mpg: get().mpg,
    };
  },
}));
