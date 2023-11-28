import { render, screen } from '@testing-library/react-native';
import GoogleSignIn from './GoogleSignIn';

describe('GoogleSignIn test suite', () => {
    it('Renders correctly', () => {
        render(<GoogleSignIn />);
        screen.getByText('Sign up with Google');
    });
});
