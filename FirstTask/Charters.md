# Monefy App Exploratory Testing - Onboarding Flow

## Exploratory Testing Charters

**Charter:**  
Explore the onboarding flow of the Monefy app, including the three welcome screens, the promotional offer screen, and contextual help tooltips shown during first-time use. The goal is to assess the usability, content clarity, and visual consistency of the onboarding experience.

**Scope:**  
- Initial onboarding screens (Welcome, Spend Control, Financial Goals)  
- Promotional offer screen after onboarding  
- Help texts/tooltips displayed on first app launch  

---

## Findings

- ✅ All onboarding screens appeared in the expected sequence with smooth transitions.
- 🟠 The "I'm Ready" button was partially cut off on devices with smaller screens.
- 🟠 The close (X) button for the welcome offer was difficult to see in high-contrast accessibility mode.
- 🔴 One of the contextual help texts included a grammatical error: *"You're ready to track you're expenses"* instead of *"your expenses"*.
- ✅ Contextual help texts were displayed correctly and guided the user through initial actions.

---

## Prioritization of the Charter

**Priority: High**  
Reason: Onboarding is a user’s first interaction with the app and has a direct impact on user retention, perception of quality, and accessibility. Any issues in this flow could lead to drop-off before the user reaches the core functionality of the app.

---

## Risks to Mitigate

- Accessibility issues may prevent users from dismissing overlays, particularly for visually impaired users.
- UI clipping on smaller screens could block essential navigation, affecting usability.
- Grammar or content issues can reduce user trust and app professionalism, especially in finance-related apps where accuracy is expected.

---
