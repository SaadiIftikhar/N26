# 📱 Maestro Android Test Suite

## Overview

This repository contains automated UI tests for the Monefy Android application using [Maestro](https://maestro.mobile.dev/). Follow the steps below to set up your environment and run the test flows.

---

## 🛠️ Setup Instructions

Note: In the following instructions, all path references will start from N26 (e.g., ..\N26\SecondTask). Please adjust the start of the path according to your own directory structure.

### 1. Clone and Prepare the Repository

1. **Download the Repository:**
   - Clone the repository from GitHub or download it as a ZIP file.

2. **Extract the Files:**
   - If downloaded as a ZIP, extract the contents to your desired location.

---

### 2. Install Java Development Kit (JDK)

1. **Download JDK:**
   - Visit the [Oracle JDK Downloads](https://www.oracle.com/java/technologies/javase-downloads.html) page and download the latest JDK for Windows.

2. **Install JDK:**
   - Run the installer and follow the on-screen instructions.

3. **Set JAVA_HOME Environment Variable:**
   - Open the **Environment Variables** window on your system and add a new system variable:
     - **Variable name:** `JAVA_HOME`
     - **Variable value:** Path to your JDK installation, e.g., `C:\Program Files\Java\jdk-17.0.2`
   - Click **OK** to save.

4. **Verify Installation:**
   - Open a new PowerShell window and run:
     ```powershell
     java --version
     ```
   - You should see the installed Java version.

---

### 3. Install Android Studio and Set ANDROID_HOME

1. **Download Android Studio:**
   - Visit the [Android Studio Download](https://developer.android.com/studio) page and download the installer for Windows.

2. **Install Android Studio:**
   - Run the installer and follow the setup wizard.

3. **Locate Android SDK Path:**
   - By default, the SDK is installed at:
     ```
     C:\Users\YourName\AppData\Local\Android\Sdk
     ```

4. **Set ANDROID_HOME Environment Variable:**
   - Open the **Environment Variables** window on your system and add a new system variable:
     - **Variable name:** `ANDROID_HOME`
     - **Variable value:** Path to your Android SDK, e.g., `C:\Users\YourName\AppData\Local\Android\Sdk`
   - Click **OK** to save.

5. **Update PATH Environment Variable:**
   - In the **Environment Variables** window, under **System variables**, find and select the `Path` variable, then click **Edit**.
   - Click **New** and add the following paths:
     ```
     %ANDROID_HOME%\tools
     %ANDROID_HOME%\tools\bin
     %ANDROID_HOME%\platform-tools
     ```
   - Click **OK** to save.

6. **Verify ADB Installation:**
   - Open a new PowerShell window and run:
     ```powershell
     adb --version
     ```
   - You should see the ADB version information.

---

### 4. Install Maestro

1. **Maestro:**
   - Maestro is already included in the project directory at `N26\\SecondTask\\bin`.

2. **Update PATH Environment Variable:**
   - In the **Environment Variables** window, under **System variables**, find and select the `Path` variable, then click **Edit**.
   - Click **New** and add the path to your Maestro `bin` directory, e.g.:
     ```
     ..\N26\SecondTask\bin
     ```
   - Click **OK** to save.

3. **Verify Maestro Installation:**
   - Open a new PowerShell window and run:
     ```powershell
     maestro --version
     ```
   - You should see the installed Maestro version.

---

### 5. Set Up and Launch Android Emulator

1. **Open Android Studio:**
   - Launch Android Studio.

2. **Access AVD Manager:**
   - Navigate to **More Actions** > **Virtual Device Manager**.

3. **Create a New Virtual Device:**
   - Click on **+** icon.
   - Select a hardware profile (e.g., Pixel 5) and click **Next**.
   - Choose a system image (e.g., Android 12.0) and click **Next**.
   - Configure the AVD name and settings, then click **Finish**.

4. **Launch the Emulator:**
   - In the **Virtual Device Manager**, click the **Play** button next to your newly created AVD to start the emulator.

   For more details, refer to the [official Android documentation](https://developer.android.com/studio/run/managing-avds).

---

### 6. Install the Monefy App on Emulator

1. **Locate the APK:**
   - Once emulator is running. Ensure the `monefy.apk` file is located at:
     ```
     ..\N26\SecondTask\monefy.apk
     ```

2. **Install the APK:**
   - Open a PowerShell window and run:
     ```powershell
     adb install ..\N26\SecondTask\monefy.apk
     ```
   - You should see a success message indicating the app was installed.

---

## 🚀 Running Maestro Test Flows

With the emulator running and the Monefy app installed, you can execute the test flows.

1. **Navigate to the Flows Directory:**
   - Open a PowerShell window and navigate to the flows directory:
     ```powershell
     cd ..\N26\SecondTask\flows
     ```

2. **Run Individual Test Flows:**
   - Onboarding Flow:
     ```powershell
     maestro test onboarding.yaml
     ```
   - Income and Expense Flow:
     ```powershell
     maestro test incomeExpense.yaml
     ```
   - Date Filter Flow:
     ```powershell
     maestro test dateFilter.yaml
     ```

3. **Run All Test Flows Sequentially:**
   - To execute all test flows in the directory:
     ```powershell
     maestro test .
     ```

---

## ✅ Verification

After running the test flows, verify that:

- The emulator displays the expected UI interactions.
- The test results indicate successful execution.
- Any failures are investigated and addressed accordingly.

---

## 📄 Additional Resources

- [Maestro Official Documentation](https://docs.maestro.dev/)
 
