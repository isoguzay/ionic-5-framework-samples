class User {
    username: string;
    password: string;

    constructor(user: User) {
        Object.assign(this, user);
    }
}