class parent{
    constructor(){
        this.firstName = "Bijoy",
        this.lastName = "Bhattachergee"

    }
}

class child extends parent{
    constructor(){
        super();
        this.childName = "syket"
        this.fullName = this.childName + ' ' + this.lastName
        
    }
}

const name = new child();
console.log(name.fullName);