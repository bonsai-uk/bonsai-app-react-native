import { render, screen } from '@testing-library/react-native';
import ThirdPartySignIn from './ThirdPartySignIn';

describe('AppleSignIn test suite', () => {
    it('Renders correctly for Google', () => {
        render(<ThirdPartySignIn thirdParty="Google" />);
        screen.getByText('Sign up with Google');
    });

    it('Renders correctly for Apple', () => {
        render(<ThirdPartySignIn thirdParty="Apple" />);
        screen.getByText('Sign up with Apple');
    });
});
