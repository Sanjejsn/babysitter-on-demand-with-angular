import { Babysitter } from '../models/babysitter';
import { Subject } from 'rxjs/Subject';


export class BabysitterService {

    babysitterChanged = new Subject<Babysitter[]>();


    private babysitters: Babysitter[] = [
        new Babysitter(
            'Ivana Cuk',
            'noreply@noreply.com',
            '1980',
            'Belgrade',
            'http://www.americantraininginc.com/wp-content/uploads/2017/02/babysitter.jpg',
            'Elementary school',
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, suscipit distinctio, laborum nulla dolor facilis totam
      voluptatum atque facere quod veniam. Fugiat consectetur laudantium ex ratione deserunt beatae ut similique eveniet, veniam
      harum magnam aut. Nobis animi fugiat amet voluptas minus quo rem officia, asperiores quae! Quasi delectus explicabo illo?`,
        ),
        new Babysitter(
            'Snezana Radivojevic',
            'fakemail@fakemail.com',
            '1992',
            'Belgrade',
            'https://blog.littlelane.com/wp-content/uploads/2015/04/nanny-babysitter-san-francisco-marin1.jpg',
            'Student',
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, suscipit distinctio, laborum nulla dolor facilis totam
      voluptatum atque facere quod veniam. Fugiat consectetur laudantium ex ratione deserunt beatae ut similique eveniet, veniam
      harum magnam aut. Nobis animi fugiat amet voluptas minus quo rem officia, asperiores quae! Quasi delectus explicabo illo?`,
        ),
        new Babysitter(
            'Sonja Injac',
            'fake@fake.com',
            '1990',
            'Kikinda',
            'https://img.halooglasi.com/slike/clanci/Thumbs/M/sat-rada-bebisiterke-14-92-eur-1832-1832.jpg',
            'High school',
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, suscipit distinctio, laborum nulla dolor facilis totam
      voluptatum atque facere quod veniam. Fugiat consectetur laudantium ex ratione deserunt beatae ut similique eveniet, veniam
      harum magnam aut. Nobis animi fugiat amet voluptas minus quo rem officia, asperiores quae! Quasi delectus explicabo illo?`,
        )
    ];

    getBabysitters() {
        return [...this.babysitters];
    }

    addBabysitter(babysitter: Babysitter) {
        this.babysitters.push(babysitter);
        this.babysitterChanged.next([...this.babysitters]);
    }
}
