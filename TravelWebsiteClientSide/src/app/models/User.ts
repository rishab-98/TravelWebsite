export class User {

    public email: string;
    public firstName: string;
    public lastName: string;
    public businessUnit: string;
    public title: string;
    public telephone: string;
    public address1: string;
    public address2: string;
    public city: string;
    public state: string;
    public zip: number;
    public country: string;
    public password: string;
    public role: string;

    constructor(email, firstName, lastName, businessUnit, title, telephone,
        address1, address2, city, state, zip, country, password, role) {
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.businessUnit = businessUnit;
        this.title = title;
        this.telephone = telephone;
        this.address1 = address1;
        this.address2 = address2;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.country = country;
        this.password = password;
        this.role = role;

    }
}