import { Babysitter } from '../models/babysitter';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';


@Injectable()
export class BabysitterService {

    babysitterChanged = new Subject<Babysitter[]>();

    private babysitters: Babysitter[] = [
        new Babysitter(
            'Ivana Cuk',
            'noreply@noreply.com',
            '1980',
            'Belgrade',
            './assets/images/babysitter1.jpg',
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
            './assets/images/babysitter2.jpg',
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
            './assets/images/babysitter3.jpg',
            'High school',
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, suscipit distinctio, laborum nulla dolor facilis totam
      voluptatum atque facere quod veniam. Fugiat consectetur laudantium ex ratione deserunt beatae ut similique eveniet, veniam
      harum magnam aut. Nobis animi fugiat amet voluptas minus quo rem officia, asperiores quae! Quasi delectus explicabo illo?`,
        )
    ];

    constructor(private http: HttpClient) { }


    getBabysitters() {
        return [...this.babysitters];
    }

    addBabysitter(babysitter: Babysitter) {
        this.babysitters.push(babysitter);
        this.babysitterChanged.next([...this.babysitters]);
    }

    // getMessage() {
    //     return this.http.get<{ message: string }>('http://localhost:3000/products/90');
    // }
}
