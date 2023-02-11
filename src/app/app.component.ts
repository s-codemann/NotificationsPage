import { Component, OnInit } from '@angular/core';
import {AppNotification} from "./models/notification.model"
import { Target } from './models/notification.model';
import { OwnGroups } from 'src/services/own-group.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Notifications';
  notifications:AppNotification[]=[new AppNotification(false,"1m ago","assets/img/avatar-mark-webber.webp","Mark Webber","reacted to your recent post",new Target("My first tournament today!","clickableText")),
 new AppNotification(false,"5m ago","assets/img/avatar-angela-gray.webp","Angela Gray","followed you",new Target("","null")),
new AppNotification(false,"1 day ago","assets/img/avatar-jacob-thompson.webp","Jacob Thompson","has joined your group",new Target("Chess Club","clickableText")),
new AppNotification(true,"5 days ago","assets/img/avatar-rizky-hasanuddin.webp","Rizky Hasanuddin", "sent you a private message",new Target("Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.","message")),
new AppNotification(true,"1 week ago","assets/img/avatar-kimberly-smith.webp","Kimberly Smith","commented on your picture",new Target("assets/img/image-chess.webp","image")),
new AppNotification(true,"2 weeks ago","assets/img/avatar-nathan-peterson.webp","Nathan Peterson","reacted to your recent Post",new Target("5 end-game strategies to increase your win rate","plainText")),
new AppNotification(true,"2 weeks ago","assets/img/avatar-anna-kim.webp","Anna Kim","has left the group",new Target("Chess Club","plainText"))
];
  unreadCount:number = 0;
  getUnread():number{return this.notifications.reduce((count,notification)=>{console.log(notification.read);return notification.read? count :count + 1},0)}
  refreshUnreadCount():void{
    this.unreadCount=this.getUnread()
  }
  markAllAsRead():void{
    this.notifications.forEach(notification=> notification.read=true);
    this.refreshUnreadCount()
   
  }
  isOwnGroup(target:Target){
    let found = this.ownGroups.groups.find((ownGroup:string )=> target.string === ownGroup);
    return found === undefined? false : true
  }
  constructor(public ownGroups:OwnGroups){

    this.refreshUnreadCount();


  }
  ngOnInit(): void {
  }
  
}
