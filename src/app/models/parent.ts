
export class Parent {

    static lastId: number;
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
        this.id = Parent.counter();

    }

    static counter() {
        if (Parent.lastId == null) {
            Parent.lastId = 0;
        } else {
            Parent.lastId = Parent.lastId + 1;
        }
        return Parent.lastId;
    }



}
