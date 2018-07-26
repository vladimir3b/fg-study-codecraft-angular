import { Component, OnInit } from '@angular/core';
import { IQuote } from '../data.structures';

@Component({
  selector: 'fg-app-chap06-subchap02',
  templateUrl: './chap06-subchap02.component.html',
  styleUrls: ['./chap06-subchap02.component.scss']
})
export class Chap06Subchap02Component implements OnInit {
  public quotes: Array<IQuote> = [
    {
      text: 'Etiam ut est massa. Donec vitae nisl velit. Aenean id magna nunc. Cras gravida, turpis in faucibus accumsan, ipsum est semper orci, vel tempor urna justo a leo.',
      author: 'Aurelius Supremis',
      year: 1256
    },
    {
      text: 'Nam dignissim feugiat egestas. Sed accumsan sem ac ex volutpat ullamcorper. Integer a fermentum mi. Ut vel dolor a arcu convallis sodales',
      author: 'Marcus Arcanis',
      year: 1354
    },   
    {
      text: 'Nam ac nibh ipsum. Praesent sed lectus vitae justo facilisis sagittis at aliquet lectus. Nullam quis nisi varius purus bibendum ullamcorper. Phasellus dui lorem, euismod vitae porttitor in, hendrerit quis tortor. Nam a ante at magna congue eleifend.',
      author: 'Elena the 2nd of Ukraine',
      year: 1975
    },   
    {
      text: 'Phasellus vitae purus condimentum, ultrices est at, posuere sapien. Proin nibh mauris, pellentesque vel congue ac, ornare at velit. Sed pretium, libero ut ultricies maximus, nunc massa gravida mauris, non aliquet risus lorem a nulla.',
      author: 'Adolf Gutenberg',
      year: 1463
    },  
    {
      text: 'Curabitur vestibulum sed tellus eu lacinia. Nunc eleifend tellus vitae urna efficitur, at luctus tortor volutpat. Sed augue eros, varius eget mauris a, efficitur commodo ligula.',
      author: 'Stefan Luchian',
      year: 1781
    },  
    {
      text: 'Maecenas ut purus nec nulla pellentesque tristique. Donec finibus maximus dolor eget eleifend. Quisque sagittis dignissim sem et finibus. Integer commodo cursus nunc non pharetra',
      author: 'Nicolae Ceausescu',
      year: 1965
    },
    {
      text: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris varius vel quam sed rhoncus. Suspendisse pulvinar cursus varius.',
      author: 'Donald Trump',
      year: 245
    }
  ];

  constructor() {}

  ngOnInit() {}
}
