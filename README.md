### 🔹 Second Task

📘 README file for the Second Task:  
[https://github.com/SaadiIftikhar/N26/blob/main/SecondTask/README.md](https://github.com/SaadiIftikhar/N26/blob/main/SecondTask/README.md)

---

### 🔹 Third Task

📘 README file for the Third Task:  
[https://github.com/SaadiIftikhar/N26/blob/main/ThirdTask/petstore-api-tests/README.md](https://github.com/SaadiIftikhar/N26/blob/main/ThirdTask/petstore-api-tests/README.md)

# Monefy App Exploratory Testing

**Note:** The flow was tested using the APK file located at `../SecondTask/monefy.apk`.

## Exploratory Testing Charters

### Charter 1: Onboarding Flow
**Objective:**  
Explore the onboarding flow of the Monefy app, including the three welcome screens, the promotional offer screen, and contextual help tooltips shown during first-time use. The goal is to assess the usability, content clarity, and visual consistency of the onboarding experience.

**Findings:**
- ✅ All onboarding screens appeared in the expected sequence with smooth transitions.
- ✅ Contextual help texts were displayed correctly and guided the user through initial actions.
- 🔴 **Text Inconsistency:** The letter "i" does not have a dot above it in the title text "Say hi to your new finance tracker" and the supporting text "You're amazing for taking this first step towards getting better control over your money and financial goals." This inconsistency is also present in the fourth onboarding screen title text "financial" and the supporting text "financial." This could lead to confusion and diminish the perceived professionalism of the app.
- 🔴 **Button Hidden Behind Overlay:** The "RESTORE" button is almost hidden behind the overlay "CLAIM MY OFFER" button on the one-time offer screen, requiring users to scroll up to see it fully. This could hinder user interaction and lead to frustration, as users may not notice the button.
- 🔴 **Expense and Income Buttons Change to Plus and Minus:** The expense button changes to a minus (-) sign and the income button changes to a plus (+) sign after repeatedly closing the one-time offer screen and reopening the app. This inconsistency could confuse users regarding the functionality of these buttons, potentially leading to misunderstandings about how to manage their finances.

**Prioritization:**
**Priority: High**  
Reason: Onboarding is a user's first interaction with the app and has a direct impact on user retention, perception of quality, and accessibility. Any issues in this flow could lead to drop-off before the user reaches the core functionality of the app.

**Risks to Mitigate:**
- Accessibility issues may prevent users from dismissing overlays, particularly for visually impaired users.
- UI clipping on smaller screens could block essential navigation, affecting usability.
- Grammar or content issues can reduce user trust and app professionalism, especially in finance-related apps where accuracy is expected.

---

### Charter 2: Income and Expense Functionality
**Objective:**  
Test the functionality of adding income and expenses to ensure that calculations are accurate and that entries are categorized correctly.

**Findings:**
- ✅ Income and expenses were calculated correctly and displayed under the appropriate categories.

**Prioritization:**
**Priority: Medium**  
Reason: Accurate financial tracking is crucial for user trust and satisfaction. Any discrepancies in income and expense calculations could lead to user frustration.

**Risks to Mitigate:**
- Incorrect calculations of income and expenses could lead to financial mismanagement for users.

---

### Charter 3: Filtering Functionality
**Objective:**  
Evaluate the filtering functionality by adding income and expenses to various days and checking the accuracy of the filters (by day, week, and interval).

**Findings:**
- ✅ Filtering by day, week, and interval worked as expected.
- 🔴 **Text Cutoff for Previous and Next Date:** When selecting a date from the hamburger menu, the text for the previous and next dates is cut off. This could lead to confusion for users trying to understand the selected date range, impacting their ability to analyze their financial data effectively.

**Prioritization:**
**Priority: Medium**  
Reason: The filtering functionality is important for users to analyze their financial data effectively. Any issues here could hinder user experience.

**Risks to Mitigate:**
- Filtering issues could prevent users from effectively analyzing their financial data.

---

## Risks to Mitigate for the Application

1. **Accessibility Issues:**  
   Ensure that all users, including those with disabilities, can navigate and use the app effectively. This includes proper labeling of buttons and ensuring overlays can be dismissed easily.

2. **User Trust:**  
   Maintain a high level of accuracy in financial calculations to build and retain user trust. Any discrepancies can lead to dissatisfaction and loss of users.

4. **Performance Issues:**  
   Ensure the app performs well under various conditions, including low connectivity and high user load. Slow performance can frustrate users and lead to abandonment.

5. **User Experience:**  
   Continuously assess and improve the user interface to ensure it is intuitive and user-friendly. Poor design can lead to confusion and hinder user engagement.

---

## Bugs

### Bug 1: Text Inconsistency

**Description:**  
There is a text inconsistency in the onboarding screens where the letter "i" does not have a dot above it in certain words.

**Steps to Reproduce:**  
1. Run the app for the first time with a clear state.
2. On the first screen, observe the title text: "Say hi to your new finance tracker" and the supporting text: "You're amazing for taking this first step towards getting better control over your money and financial goals."
3. In the title, the "i" in "finance" and the supporting text "financial" does not have a dot above it.

**Expected Result:**  
The letter "i" should have a dot above it, consistent with other instances of "i" in the text.

**Actual Result:**  
The letter "i" does not have a dot above it, unlike other words containing "i".

**Severity:**  
Low

**Priority:**  
High

**Notes:**  
This can be a design choice, but as I don't have access to the team, I just wanted to mention it. The same issue is present in the fourth onboarding screen title text "financial" and the supporting text "financial".

---

### Bug 2: Button Hidden Behind Overlay Button

**Description:**  
The "RESTORE" button is almost hidden behind the overlay "CLAIM MY OFFER" button on the one-time offer screen.

**Steps to Reproduce:**  
1. Run the app for the first time or with a clear state.
2. Go through the four onboarding screens.
3. After landing on the one-time offer screen, observe that the "RESTORE" button is almost hidden behind the overlay "CLAIM MY OFFER" button, requiring scrolling up to see it fully.

**Expected Result:**  
The "RESTORE" button should be fully visible without needing to scroll.

**Actual Result:**  
The "RESTORE" button is partially hidden behind the overlay button.

**Severity:**  
Medium

**Priority:**  
High

**Notes:**  
This issue could affect user experience, as users may not notice the "RESTORE" button if it is obscured by the overlay.

---

### Bug 3: Expense and Income Buttons Change to Plus and Minus

**Description:**  
The expense button changes to a minus (-) sign and the income button changes to a plus (+) sign after repeatedly closing the one-time offer screen and reopening the app.

**Steps to Reproduce:**  
1. Run the app for the first time with a clear state.
2. Go through the onboarding process.
3. Close the one-time offer screen.
4. When you land on the home screen of the app after closing the offer screen, the help text will show up (there are four in total at the start). Close the app, then open it again.
5. Repeat steps 3 and 4 two times because every time you open the app, the one-time offer screen shows, and the help text starts from the next one.
6. On the fourth time when you open the app and close the one-time offer screen, observe the home screen.

**Expected Result:**  
The expense and income buttons should remain the same and not change to plus and minus signs.

**Actual Result:**  
The expense button turns to a minus (-) sign and the income button turns to a plus (+) sign.

**Severity:**  
Medium

**Priority:**  
High

**Notes:**  
This issue could confuse users, as the change in button symbols may not be intuitive and could lead to misunderstandings about the app's functionality.

---

### Bug 4: Text Cutoff for Next and Previous Date

**Description:**  
The text for the previous and next date is cut off when selecting a date from the hamburger menu.

**Steps to Reproduce:**  
1. Run the app for the first time with a clear state.
2. Go through the onboarding process and close the one-time offer screen.
3. On the home screen, tap the hamburger menu on the top left side.
4. Tap "Choose Date" from the hamburger menu and select a date 3 or more days in the past or future.
5. You will be shown the home screen again with that date at the top; swipe left if the date is selected in the past and right if in the future.
6. Observe the top left and right side.

**Expected Result:**  
The previous and next date text should be fully visible without being cut off.

**Actual Result:**  
The previous and next date text is cut off.

**Severity:**  
Medium

**Priority:**  
High

---
