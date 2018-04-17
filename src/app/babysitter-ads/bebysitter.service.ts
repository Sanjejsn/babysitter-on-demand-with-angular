import { Bebysitter } from '../models/bebysitter';
import { EventEmitter, Output } from '@angular/core';



export class BebysitterService {

    bebysitters: Bebysitter[] = [
        new Bebysitter(
            'Sanja Cukaric',
            'injacs@gmail',
            '1986',
            'Belgrade',
            'http://www.americantraininginc.com/wp-content/uploads/2017/02/babysitter.jpg',
            'Elementary school',
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, suscipit distinctio, laborum nulla dolor facilis totam
      voluptatum atque facere quod veniam. Fugiat consectetur laudantium ex ratione deserunt beatae ut similique eveniet, veniam
      harum magnam aut. Nobis animi fugiat amet voluptas minus quo rem officia, asperiores quae! Quasi delectus explicabo illo?`,
        ),
        new Bebysitter(
            'Marija Injac',
            'injacs@gmail',
            '1988',
            'Belgrade',
            'https://blog.littlelane.com/wp-content/uploads/2015/04/nanny-babysitter-san-francisco-marin1.jpg',
            'Student',
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, suscipit distinctio, laborum nulla dolor facilis totam
      voluptatum atque facere quod veniam. Fugiat consectetur laudantium ex ratione deserunt beatae ut similique eveniet, veniam
      harum magnam aut. Nobis animi fugiat amet voluptas minus quo rem officia, asperiores quae! Quasi delectus explicabo illo?`
        ),
        new Bebysitter(
            'Vesna Injac',
            'injacs@gmail',
            '1989',
            'Kikinda',
            'https://img.halooglasi.com/slike/clanci/Thumbs/M/sat-rada-bebisiterke-14-92-eur-1832-1832.jpg',
            'High school',
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, suscipit distinctio, laborum nulla dolor facilis totam
      voluptatum atque facere quod veniam. Fugiat consectetur laudantium ex ratione deserunt beatae ut similique eveniet, veniam
      harum magnam aut. Nobis animi fugiat amet voluptas minus quo rem officia, asperiores quae! Quasi delectus explicabo illo?`
        )
    ];



}
