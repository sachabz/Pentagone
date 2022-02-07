import { defineStore } from "pinia";
import { getTransitionRawChildren } from "vue";

export const useCashflowStore = defineStore({
    id: "cashflow",
    state: () => ({
        rows: [
            {
                title: "Revenus actifs par mois", isActif: true, rows: [
                    { name: "salaire", amount: 3000 },
                    { name: "autres", amount: 0 }
                ]
            },
            {
                title: "Revenus Passifs par mois", isActif: true, rows: [
                    { name: "Appartements", amount: 0 },
                    { name: "Garages", amount: 0 },
                    { name: "Autres", amount: 0 }
                ]
            },
            {
                title: "Depenses par mois", rows: [
                    { name: "Impôts sur le revenu", amount: 0 },
                    { name: "Loyer", amount: 0 },
                    { name: "Taxes d'habitation", amount: 0 },
                    { name: "Charges logement (edf, internet...", amount: 0 },
                    { name: "Transport", amount: 0 },
                    { name: "Nourriture", amount: 0 },
                    { name: "Loisir", amount: 0 },
                    { name: "Autres", amount: 0 }
                ]
            },
            {
                title: "Dépenses Passifs par mois", rows: [
                    { name: "Appartements", amount: 0 },
                    { name: "Garages", amount: 0 },
                    { name: "Autres", amount: 0 }
                ]
            }
        ]
    }),
    getters: {
        getTotal: (state) => {
            return (index: number) => {
                let value = 0;
                for (const row of state.rows[index].rows) {
                    value += row.amount;
                }
                return value;
            }
        },
        getTotalActif: (state) => {
            let value = 0;
            for (const table of state.rows) {
                if (table.isActif) {
                    for (const row of table.rows) {
                        value += row.amount;
                    }
                }
            }
            return value;
        },

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
