// onboarding.js - Contains all onboarding screen elements
output.onboarding = {
    // Welcome Screen
    welcomeScreen: {
        title: "Say hi to your new finance tracker",
        getStartedBtn: "GET STARTED",
        continueBtn: "com.monefy.app.lite:id/buttonContinue"
    },

    // Control Screen
    controlScreen: {
        title: "Control your spend and start saving",
        amazingBtn: "AMAZING"
    },

    // Goals Screen
    goalsScreen: {
        title: "Together we’ll reach your financial goals",
        readyBtn: "I’M READY"
    },

    // Welcome Offer Screen
    welcomeOfferScreen: {
        title: "Claim your one-time welcome offer",
        closeBtn: "com.monefy.app.lite:id/buttonClose"
    },

    // Main Screen
    mainScreen: {
        title: "Monefy",
        balanceAmount: "com.monefy.app.lite:id/balance_amount",
        addExpenseText: "Tap to add a new expense record",
        categoryIconText: "Or tap the category icon to add a record faster",
        transferBtnText: "Tap the 'Transfer' button to move money between accounts",
        currencyText: "Main currency can be changed here",
        overflowMenu: "com.monefy.app.lite:id/overflow",
        settingsText: "com.monefy.app.lite:id/settings_textview",
        incomeButton: "com.monefy.app.lite:id/income_button"
    }
}

// Execute the onboarding flow
output.commands = [
    { clearState: {} },
    { launchApp: {} },
    
    // Welcome Screen
    { assertVisible: output.onboarding.welcomeScreen.title },
    { assertVisible: output.onboarding.welcomeScreen.getStartedBtn },
    { tapOn: { id: output.onboarding.welcomeScreen.continueBtn } },
    
    // Control Screen
    { assertVisible: output.onboarding.controlScreen.title },
    { assertVisible: output.onboarding.controlScreen.amazingBtn },
    { tapOn: { id: output.onboarding.welcomeScreen.continueBtn } },
    
    // Goals Screen
    { assertVisible: output.onboarding.goalsScreen.title },
    { assertVisible: output.onboarding.goalsScreen.readyBtn },
    { tapOn: { id: output.onboarding.welcomeScreen.continueBtn } },
    
    // Welcome Offer Screen
    { assertVisible: output.onboarding.welcomeOfferScreen.title },
    { assertVisible: { id: output.onboarding.welcomeOfferScreen.closeBtn } },
    { tapOn: { id: output.onboarding.welcomeOfferScreen.closeBtn } },
    
    // Main Screen
    { assertVisible: output.onboarding.mainScreen.title },
    { assertVisible: { id: output.onboarding.mainScreen.balanceAmount } },
    { assertVisible: output.onboarding.mainScreen.addExpenseText },
    { tapOn: output.onboarding.mainScreen.addExpenseText },
    
    { assertVisible: output.onboarding.mainScreen.categoryIconText },
    { tapOn: output.onboarding.mainScreen.categoryIconText },
    
    { assertVisible: output.onboarding.mainScreen.transferBtnText },
    { tapOn: output.onboarding.mainScreen.transferBtnText },
    
    { assertVisible: output.onboarding.mainScreen.currencyText },
    { tapOn: output.onboarding.mainScreen.currencyText },
    
    { assertVisible: { id: output.onboarding.mainScreen.overflowMenu } },
    { tapOn: { id: output.onboarding.mainScreen.overflowMenu } },
    
    { assertVisible: { id: output.onboarding.mainScreen.settingsText } },
    { assertVisible: { id: output.onboarding.mainScreen.incomeButton } }
]
  