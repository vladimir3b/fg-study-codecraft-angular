import { Component, OnInit } from '@angular/core';

import { IPersonExtended } from '../data.structures';

@Component({
  selector: 'fg-app-chap05-subchap02',
  templateUrl: './chap05-subchap02.component.html',
  styleUrls: ['./chap05-subchap02.component.scss']
})
export class Chap05Subchap02Component implements OnInit {

  public persons: Array<IPersonExtended> = [
    {
      firstName: 'Estera',
      lastName: 'Maslow',
      sex: 'female',
      age: 37,
      country: 'UK'
    },
    {
      firstName: 'Ion',
      lastName: 'Iliescu',
      sex: 'male',
      age: 88,
      country: 'RO'
    },    
    {
      firstName: 'Christa',
      lastName: 'George',
      sex: 'female',
      age: 65,
      country: 'US'
    },
    {
      firstName: 'Vadim',
      lastName: 'Tudor',
      sex: 'male',
      age: 70,
      country: 'RO'
    },
    {
      firstName: 'Diana',
      lastName: 'Jackson',
      sex: 'female',
      age: 74,
      country: 'UK'
    },
    {
      firstName: 'Gabriela',
      lastName: 'Cretulescu',
      sex: 'female',
      age: 36,
      country: 'RO'
    },
    {
      firstName: 'Marry',
      lastName: 'Loners',
      sex: 'female',
      age: 21,
      country: 'UK'
    },  
    {
      firstName: 'Victor',
      lastName: 'Ciorbea',
      sex: 'male',
      age: 58,
      country: 'RO'
    },
    {
      firstName: 'Marry',
      lastName: 'Brown',
      sex: 'female',
      age: 24,
      country: 'UK'
    },
    {
      firstName: 'Leopold',
      lastName: 'Christoper',
      sex: 'male',
      age: 19,
      country: 'UK'
    },
    {
      firstName: 'Michael',
      lastName: 'Brown',
      sex: 'male',
      age: 64,
      country: 'US'
    },   
    {
      firstName: 'Liviu',
      lastName: 'Dragnea',
      sex: 'male',
      age: 55,
      country: 'RO'
    }, 
    {
      firstName: 'Joseph',
      lastName: 'Smith',
      sex: 'male',
      age: 42,
      country: 'UK'
    }, 
    {
      firstName: 'Diana',
      lastName: 'Mathew',
      sex: 'female',
      age: 36,
      country: 'US'
    },
    {
      firstName: 'John',
      lastName: 'Green',
      sex: 'male',
      age: 35,
      country: 'UK'
    }, 
    {
      firstName: 'Sophie',
      lastName: 'Trump',
      sex: 'female',
      age: 23,
      country: 'US'
    },
    {
      firstName: 'Donald',
      lastName: 'La Vey',
      sex: 'male',
      age: 38,
      country: 'US'
    },        
    {
      firstName: 'Elena',
      lastName: 'Udrea',
      sex: 'female',
      age: 44,
      country: 'RO'
    },
    {
      firstName: 'Marius',
      lastName: 'Tenerdom',
      sex: 'male',
      age: 31,
      country: 'US'
    }
  ];
  
  public hideNations = {
    ro: false,
    uk: false,
    us: false
  }
  

  constructor() { }

  ngOnInit() {
  }

}
