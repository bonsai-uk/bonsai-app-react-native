import { render, screen } from '@testing-library/react-native';
import NewAccount from './NewAccount';

describe('NewAccount test suite', () => {
    it('Renders correctly', () => {
        render(<NewAccount />);
        screen.getByText("Don't have an account?");
        screen.getByText('Create one here');
    });
});
