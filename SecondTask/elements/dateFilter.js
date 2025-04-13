// dateFilter.js
output.dateFilter = {
    // Navigation elements
    navigation: {
        openButton: "Open navigation",
        allAccounts: {
            text: "All accounts",
            index: 1
        }
    },
    
    // Date filter buttons
    dateButtons: {
        dayPeriod: "com.monefy.app.lite:id/day_period_button",
        weekPeriod: "com.monefy.app.lite:id/week_period_button",
        customPeriod: "com.monefy.app.lite:id/custom_period_button",
        showDatePicker: "com.monefy.app.lite:id/show_datepicker_button"
    },
    
    // Date picker elements
    datePicker: {
        title: "SELECT DATE",
        confirmButton: "com.monefy.app.lite:id/confirm_button",
        headerToggle: "com.monefy.app.lite:id/mtrl_picker_header_toggle",
        textInputDate: "com.monefy.app.lite:id/mtrl_picker_text_input_date",
        textInputRangeEnd: "com.monefy.app.lite:id/mtrl_picker_text_input_range_end",
        sampleDate: "03/09/2025",
        sampleEndDate: "03/10/2025",
        datePreview: "Mar 9, 2025"
    },
    
    // Date display
    dateDisplay: {
        singleDay: "Sunday, 9 March",
        nextDay: "Monday, 10 March",
        weekRange: "9 - 15 March",
        customRange: "9 Mar - 10 Mar"
    },
    
    // Balance display
    balance: {
        initial: "Balance $0.00",
        afterFirstIncome: "Balance $20.00",
        afterFirstExpense: "Balance $15.00",
        weekTotal: "Balance $30.00"
    },
    
    // Income elements
    income: {
        button: "com.monefy.app.lite:id/income_button",
        buttonTitle: "com.monefy.app.lite:id/income_button_title",
        title: "New income",
        numPad: {
            initialValue: {
                text: "0",
                index: 0
            },
            button2: "com.monefy.app.lite:id/buttonKeyboard2",
            button0: "com.monefy.app.lite:id/buttonKeyboard0",
            enteredAmount: "20"
        },
        actionButton: "com.monefy.app.lite:id/keyboard_action_button",
        category: {
            image: "com.monefy.app.lite:id/imageView",
            imageIndex: 0
        },
        recurringMessage: "Recurring records are now available in Monefy Pro!",
        balanceMessage: "Tap 'Balance' or a chart slice to see all records"
    },
    
    // Expense elements
    expense: {
        button: "com.monefy.app.lite:id/expense_button",
        title: "New expense",
        numPad: {
            initialValue: {
                text: "0",
                index: 0
            },
            button5: "com.monefy.app.lite:id/buttonKeyboard5",
            enteredAmount: {
                text: "5",
                index: 0
            }
        },
        actionButton: "com.monefy.app.lite:id/keyboard_action_button",
        category: {
            image: "com.monefy.app.lite:id/imageView",
            imageIndex: 1
        }
    },
    
    // Tutorial tooltips
    tooltips: {
        previousPeriod: "Tap this label or swipe left to see records for the previous period",
        carryOver: "Enable 'Carry over' to take previous periods balance into account"
    },
    
    // Other UI elements
    ui: {
        overflowMenu: "com.monefy.app.lite:id/overflow"
    }
}
