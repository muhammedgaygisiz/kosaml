import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { uuid } from 'uuidv4';
import { Scenario } from '../../model';
import { KosamlErrorMatcher } from './KosamlErrorMatcher';

@Component({
  selector: 'kosaml-scenario',
  templateUrl: './scenario.component.html',
  styleUrls: ['./scenario.component.scss']
})
export class ScenarioComponent implements OnInit {
  @Input()
  model: Scenario;

  @Output()
  saveScenario = new EventEmitter<Scenario>();

  showSaveButton: boolean;
  scenarioForm: FormGroup;
  matcher = new KosamlErrorMatcher();

  titleFormControl: FormControl = new FormControl(null, [Validators.required]);
  descriptionFormControl: FormControl = new FormControl(null);

  ngOnInit() {
    this.showSaveButton = !this.model;

    if (this.model) {
      this.titleFormControl.setValue(this.model.title);
      this.descriptionFormControl.setValue(this.model.description);
    }

    this.scenarioForm = new FormGroup({
      title: this.titleFormControl,
      description: this.descriptionFormControl,
    });
  }

  onSubmit() {
    if (!this.scenarioForm.value) {
      return;
    }

    const title = this.scenarioForm.value.title;
    const description = this.scenarioForm.value.description || "";

    this.saveScenario.emit({ title, description, id: uuid(), });

    // todo: do some smart thing here
  }
}
