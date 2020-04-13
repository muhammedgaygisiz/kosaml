import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared';
import { AuthComponent } from '../auth.component';


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

        instance.emailFormControl.setValue('l@l.de');
        instance.passwordFormControl.setValue('Test4711');

        fixture.detectChanges();

        expect(fixture).toMatchSnapshot()
        expect(
            (
                fixture
                    .debugElement
                    .query(By.css('button[type=submit]')).nativeElement as HTMLButtonElement)
                .disabled
        ).toBe(false);
    });

    it('should render registration', () => {
        fixture.detectChanges();

        instance.isLoginMode = false;

        fixture.detectChanges();

        expect(fixture).toMatchSnapshot();
        expect(
            (
                fixture
                    .debugElement
                    .query(By.css('button[type=submit]')).nativeElement as HTMLButtonElement)
                .textContent.trim()

        ).toBe("Sign Up");
    })
});
