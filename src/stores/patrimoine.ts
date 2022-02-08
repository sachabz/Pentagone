import { defineStore } from "pinia";

export const usePatrimoineStore = defineStore({
    id: "patrimoine",
    state: () => ({
        rows: [
            {
                title: "Actif Immobilier", isImmo: true, rows: [
                    { name: "Immobilier locatif", amount: 0 },
                    { name: "Autres", amount: 0 }
                ]
            },
            {
                title: "Actifs Financiers liquide", isFinancier: true, rows: [
                    { name: "Comptes courants", amount: 0 },
                    { name: "Livret A", amount: 0 },
                    { name: "LDD", amount: 0 },
                    { name: "Autres", amount: 0 }
                ]
            },
            {
                title: "Actifs Financiers non liquides", isImmo: true, rows: [
                    { name: "PEA", amount: 0 },
                    { name: "PEL", amount: 0 },
                    { name: "Autres", amount: 0 }
                ]
            },
            {
                title: "Passifs Immobilier (crédits)", isPassif: true, rows: [
                    { name: "Immobilier locatif", amount: 0 },
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
        getTotalImmo: (state) => {
            let valueImmo = 0;
            for (const table of state.rows) {
                if (table.isImmo) {
                    for (const row of table.rows) {
                        valueImmo += row.amount;
                    }
                }
            }
            return valueImmo;
        },
        getTotalFiancier: (state) => {
            let valueFinancier = 0;
            for (const table of state.rows) {
                if (table.isFinancier) {
                    for (const row of table.rows) {
                        valueFinancier += row.amount;
                    }
                }
            }
            return valueFinancier;
        },
        getTotalPatrimoine: () => {
            if (this !== undefined) {
                // let valueCF = 0;
                // const valueA = getTotalActif();
                // const valueB = getTotalPassif();
                // valueCF = valueA - valueB;
                // return valueCF;
                return this.getTotalActif + 9
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
