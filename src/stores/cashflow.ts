import { defineStore } from "pinia";

export const useCashflowStore = defineStore({
  id: "cashflow",
  state: () => ({
    rows: [
      {
        title: "Revenus actifs par mois",
        isActive: true,
        isExpense: false,
        rows: [
          { name: "Salaire", amount: 3000 },
          { name: "Autres", amount: 0 },
        ],
      },
      {
        title: "Revenus Passifs par mois",
        isActive: false,
        isExpense: false,
        rows: [
          { name: "Immobilier locatif", amount: 0 },
          { name: "Dividendes", amount: 0 },
          { name: "Autres", amount: 0 },
        ],
      },
      {
        title: "Depenses par mois",
        isActive: true,
        isExpense: true,
        rows: [
          { name: "Impôts sur le revenu", amount: 0 },
          { name: "Loyer", amount: 0 },
          { name: "Taxes d'habitation", amount: 0 },
          { name: "Charges logement (edf, internet...", amount: 0 },
          { name: "Transport", amount: 0 },
          { name: "Nourriture", amount: 0 },
          { name: "Loisir", amount: 0 },
          { name: "Autres", amount: 0 },
        ],
      },
      {
        title: "Dépenses Passifs par mois",
        isActive: false,
        isExpense: true,
        rows: [
          { name: "Immobilier locatif", amount: 0 },
          { name: "Dividendes", amount: 0 },
          { name: "Autres", amount: 0 },
        ],
      },
    ],
  }),
  getters: {
    getTotal: (state) => {
      return (index: number) => {
        let value = 0;
        for (const row of state.rows[index].rows) {
          value += row.amount;
        }
        return value;
      };
    },
    getTotalActif(state): number {
      const reducer = (previousValue: number, currentValue: number) =>
        previousValue + currentValue;
      const totalActiveExpense = state.rows
        .filter((element) => element.isActive && element.isExpense)
        .map((element) =>
          element.rows.map((child) => child.amount).reduce(reducer)
        )
        .reduce(reducer);
      const totalActiveIncome = state.rows
        .filter((element) => element.isActive && !element.isExpense)
        .map((element) =>
          element.rows.map((child) => child.amount).reduce(reducer)
        )
        .reduce(reducer);
      return totalActiveIncome - totalActiveExpense;
    },
    getTotalPassif(state): number {
      const reducer = (previousValue: number, currentValue: number) =>
        previousValue + currentValue;
      const totalActiveExpense = state.rows
        .filter((element) => !element.isActive && element.isExpense)
        .map((element) =>
          element.rows.map((child) => child.amount).reduce(reducer)
        )
        .reduce(reducer);
      const totalActiveIncome = state.rows
        .filter((element) => !element.isActive && !element.isExpense)
        .map((element) =>
          element.rows.map((child) => child.amount).reduce(reducer)
        )
        .reduce(reducer);
      return totalActiveIncome - totalActiveExpense;
    },
    getTotalCF(): number {
      let valueCF = 0;
      const valueA = this.getTotalActif;
      const valueB = this.getTotalPassif;
      valueCF = valueA - valueB;
      return valueCF;
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
