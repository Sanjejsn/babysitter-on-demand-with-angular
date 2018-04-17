import { Pipe, PipeTransform } from '@angular/core';
import { Bebysitter } from '../models/bebysitter';

@Pipe({
  name: 'educationFilter',
  pure: false
})
export class EducationFilterPipe implements PipeTransform {

  transform(array: Bebysitter[], qualifications) {
    switch (qualifications) {
      case 'Enter qualifications':
        return array;
      case 'Elementary school':
        return array.filter(sitter => sitter.qualifications === 'Elementary school');
      case 'High school':
        return array.filter(sitter => sitter.qualifications === 'High school');
      case 'Student':
        return array.filter(sitter => sitter.qualifications === 'Student');
      case 'Graduate':
        return array.filter(sitter => sitter.qualifications === 'Graduate');
    }
    return null;
  }

}



