# Exploratory Testing Charter: Monefy App Onboarding Flow
 
**Duration:** 30 minutes  
**Device:** [Pixel 7 Pro, Android 16]  
**App Version:** [version 1.18.0 com.monefy.app.lite]  
**Platform:** Android

---

## Charter

Explore the onboarding experience of the Monefy app, including the initial three screens, the welcome offer screen, and the four contextual help texts. Identify any usability issues, inconsistencies, or functional defects affecting the first-time user experience.

---

## Scope

- Onboarding screens: Welcome, Spend Control, Financial Goals  
- Welcome offer modal  
- First-use contextual help texts  

---

## Test Notes

### Onboarding Screens

#### Welcome Screen
- Verified welcome message is displayed.
- Tapped on **"GET STARTED"** button.

#### Spend Control Screen
- Confirmed message: *"Control your spend and start saving"*.
- Tapped on **"AMAZING"** button.

#### Financial Goals Screen
- Observed message: *"Together we’ll reach your financial goals"*.
- Tapped on **"I'M READY"** button.

---

### Welcome Offer Screen

- Verified the welcome offer modal appears.
- Tapped on the **close button (X)** to dismiss.

---

### First-Use Help Texts

- Observed four contextual help texts upon entering the main app screen.
- Navigated through each help text using **"Next"** or similar button.

---

## Findings

1. **UI Clipping:** The *"I'M READY"* button is partially cut off on smaller screens.
2. **Accessibility:** Close button on the welcome offer modal is not visible in high-contrast mode.
3. **Grammar Error:** One help text says: *"You're ready to track you're expenses"* — should be **"your expenses"**.

---

## Risks

- Inaccessible close button could block users from entering the main app.
- Poor grammar in onboarding can hurt user trust and app credibility.

---

## Recommendations

- Test UI across different screen sizes and resolutions.
- Validate all components in accessibility and contrast modes.
- Proofread all user-facing texts to maintain professionalism.

---
