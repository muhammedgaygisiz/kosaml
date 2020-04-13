import { moduleMetadata } from '@storybook/angular';
import { SharedModule } from 'src/app/shared';
import { AuthComponent } from '../auth.component';


export default {
    title: 'Auth',
    decorators: [
        moduleMetadata({
            imports: [SharedModule],
            providers: []
        })
    ]
}

export const login = () => ({
    component: AuthComponent,
});

export const registration = () => ({
    component: AuthComponent,
    props: {
        isLoginMode: false
    }
})