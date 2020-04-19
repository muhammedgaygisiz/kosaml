import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { uuid } from 'uuidv4';
import { Scenario } from '../../model';
import { KosamlErrorMatcher } from './KosamlErrorMatcher';

@Component({
  selector: 'kosaml-scenario',
  templateUrl: './scenario.component.html',
  styleUrls: ['./scenario.component.scss']
})
export class ScenarioComponent implements OnInit, OnChanges {
  @Input()
  model: Scenario;

  @Input()
  showDeleteButton: boolean = false;

  @Output()
  saveScenario = new EventEmitter<Scenario>();

  @Output()
  deleteScenario = new EventEmitter<Scenario>();

  scenarioForm: FormGroup;

  matcher = new KosamlErrorMatcher();

  titleFormControl: FormControl = new FormControl(null, [Validators.required]);
  descriptionFormControl: FormControl = new FormControl(null);

  ngOnInit() {
    this.setFormFields(this.model);

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

    this.scenarioForm.reset();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.setFormFields(this.model)
  }

  setFormFields(model: Scenario) {
    if (this.model) {
      this.titleFormControl.setValue(model.title);
      this.descriptionFormControl.setValue(model.description);
    }
  }

  onDelete() {
    this.deleteScenario.next(this.model);
  }
}
