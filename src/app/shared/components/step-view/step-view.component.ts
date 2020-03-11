import { Component, EventEmitter, Input, OnInit, Output, ViewChild, AfterViewInit } from '@angular/core';
import { MatHorizontalStepper } from '@angular/material/stepper';
import { Step } from '../../model';

@Component({
  selector: 'kosaml-step-view',
  templateUrl: './step-view.component.html',
  styleUrls: ['./step-view.component.scss']
})
export class StepViewComponent {
  @ViewChild(MatHorizontalStepper, {static: true})
  matStepper: MatHorizontalStepper;

  @Input()
  selectedIndex;

  @Input()
  steps;

  @Input()
  stepState: Step;

  @Output()
  nextPage = new EventEmitter();

  constructor() { }

  selectionChanged(event) {
    this.selectedIndex = event.selectedIndex;
    this.nextPage.next(event);
  }
  
  onNext() {
    if(this.selectedIndex < this.steps.length-1) {
      this.selectedIndex++;
    };
  }

  onBack() {
    if(0 < this.selectedIndex) {
      this.selectedIndex--;
    };
  }

  private hasNextStep() {
    return this.selectedIndex < this.steps.length-1;
  }
}
