## Charters
---

### Charter 1: Add Expense & Income Flow

- **Objective**: Test adding a new expense and income, assigning them to available categories, and ensuring summary updates correctly.
- **Start Conditions**: App freshly launched, single account created, default currency.
- **Test Ideas**:
  - Add €20 expense in "Food"
  - Add €100 income in "Salary"
  - Attempt to leave amount field empty
  - Use special characters in notes
  - Check whether balance reflects change
- **Observations**:
  - Transactions appear immediately
  - Amount field accepts emojis (✔️)
  - Bug: Expense added without selecting a category does not show an error — silently fails
- **Notes**:
  - Would be good to have confirmation message or toast after successful entry

### Charter 2: View & Filter Transactions

- **Objective**: Explore the transaction history filtering capabilities across various time ranges (Day, Week, Month, Year, All, and Custom).
- **Start Conditions**: Multiple transactions recorded for different days and weeks; at least one expense and one income.
- **Test Ideas**:
  - Filter by Day: Verify only today's transactions appear.
  - Filter by Week: Check that transactions from Monday to Sunday are shown correctly.
  - Filter by Month and Year: Validate data consistency.
  - Use "All": Ensure it displays all historical records.
  - Apply a custom date range: From one week ago to today.
  - Try empty data ranges: Filter where no transactions exist.
- **Observations**:
  - Day/Week/Month filters work as expected.
  - In custom range, transactions display correctly, but totals don’t always match UI (❗ bug).
  - No feedback or message when there are no transactions in selected range.
- **Notes**:
  - Consider showing a placeholder or “No transactions found” message for empty results.
  - Summary values (total expenses/income) need clearer link to visible data.

### Charter 3: Currency Change & Conversion

- **Objective**: Test changing the application's currency setting and observe how it impacts the display and calculation of existing transactions.
- **Start Conditions**: At least 3 transactions added under the default currency (e.g., EUR).
- **Test Ideas**:
  - Change currency to USD, GBP, or other options.
  - Add a new transaction after changing currency.
  - Observe how existing entries are displayed — converted or original values?
  - Restart app to test persistence of selected currency.
  - Try changing currency multiple times in a row.
- **Observations**:
  - Currency symbol updates immediately on UI.
  - Existing values are **not** converted — they remain the same numerically, which may confuse users (⚠️ design issue).
  - Currency setting persists after restart (✔️).
  - No crash or freeze during currency changes.
- **Notes**:
  - App should clarify if it converts historical data or just changes the symbol.
  - Lack of exchange rate handling may be a limitation or premium feature.

## 🐞 Bugs

---

### 🔹 Bug Title: App crashes when adding expense without selecting a category

- **ID**: BUG-001
- **Severity**: High
- **Priority**: High
- **Environment**: Android 13, Monefy App v1.13.0
- **Reported On**: 2025-04-08
- **Reported By**: [Your Name]

**📝 Description**:  
When a user tries to add an expense without selecting a category, the app crashes instead of prompting an error or default behavior.

**📲 Steps to Reproduce**:
1. Launch the app.
2. Tap on "Add Expense".
3. Enter any amount (e.g., 10).
4. Do **not** select a category.
5. Tap the save icon (✓).

**✅ Expected Result**:  
The app should prevent submission or show an error message like "Please select a category."

**🚫 Actual Result**:  
App crashes immediately upon clicking the “✓” save button.

**📷 Screenshots / Logs**:
_Add screenshot or crash log here if available._

---

