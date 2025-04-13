# 📱 Maestro Android Test Suite

## Overview

This repository contains automated UI tests for the Monefy Android application using [Maestro](https://maestro.mobile.dev/). Follow the steps below to set up your environment and run the test flows.

---

## 🛠️ Setup Instructions

### 1. Clone and Prepare the Repository

1. **Download the Repository:**
   - Clone the repository from GitHub or download it as a ZIP file.

2. **Extract the Files:**
   - If downloaded as a ZIP, extract the contents to your desired location, e.g., `C:\Users\YourName\SecondTask\`.

---

### 2. Install Java Development Kit (JDK)

1. **Download JDK:**
   - Visit the [Oracle JDK Downloads](https://www.oracle.com/java/technologies/javase-downloads.html) page and download the latest JDK for Windows.

2. **Install JDK:**
   - Run the installer and follow the on-screen instructions.

3. **Set JAVA_HOME Environment Variable:**
   - Open **Control Panel** > **System and Security** > **System** > **Advanced system settings**.
   - Click on **Environment Variables**.
   - Under **System variables**, click **New** and enter:
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
   - Open **Control Panel** > **System and Security** > **System** > **Advanced system settings**.
   - Click on **Environment Variables**.
   - Under **System variables**, click **New** and enter:
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

1. **Download Maestro:**
   - Visit the [Maestro Releases](https://github.com/mobile-dev-inc/maestro/releases) page and download the latest release for Windows.

2. **Extract and Place Maestro:**
   - Extract the downloaded ZIP file.
   - Place the `maestro` executable in a directory of your choice, e.g., `C:\Users\YourName\SecondTask\bin`.

3. **Update PATH Environment Variable:**
   - Open **Control Panel** > **System and Security** > **System** > **Advanced system settings**.
   - Click on **Environment Variables**.
   - Under **System variables**, find and select the `Path` variable, then click **Edit**.
   - Click **New** and add the path to your Maestro `bin` directory, e.g.:
     ```
     C:\Users\YourName\SecondTask\bin
     ```
   - Click **OK** to save.

4. **Verify Maestro Installation:**
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
   - Navigate to **Tools** > **Device Manager**.

3. **Create a New Virtual Device:**
   - Click on **Create Device**.
   - Select a hardware profile (e.g., Pixel 5) and click **Next**.
   - Choose a system image (e.g., Android 12.0) and click **Next**.
   - Configure the AVD name and settings, then click **Finish**.

4. **Launch the Emulator:**
   - In the **Device Manager**, click the **Play** button next to your newly created AVD to start the emulator.

   For more details, refer to the [official Android documentation](https://developer.android.com/studio/run/managing-avds).

---

### 6. Install the Monefy App on Emulator

1. **Locate the APK:**
   - Ensure the `monefy.apk` file is located at:
     ```
     C:\Users\YourName\SecondTask\monefy.apk
     ```

2. **Install the APK:**
   - Open a PowerShell window and run:
     ```powershell
     adb install C:\Users\YourName\SecondTask\monefy.apk
     ```
   - You should see a success message indicating the app was installed.

---

## 🚀 Running Maestro Test Flows

With the emulator running and the Monefy app installed, you can execute the test flows.

1. **Navigate to the Flows Directory:**
   - Open a PowerShell window and navigate to the flows directory:
     ```powershell
     cd C:\Users\YourName\SecondTask\flows
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

- [Maestro Official Documentation](https://
::contentReference[oaicite:0]{index=0}
 
