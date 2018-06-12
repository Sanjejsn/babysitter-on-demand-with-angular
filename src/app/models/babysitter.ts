export class Babysitter {

    static lastId: number;
    public name: string;
    public email: string;
    public age: string;
    public city: string;
    public imagePath: string;
    public qualifications: string;
    public description: string;
    public id: number;



    constructor(name: string,
        email: string,
        age: string,
        city: string,
        imagePath: string,
        qualifications: string,
        description: string) {


        this.name = name;
        this.email = email;
        this.age = age;
        this.city = city;
        this.imagePath = imagePath;
        this.qualifications = qualifications;
        this.description = description;
        this.id = Babysitter.counter();

    }

    static counter() {
        if (Babysitter.lastId == null) {
            Babysitter.lastId = 0;
        } else {
            Babysitter.lastId = Babysitter.lastId + 1;
        }
        return Babysitter.lastId;
    }
}
