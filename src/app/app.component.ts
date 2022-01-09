import { trigger, state, style, transition, animate } from '@angular/animations';
import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import * as _ from 'underscore';

class Item{
  item: string;
  numb: number;
  constructor(item: string, numb: number) {
      this.item = item;
      this.numb = numb;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('appear', [
      state('start', style({
        opacity: 0,
        bottom: "-250px"
      })),
      state('end', style({
        opacity: 1,
        bottom: "50px"
      })),
      transition('start => end', animate(800)),
      transition('end => start', animate(450))
    ]),
    trigger('exAppear', [
      state('startEx', style({
        opacity: 0,
        right: '-150px'
      })),
      state('endEx', style({
        opacity: 1,
        right: "40px"
      })),
      transition('startEx => endEx', animate(800)),
      transition('endEx => startEx', animate(450))
    ]),
    trigger('clickPlus', [
      state('startPlus', style({
        opacity: 1,
        bottom: "60px"
      })),
      state('endPlus', style({
        opacity: 0,
        bottom: "-130px"
      })),
      transition('startPlus => endPlus', animate(400)),
      transition('endPlus => startPlus', animate(700))      
    ]),
    trigger('succ', [
      state('startSucc', style({
        opacity: 1,
        right: "50px"
      })),
      state('endSucc', style({
        opacity: 0,
        right: "-200px"
      })),
      transition('startSucc => endSucc', animate(800)),
      transition('endSucc => startSucc', animate(300))
    ]),
    trigger('unSucc', [
      state('startUnSucc', style({
        opacity: 1,
        right: "50px"
      })),
      state('endUnSucc', style({
        opacity: 0,
        right: "-200px"
      })),
      transition('startUnSucc => endUnSucc', animate(800)),
      transition('endUnSucc => startUnSucc', animate(300))
    ]),
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateY(-100%)', opacity: 0}),
        animate('800ms ease', style({transform: 'translateY(0%)', opacity: 1}))
      ]),
      transition(':leave', [
        animate('500ms ease', style({transform: 'translateY(-100%)', opacity: 0}))
      ])
    ]),    
    trigger('changeWindow', [
      state('startWin', style({
        opacity: 1,
        display: "flex"
      })),
      state('endWin', style({
        opacity: 0,
        display: "none"
      })),
      transition('startWin <=> endWin', animate(800)),
      transition('endWin => startWin', animate(500))
    ]),
    trigger('loading', [
      state('startLoad', style({
        transform: "rotate(-90deg)"
      })),
      state('endLoad', style({
        transform: "rotate(630deg)"
      })),
      transition('startLoad <=> endLoad', animate(2200))
    ])
  ]
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'Test Project';
  userName: string = "Michael";
  userLastName: string ="Jackson";
  userInfo1: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, voluptates odit cupiditate laboriosam impedit suscipit molestias nam natus dignissimos omnis necessitatibus minima, nostrum quidem voluptas? A obcaecati eum quisquam hic.";
  userInfo2: string = "Dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem magni blanditiis veniam, neque autem possimus. Dolores, fugit temporibus! Velit voluptates amet.";
  userAge: number = 0;
  newId: string = "";
  logName: string = "";
  logSecName: string = "";
  passWord: string = "";
  ident: Item[] =
  [
    {item: "ISO/TC683", numb: 1}, 
    {item: "ISO 15022", numb: 2}, 
    {item: "ISO/BE648", numb: 3}, 
    {item: "ISO 64685", numb: 4}, 
    {item: "ISO 32090", numb: 5}
  ];
  darkIcon1 = 'angular/assets/images/8.png';
  darkIcon2 = 'angular/assets/images/9.jpg';
  darkIconSwitch = this.darkIcon1;
  startSucc = 'endSucc';
  unSucc = 'endUnSucc';
  clickAppear = 'start';
  clickPlus = 'endPlus';
  mainWind = 'startWin';
  secondWind = 'endWin';
  load = "startLoad";
  loadWind = "endWin";
  exit = "startEx";
  dark = true;
  

  // ============================================

  addNames(logName: string, logSecName: string, userAge:number, passWord: string):any {
      if (this.logName == '' || this.logSecName == ''|| this.userAge == null || this.passWord == '') {
        this.unSucc = 'startUnSucc';
        setTimeout(() => {this.unSucc = 'endUnSucc'}, 1200)
      }
      else {
        this.userName = this.logName;
        this.userLastName = this.logSecName;
        this.logName = '';
        this.logSecName = '';
        this.mainWind = "endWin";
        setTimeout(() => {
          this.load = 'startLoad';
        }, 801);
        setTimeout(() => {
          this.loadWind = "startWin";
          this.load = 'endLoad';
        }, 802);
        // setTimeout(() => {
        //   this.load = 'startLoad';
        // }, 1000);
        setTimeout(() => {
          this.loadWind = "endWin";
        }, 2500);
        setTimeout(() => {
          this.secondWind = 'startWin';
        }, 3000);
        setTimeout(() => {
          this.clickPlus = 'startPlus';
        }, 5300);
        setTimeout(() => {
          this.exit = "endEx";
        }, 6300);
      }
    }

  // ===================================================

  rel = () => {document.location.reload()};

  addItem(newId: string): void {
    if(newId == '') {
      this.unSucc = 'startUnSucc';
      setTimeout(() => {this.unSucc = 'endUnSucc'}, 1300);
    } 
    else {
    this.ident.push(new Item(newId, this.ident.length + 1));
    this.newId = '';
    this.startSucc = 'startSucc';
    setTimeout(() => {this.startSucc = 'endSucc'}, 1500)
    }
  }

  changeIcons() {
    if (this.clickAppear == 'start' && this.clickPlus == 'startPlus') {
      this.clickAppear = 'end';
      this.clickPlus = 'endPlus';
      console.log(111)
    }
    else {
      this.clickAppear = 'start';
      this.clickPlus = 'startPlus';
    }
  };

  removeFromList(a: any) {
    this.ident = _.without(this.ident, a);
  }

  darkLight = () => { 
    this.dark = !this.dark
    if (this.darkIconSwitch == this.darkIcon1) {
      this.darkIconSwitch = this.darkIcon2;
    } else {
      this.darkIconSwitch = this.darkIcon1
    }
   } 
}
