import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { HomePage } from '../home/home';

@Component({
    templateUrl: 'language.html',
    styleUrls: ['/language.scss']
})
export class LanguagePage {

    constructor(private navCtrl: NavController) { }

    private goToNextPage() {
        this.navCtrl.setRoot(HomePage);
    }

}