import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from 'src/app/shared';
import { AuthComponent } from '../auth.component';

const getFieldByFieldName =
    (
        fieldName: string,
        fixture: ComponentFixture<AuthComponent>,
    ): HTMLElement =>
        fixture.debugElement.nativeElement.querySelector(`input[name]='${fieldName}'`);


describe('PageComponent', () => {
    let instance: AuthComponent;
    let fixture: ComponentFixture<AuthComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AuthComponent],
            imports: [SharedModule],
            schemas: [NO_ERRORS_SCHEMA]
        })

        fixture = TestBed.createComponent(AuthComponent);
        instance = fixture.componentInstance;
    });

    it('should create', () => {
        fixture.detectChanges();

        expect(instance).toBeTruthy();
    });

    it('should render with login button disabled', () => {
        fixture.detectChanges();

        expect(fixture).toMatchSnapshot();
    });


});
