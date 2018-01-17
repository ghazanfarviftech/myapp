import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the CoinTimelinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-coin-timeline',
  templateUrl: 'coin-timeline.html',
})
export class CoinTimelinePage {

  coinList : Array<Object>;
  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl:MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoinSentPage');
    this.coinList = [];
    this.coinList.push("first");
    this.coinList.push("second");
    this.coinList.push("second");
    this.coinList.push("second");
  }

 

}
