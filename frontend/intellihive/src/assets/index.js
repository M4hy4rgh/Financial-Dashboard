import defaultIcon from "./icons/checking.svg";
import checkingIcon from "./icons/checking.svg";
import savingIcon from "./icons/saving.svg";
import investmentIcon from "./icons/investment.svg";
import transferIcon from "./icons/transfer.svg";
import sendmoneyIcon from "./icons/sendmoney.svg";
import reqmoneyIcon from "./icons/reqmoney.svg";
import manageIcon from "./icons/manage.svg";
// import crypto from "./icons/crypto.svg";
import loan from "./icons/loan.svg";
import credit from "./icons/credit.svg";


// Map account types to icons
const iconMap = {
  checking: checkingIcon,
  saving: savingIcon,
  investment: investmentIcon,
  transfer: transferIcon,
  sendmoney: sendmoneyIcon,
  reqmoney: reqmoneyIcon,
    manage: manageIcon,
    // crypto: crypto,
    loan: loan,
    credit: credit

};

// Function to return the correct icon or a default one if the type is missing
export const getIcon = (accountType) => 
  iconMap[accountType] || defaultIcon;