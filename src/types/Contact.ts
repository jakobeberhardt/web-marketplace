export default class Contact{
    id!: Number;
    tmsReference: String | undefined | null;
    customerId: Number | undefined | null;
    name: String | undefined | null;
    phone: String | undefined | null;
    mail: String | undefined | null;

    constructor(initializer?: any){
        if(!initializer) return;
        if(initializer.id) this.id = initializer.id;
        if(initializer.tmsReference) this.tmsReference = initializer.tmsReference;
        if(initializer.customerId) this.id = initializer.customerId;
        if(initializer.name) this.name = initializer.name;
        if(initializer.phone) this.phone = initializer.phone;
        if(initializer.mail) this.mail = initializer.mail;
    }
}