import { defineStore } from "pinia";

export const useCashflowStore = defineStore({
    id: "cashflow",
    state: () => ({
        rows: [
            {
                title: "Revenus actifs par mois", isActif: true, rows: [
                    { name: "Salaire", amount: 3000 },
                    { name: "Autres", amount: 0 }
                ]
            },
            {
                title: "Revenus Passifs par mois", isActif: true, rows: [
                    { name: "Immobilier locatif", amount: 0 },
                    { name: "Dividendes", amount: 0 },
                    { name: "Autres", amount: 0 }
                ]
            },
            {
                title: "Depenses par mois", isPassif: true, rows: [
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
                title: "Dépenses Passifs par mois", isPassif: true, rows: [
                    { name: "Immobilier locatif", amount: 0 },
                    { name: "Dividendes", amount: 0 },
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
            let valueActif = 0;
            for (const table of state.rows) {
                if (table.isActif) {
                    for (const row of table.rows) {
                        valueActif += row.amount;
                    }
                }
            }
            return valueActif;
        },
        getTotalPassif: (state) => {
            let valuePassif = 0;
            for (const table of state.rows) {
                if (table.isPassif) {
                    for (const row of table.rows) {
                        valuePassif += row.amount;
                    }
                }
            }
            return valuePassif;
        },
        getTotalCF: () => {
            if (this !== undefined) {
                // let valueCF = 0;
                // const valueA = getTotalActif();
                // const valueB = getTotalPassif();
                // valueCF = valueA - valueB;
                // return valueCF;
                const test = this.getTotalActif() + 9;
                console.log(test);
                return test;
            } else {
                console.log(this);
            }
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
