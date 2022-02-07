import { defineStore } from "pinia";

export const useCashflowStore = defineStore({
    id: "cashflow",
    state: () => ({
        rows: [
            {
                title: "Revenus actifs par mois", rows: [
                    { name: "salaire", amount: 3000 },
                    { name: "autres", amount: 0 }
                ]
            },
            {
                title: "Revenus Passifs par mois", rows: [
                    { name: "autres", amount: 0 }
                ]
            },
            {
                title: "Depenses par mois", rows: [
                    { name: "Impôts", amount: 0 },
                    { name: "autres", amount: 0 }
                ]
            }
        ]
    }),
    getters: {
        getRows: (state) => state.rows,
    },
    actions: {
        updateRow(title: string, name: string, amount: number) {
            const table = this.rows.find(element => element.title === title);
            const row = table?.rows.find(element => element.name === name);
            if (row !== undefined) {
                row.amount = amount;
            }
        },
    },
});
