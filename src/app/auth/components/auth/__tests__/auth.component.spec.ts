import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared';
import { AuthComponent } from '../auth.component';


const getDebugElementForFieldName =
    (
        fieldName: string,
        fixture: ComponentFixture<AuthComponent>,
    ): DebugElement =>
        fixture.debugElement.query(By.css(`input[name='${fieldName}']`));

/**
 * Create custom DOM event the old fashioned way
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/Event/initEvent
 * Although officially deprecated, some browsers (phantom) don't accept the preferred "new Event(eventName)"
 */
const newEvent = (eventName: string, bubbles = false, cancelable = false) => {
    const evt = document.createEvent('CustomEvent');  // MUST be 'CustomEvent'
    evt.initCustomEvent(eventName, bubbles, cancelable, null);
    return evt;
}


describe('PageComponent', () => {
    let fixture: ComponentFixture<AuthComponent>;
    let instance: AuthComponent;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [AuthComponent],
            imports: [SharedModule],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AuthComponent);

        instance = fixture.componentInstance;
    })

    it('should create', () => {
        fixture.detectChanges();

        expect(instance).toBeTruthy();
    });

    it('should render with login button disabled', () => {
        fixture.detectChanges();

        expect(fixture).toMatchSnapshot();
    });

    it('should enable button when filled out', () => {
        fixture.detectChanges();

        const emailField = getDebugElementForFieldName('email', fixture);
        const pwdField = getDebugElementForFieldName('password', fixture);

        (emailField.nativeElement as HTMLInputElement).value = 'l@l';
        emailField.triggerEventHandler('change', {});

        // emailField.dispatchEvent(newEvent('input'))

        (pwdField.nativeElement as HTMLInputElement).value = 'Test';
        pwdField.triggerEventHandler('change', {});

        // pwdField.dispatchEvent(newEvent('input'))

        fixture.detectChanges();

        fixture.whenStable().then(() => {
            expect(fixture).toMatchSnapshot();
        })
    })
});
