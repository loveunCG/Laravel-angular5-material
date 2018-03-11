import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { TranslateService } from 'ng2-translate';
import { AppService } from '../../../app.service';

@Component({
  templateUrl: './dialog-theme.component.html',
  styleUrls: [
    './dialog-theme.component.scss'
  ]
})
export class DialogThemeComponent implements OnInit {

  collapseSidenavChecked: boolean;
  lang = 'en';

  constructor(private appService: AppService,
              private dialogRef: MdDialogRef<DialogThemeComponent>,
              private translate: TranslateService) {
    this.collapseSidenavChecked = appService.getState().sidenavCollapse;
  }

  ngOnInit(): void {
  }

  toggleLang() {
    this.translate.setDefaultLang(this.appService.getState().defaultLang);
    this.dialogRef.close();
  }

  toggleCollapseSidenav() {
    this.appService.getState().sidenavCollapse = !this.appService.getState().sidenavCollapse;
  }

  toggleTheme() {
    // this.appService.getState().darkMode = !this.appService.getState().darkMode;
    let body = $('body');
    body.removeClass('light');
    body.removeClass('dark');
    if (this.appService.getState().darkMode) {
      body.addClass('dark');
    } else {
      body.addClass('light');
    }
    this.dialogRef.close();
  }
}
