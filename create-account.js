function createAccount(pin, amount = 0) {

    let myPin = pin
    let myBalance = amount
    
    class Account {
        
        checkBalance(inputPin) {
            if (myPin === inputPin) {
                return (`$${myBalance}`)
            } else {
                return 'Invalid PIN.'
            }
        }

        deposit(inputPin, inputDeposit) {
            if (myPin === inputPin && inputDeposit) {
                myBalance = myBalance + inputDeposit
                return (`Succesfully deposited $${inputDeposit}. Current balance: $${myBalance}.`)
            } else {
                return 'Invalid PIN.'
            }
        }

        withdraw(inputPin, inputWithdraw) {
            if (inputWithdraw > myBalance) {
                return ('Withdrawal amount exceeds account balance. Transaction cancelled.')
            }
            
            if (myPin === inputPin && inputWithdraw) {
                myBalance = myBalance - inputWithdraw
                return (`Succesfully withdrew $${inputWithdraw}. Current balance: $${myBalance}.`)
            } else {
                return 'Invalid PIN.'
            }
        }

        changePin(inputPin, newPin) {
            if (myPin === inputPin && newPin) {
                myPin = newPin
                return ("PIN successfully changed!")
            } else {
                return 'Invalid PIN.'
            }

        }
        
    }

    return new Account

}



module.exports = { createAccount };
