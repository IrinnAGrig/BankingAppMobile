import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class UserService {
    private user = {
        fullName: 'Andrei Postaru',
        password: '123456',
        email: 'user1@gmail.com',
        phone: '+373 12 123 12',

    }
    constructor(

    ) { }
    get userData() {
        return this.user;
    }

    signIn(email: string, password: string) {
        if (this.user.email == email && this.user.password == password) {
            localStorage.setItem('userData', JSON.stringify(this.user));
            return true;
        } else {
            return false;
        }
    }
    signUp(email: string, password: string, name: string, phone: string) {
        this.user.email = email;
        this.user.password = password;
        this.user.fullName = name;
        this.user.phone = phone;
        localStorage.setItem('userData', JSON.stringify(this.user));
        return true;
    }
}