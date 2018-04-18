let nextId = 0;

export class Parent {


    public name: string;
    public email: string;
    public city: string;
    public description: string;
    public id: number;


    constructor(name: string,
        email: string,
        city: string,
        description: string) {


        this.name = name;
        this.email = email;
        this.city = city;
        this.description = description;
        this.id = nextId++;

    }



}
