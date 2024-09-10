export interface Product {
    fundID: number,
    fundName: string,
    type: string,
    rating: number,
    riskLevel: RiskCategory,
    year1Return: number,
    year3Return: number,
    year5Return: number,
    aum: number,
    expenseRatio: number,
    inceptionDate: string,
    fundManager: string,
    predicted5YearReturn: number
}

enum RiskCategory {
    Medium = 'Medium',
    High = 'High',
    Low = 'Low',
}

interface rateOfReturnType {
    duration: number,
    return: number
}