import { Component, OnInit } from '@angular/core';
import { IPerson, IPersonFromCountry } from '../data.structures';

@Component({
  selector: 'fg-app-chap05-subchap01',
  templateUrl: './chap05-subchap01.component.html',
  styleUrls: ['./chap05-subchap01.component.scss']
})
export class Chap05Subchap01Component implements OnInit {

  public persons: Array<IPerson> = [
    {
      firstName: 'John',
      lastName: 'Smith',
      sex: 'male',
      age: 47
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      sex: 'female',
      age: 36
    },
    {
      firstName: 'Edy',
      lastName: 'Smith',
      sex: 'male',
      age: 18
    },
    {
      firstName: 'Janet',
      lastName: 'Smith',
      sex: 'female',
      age: 15
    },
    {
      firstName: 'Jon',
      lastName: 'Polwinsky',
      sex: 'male',
      age: 37
    },
    {
      firstName: 'Josea',
      lastName: 'Kalwasky',
      sex: 'female',
      age: 28
    }
  ]
  public personsFromCounties: Array<IPersonFromCountry> = [
    {
      countryName: 'RO',
      persons: [
        {
          firstName: 'Ion',
          lastName: 'Iliescu',
          sex: 'male',
          age: 88
        },
        {
          firstName: 'Vadim',
          lastName: 'Tudor',
          sex: 'male',
          age: 70
        },       
        {
          firstName: 'Liviu',
          lastName: 'Dragnea',
          sex: 'male',
          age: 55
        }, 
        {
          firstName: 'Elena',
          lastName: 'Udrea',
          sex: 'female',
          age: 44
        },
        {
          firstName: 'Gabriela',
          lastName: 'Cretulescu',
          sex: 'female',
          age: 36,
        },
        {
          firstName: 'Victor',
          lastName: 'Ciorbea',
          sex: 'male',
          age: 58
        }
      ]
    },
    {
      countryName: 'UK',
      persons: [
        {
          firstName: 'Marry',
          lastName: 'Brown',
          sex: 'female',
          age: 24
        },
        {
          firstName: 'John',
          lastName: 'Green',
          sex: 'male',
          age: 35
        },
        {
          firstName: 'Leopold',
          lastName: 'Christoper',
          sex: 'male',
          age: 19
        },
        {
          firstName: 'Diana',
          lastName: 'Jackson',
          sex: 'female',
          age: 74
        },
        {
          firstName: 'Estera',
          lastName: 'Maslow',
          sex: 'female',
          age: 37
        },
        {
          firstName: 'Joseph',
          lastName: 'Smith',
          sex: 'male',
          age: 42
        },
        {
          firstName: 'Marry',
          lastName: 'Loners',
          sex: 'female',
          age: 21
        }
      ]
    },
    {
      countryName: 'US',
      persons: [
        {
          firstName: 'Michael',
          lastName: 'Brown',
          sex: 'male',
          age: 64
        },        
        {
          firstName: 'Christa',
          lastName: 'George',
          sex: 'female',
          age: 65
        },
        {
          firstName: 'Diana',
          lastName: 'Mathew',
          sex: 'female',
          age: 36
        },
        {
          firstName: 'Sophie',
          lastName: 'Trump',
          sex: 'female',
          age: 23
        },
        {
          firstName: 'Donald',
          lastName: 'La Vey',
          sex: 'male',
          age: 38
        },
        {
          firstName: 'Marius',
          lastName: 'Tenerdom',
          sex: 'male',
          age: 31
        }
      ]
    }
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
