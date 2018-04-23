import { Parent } from '../models/parent';

export class ParentService {

    parents: Parent[] = [
        new Parent(
            'Marija Petrovic',
            'fake@fake.com',
            'Belgrade',
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, suscipit distinctio, laborum nulla dolor facilis totam
      voluptatum atque facere quod veniam. Fugiat consectetur laudantium ex ratione deserunt beatae ut similique eveniet, veniam
      harum magnam aut. Nobis animi fugiat amet voluptas minus quo rem officia, asperiores quae! Quasi delectus explicabo illo?`,
        ),
        new Parent(
            'Sloboda Knezevic',
            'fakemail@fakemail.com',
            'Belgrade',
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, suscipit distinctio, laborum nulla dolor facilis totam
      voluptatum atque facere quod veniam. Fugiat consectetur laudantium ex ratione deserunt beatae ut similique eveniet, veniam
      harum magnam aut. Nobis animi fugiat amet voluptas minus quo rem officia, asperiores quae! Quasi delectus explicabo illo?`
        ),
        new Parent(
            'Milena Dimitrijevic',
            'noemail@noemail.com',
            'Kikinda',
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, suscipit distinctio, laborum nulla dolor facilis totam
      voluptatum atque facere quod veniam. Fugiat consectetur laudantium ex ratione deserunt beatae ut similique eveniet, veniam
      harum magnam aut. Nobis animi fugiat amet voluptas minus quo rem officia, asperiores quae! Quasi delectus explicabo illo?`
        )
    ];



}
