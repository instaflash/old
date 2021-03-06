// Components
import { Component } from '@angular/core';
// Services
import { LocaleService } from '../locale.service';

@Component({
	selector: 'header-component',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
	image: string = require('../../img/header_img/source.png');
	dict: any;
	constructor(private localeService: LocaleService) {
		this.dict = this.localeService.getDict();
	}
}
