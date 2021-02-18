module.exports = class Bank {
    constructor(idProvider,name,bankAccount,bankKey){
        this.idBank = 0;
        this.idProvider = idProvider;
        this.name = name;
        this.bankAccount = bankAccount;
        this.bankKey = bankKey;
    }

    set idBank (idBank) {
        this.idBank = idBank;
    }
}