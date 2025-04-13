// incomeExpense.js
output.incomeExpense = {
    // Dashboard elements
    dashboard: {
        balance: "Balance $0.00",
        updatedBalance: "Balance $200.00",
        finalBalance: "Balance $180.00",
        incomeButton: "com.monefy.app.lite:id/income_button",
        expenseButton: "com.monefy.app.lite:id/expense_button"
    },
    
    // Income flow
    income: {
        title: "New income",
        numPad: {
            button2: "com.monefy.app.lite:id/buttonKeyboard2",
            button0: "com.monefy.app.lite:id/buttonKeyboard0"
        },
        amountText: "200",
        actionButton: "com.monefy.app.lite:id/keyboard_action_button",
        depositsCategory: {
            image: "com.monefy.app.lite:id/imageView",
            imageIndex: 0
        },
        recurringMessage: "Recurring records are now available in Monefy Pro!",
        confirmationMessage: "Deposits: $200.00 added",
        balanceMessage: "Tap 'Balance' or a chart slice to see all records"
    },
    
    // Expense flow
    expense: {
        title: "New expense",
        numPad: {
            button2: "com.monefy.app.lite:id/buttonKeyboard2",
            button0: "com.monefy.app.lite:id/buttonKeyboard0"
        },
        amountText: "20",
        actionButton: "com.monefy.app.lite:id/keyboard_action_button",
        carCategory: {
            image: "com.monefy.app.lite:id/imageView",
            imageIndex: 1
        },
        confirmationMessage: "Car: $20.00 added"
    }
}
