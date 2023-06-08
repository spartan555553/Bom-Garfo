import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-bug-report',
  templateUrl: './bug-report.page.html',
  styleUrls: ['./bug-report.page.scss'],
})
export class BugReportPage implements OnInit {
  @ViewChild('errorTypeInput', { static: false }) errorTypeInput!: IonInput;
  @ViewChild('errorDescriptionInput', { static: false }) errorDescriptionInput!: IonInput;

  constructor() { }

  ngOnInit() {
  }

  sendReport() {
    const errorType = this.errorTypeInput.value;
    const errorDescription = this.errorDescriptionInput.value;
    console.log('Tipo de Erro:', errorType);
    console.log('Descrição do Erro:', errorDescription);
  
    // Clear the input boxes
    this.errorTypeInput.value = '';
    this.errorDescriptionInput.value = '';
  }  
}
