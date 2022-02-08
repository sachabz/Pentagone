import { defineStore } from "pinia";

export const usePatrimoineStore = defineStore({
  id: "patrimoine",
  state: () => ({
    rows: [
      {
        title: "Actif Immobilier",
        isImmo: true,
        isExpense: false,
        rows: [
          { name: "Immobilier locatif", amount: 0 },
          { name: "Autres", amount: 0 },
        ],
      },
      {
        title: "Actifs Financiers liquide",
        isImmo: false, isLiquide: true,
        rows: [
          { name: "Comptes courants", amount: 0 },
          { name: "Livret A", amount: 0 },
          { name: "LDD", amount: 0 },
          { name: "Autres", amount: 0 },
        ],
      },
      {
        title: "Actifs Financiers non liquides",
        isImmo: false, isLiquide: false,
        rows: [
          { name: "PEA", amount: 0 },
          { name: "PEL", amount: 0 },
          { name: "Autres", amount: 0 },
        ],
      },
      {
        title: "Passifs Immobilier (crédits)",
        isImmo: true, isExpense: true,
        rows: [
          { name: "Immobilier locatif", amount: 0 },
          { name: "Autres", amount: 0 },
        ],
      },
    ],
  }),
  getters: {
    getTotal(state): (index: number) => number {
      return (index: number) => {
        let value = 0;
        for (const row of state.rows[index].rows) {
          value += row.amount;
        }
        return value;
      };
    },
    getTotalImmo(state): number {
      const reducer = (previousValue: number, currentValue: number) =>
        previousValue + currentValue;
      const totalImmoExpense = state.rows
        .filter((element) => element.isImmo && element.isExpense)
        .map((element) =>
          element.rows.map((child) => child.amount).reduce(reducer)
        )
        .reduce(reducer);
      const totalImmoIncome = state.rows
        .filter((element) => element.isImmo && !element.isExpense)
        .map((element) =>
          element.rows.map((child) => child.amount).reduce(reducer)
        )
        .reduce(reducer);
      return totalImmoIncome - totalImmoExpense;
    },
    getTotalFiancier(state): number {
      const reducer = (previousValue: number, currentValue: number) =>
        previousValue + currentValue;
      const totalFinancierLiquide = state.rows
        .filter((element) => !element.isImmo && element.isLiquide)
        .map((element) =>
          element.rows.map((child) => child.amount).reduce(reducer)
        )
        .reduce(reducer);
      const totalFinancierNonLiquide = state.rows
        .filter((element) => !element.isImmo && !element.isLiquide)
        .map((element) =>
          element.rows.map((child) => child.amount).reduce(reducer)
        )
        .reduce(reducer);
      return totalFinancierLiquide + totalFinancierNonLiquide;
    },
    getTotalPatrimoine(): number {
      return this.getTotalImmo + this.getTotalFiancier;
    },
  },
  actions: {
    updateRow(title: string, name: string, amount: number) {
      const table = this.rows.find((element) => element.title === title);
      const row = table?.rows.find((element) => element.name === name);
      if (row !== undefined) {
        row.amount = amount;
      }
    },
  },
});
