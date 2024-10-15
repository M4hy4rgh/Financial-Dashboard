# IntelliHive Financial Dashboard

## Problem to Solve
The IntelliHive financial dashboard offers a **minimalist** and **user-friendly** interface that focuses on displaying **account balances** and **recent transactions**. It addresses the need for a simple, accessible tool that allows users to monitor their finances easily, without the complexity of advanced design features or mobile responsiveness.

## Value Proposition
- **Simplicity and Efficiency**: IntelliHive provides a clean, intuitive interface for quick access to essential financial information, eliminating the need to navigate complex menus.

## Target Market
- **Non-Tech-Savvy Users**: People who need a simple, accessible interface for easy account navigation.
- **New Bank Account Owners**: Individuals new to banking who require a clear, user-friendly experience to manage and understand their accounts.
- **Advanced Users**: Users familiar with personal finance management who need deeper insights, such as account summaries and spending breakdowns, while valuing simplicity.

## MVP Solution

### Core Functionalities:
- Display individual account balances along with detailed account information.
- Show recent transactions for each linked account, offering users a quick overview of their financial activity.
- Provide real-time balance updates through automatic/manual refresh, ensuring users always see the most up-to-date information.

### Essential Differentiators:
- **Spending Overview Card**: A simple card summarizing spending by key categories (e.g., Groceries, Utilities), giving users a clear snapshot of where their money is going.

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

3. **Top Expense**
   - *As a user, I want to view a visualization of my spending by category, so I can understand how much I spend on each category (e.g., groceries, utilities, entertainment).*

4. **User Access Control (Login)**
   - *As a user, I want to log into the system using my username and password, so I can securely access my account.*
   - *As a user, I want an option to reset my password if I forget it, so I can regain access to my account.*
   - *As a system administrator, I want accounts to be locked after 3 failed login attempts, so that the system remains secure.*

5. **Display Feature Navigation**
   - *As a user, I want easy access to core banking features from the dashboard, so I can perform tasks like viewing account and transaction details, making transfers, and paying bills.*

### **Wireframes**

[ To Be Updated ]

---

### **Technical Design** [ To Be Updated ]
- **Frontend**: [ To Be Updated ]
  - **Pages**:
    1. **Sign-In Page**: A login screen for user access control, including a "Forgot Password" option.
    2. **Main Financial Dashboard**:
       - Account Overview: Display individual account balances.
       - Recent Transactions: List recent transactions for linked accounts.
       - Top Spending Categories: Show the user’s top spending categories in a simple card.
  - **Technologies**:

- **Backend**: [ To Be Updated ]
  - **Services**:
    1. **User Service**: Handles user authentication, password resets, and login attempts.
    2. **Account Service**: Provides account data, including balances and transaction history.
    3. **Transaction Service**: Manages user transaction data and spending categories.
  - **Technologies**: Java, RESTful APIs, Static JSON for demo data, PostgreSQL for the "should be" solution.

## Demo Solution vs. "Should Be" Solution

### **Demo Solution** (Implemented under time constraints):
- **Frontend**: Sign-in page and main financial dashboard (account overview, recent transactions, top spending categories).
- **Backend**: User-service, account-service, and transaction-service. The backend connects to APIs, returning data from a static JSON file (no real database or security implemented).

### **"Should Be" Solution**:
- **Frontend**: [ To Be Updated ].
- **Backend**: Fully integrated with a **Postgres database** for real-time data management. **Security measures** like user authentication, password encryption, and rate limiting are implemented.

## Features to be Added
- Account grouping and customization for an enhanced user experience.
- Advanced privacy features like account balance visibility toggles for better control.
- Expanded filtering options for transactions by category or date range.

## Installation and Setup

[ To Be Updated ]

1. Clone this repository:
   ```bash
   git clone https://github.com/neginheidarii/Financial-Dashboard.git
