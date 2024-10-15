# IntelliHive Financial Dashboard
As part of Intelliware and [happy hive](https://happyhive.work/) hiring challenge

## Meet the Team - The Avengers
- **Business Systems Analyst**: Pete Umpaipant
- **Full Stack Developer & Front-End Lead**: Negin Heidari
- **Full Stack Developer & Back-End Lead**: Mahyar Ghasemi Khah

## Demo Video Link: Coming Soon

## Problem to Solve
The IntelliHive financial dashboard provides a **minimalist** and **user-friendly** interface focused on displaying **account balances** and **recent transactions**. It addresses the need for a simple, accessible tool that allows users to monitor their finances without the complexity of advanced design features or mobile responsiveness.

## Value Proposition
- **Simplicity and Efficiency**: IntelliHive delivers a clean, intuitive interface that provides quick access to essential financial information, eliminating complex navigation.
- **Personalization without Complexity**: Features such as the ability to manage account lists allow users to tailor their experience, ensuring that their most-used accounts are always readily accessible.

## Target Market
- **Non-Tech-Savvy Users**: Users seeking a simple, accessible interface for easy account navigation.
- **New Bank Account Owners**: Individuals new to banking who need a clear, user-friendly experience to manage and understand their accounts.
- **Advanced Users**: Users who are familiar with personal finance management and require deeper insights, such as account summaries and spending breakdowns, while still valuing simplicity.

## MVP Solution

### Core Functionalities:
- Display individual account balances with detailed account information (Core deliverable).
- Show recent transactions for each linked account, offering users a quick overview of their financial activity (Mock-up).
- Provide real-time balance updates via automatic/manual refresh, ensuring users always see the most up-to-date information (Mock-up).

### Essential Differentiators:
- **Spending Overview Card**: A simple card summarizing spending by key categories (e.g., Groceries, Utilities), giving users a clear snapshot of where their money is going (Mock-up).
- **Self-Arranged Account List**: Allows users to rearrange their accounts based on personal importance, prioritizing the most critical accounts at the top (Mock-up).

## Project Timeline (October 2024)
- **October 10-11**: Research on user needs, technical feasibility, and tech stack selection.
- **October 12-14**: Development phase, building the frontend and backend, implementing wireframes, and connecting APIs.
- **October 15**: Testing phase to ensure functionality and address any critical issues before the demo.

## User Stories and Technical Design

### **User Stories**
1. **Dashboard - Account Balances**
   - *As a retail user, I want to view my account balances for all linked accounts (checking, savings, credit, investment) on the dashboard, so I can monitor my financial status.*

2. **Recent Transactions Snapshot**
   - *As a retail user, I want to see a snapshot of my recent transactions, so I can monitor my recent spending and deposits.*
  
3. **Dashboard - Rearranging Account List**
   - *As a user, I want to be able to rearrange my account list in the "My Account" page, so I can prioritize my most important accounts at the top of the dashboard.*

4. **Top Expense Visualization**
   - *As a user, I want to view a visualization of my spending by category, so I can understand how much I spend on each category (e.g., groceries, utilities, entertainment).*

5. **User Access Control (Log in/Log out)**
   - *As a user, I want to log into the system using my username and password, so I can securely access my account.*
   - *As a user, I want an option to reset my password if I forget it, so I can regain access to my account.*
   - *As a system administrator, I want accounts to be locked after 3 failed login attempts, so that the system remains secure.*
   - *As a user, I want to be able to log out from any screen within the system, so I can securely exit my account when I'm done.*

6. **Display Feature Navigation**
   - *As a user, I want easy access to core banking features from the dashboard, so I can perform tasks like viewing account and transaction details, making transfers, and paying bills.*

---

### **Wireframes**
<p> 
  <img src="documentation/Wireframes/Wireframe-Dashboard.png" alt="Main Dashboard" style="width: 1080px">
  <img src="documentation/Wireframes/Wireframe-Login.png" alt="Main Dashboard" style="width: 1080px">
  <img src="documentation/Wireframes/Wireframe-Dashboard.png" alt="Main Dashboard" style="width: 1080px">

</p>

---

### **Technical Design** [To Be Updated]
- **Frontend**:
  - **Pages**:
    1. **Sign-In Page**: A login screen for user access control, including a "Forgot Password" option.
    2. **Main Financial Dashboard**:
       - Account Overview: Displays individual account balances.
       - Recent Transactions: Lists recent transactions for linked accounts.
       - Top Spending Categories: A simple card showing the user’s top spending categories.
  - **Technologies**: [To Be Updated]

- **Backend**:
  - **Services**:
    1. **User Service**: Manages user authentication, password resets, and login attempts.
    2. **Account Service**: Provides account data, including balances and transaction history.
    3. **Transaction Service**: Manages user transaction data and spending categories.
  - **Technologies**: Java, RESTful APIs, Static JSON for demo data, PostgreSQL for the "should be" solution.

## Demo Solution vs. "Should Be" Solution

### **Demo Solution** (Implemented under time constraints):
- **Frontend**: Sign-in page and main financial dashboard (account overview, recent transactions, top spending categories).
- **Backend**: User-service and account-service are necessary for the demo dashboard. The backend connects to APIs, returning data from a static JSON file (no real database or security implemented).


### **Proposed Solution**:

- **Frontend**: [To Be Updated]
- **Backend**: Utilizes cloud resources (AWS) with microservice architecture, divided into Backend for Frontend (BFF), Business APIs, and Enterprise APIs for seamless integration with core banking.
   - Fully integrated with a **Postgres database** for real-time data management, with **security measures** like user authentication, password encryption, and rate limiting.
   - PostgreSQL Database Schema for current dashboard design:
      - <img src="documentation/intellihive_DB.png" alt="Proposed Database Schema (Simple)" style="width: 540px">
- **Proposed Architecture**:
   - <img src="documentation/intelliHive Architecture.drawio.png" alt="Proposed Architecture" style="width: 1080px">


## Future Features Considered for Addition
- Account grouping and customization for an enhanced user experience.
- Advanced privacy features like account balance visibility toggles for better control.
- Expanded filtering options for transactions by category or date range.

## Installation and Setup
[To Be Updated]

1. Clone this repository:
   ```bash
   git clone https://github.com/neginheidarii/Financial-Dashboard.git
