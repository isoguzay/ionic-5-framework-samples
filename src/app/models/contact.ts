class Contact {
    email: string;
    content: string;

    constructor(contact: Contact) {
        Object.assign(this, contact);
    }
}