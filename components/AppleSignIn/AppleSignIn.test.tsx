import { render, screen } from '@testing-library/react-native';
import AppleSignIn from './AppleSignIn';

describe('AppleSignIn test suite', () => {
    it('Renders correctly', () => {
        render(<AppleSignIn />);
        screen.getByText('Sign up with Apple');
    });
});
