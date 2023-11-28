import { render, screen } from '@testing-library/react-native';
import SolidButton from './SolidButton';

describe('SolidButton test suite', () => {
    it('Renders correctly', () => {
        render(<SolidButton title="Login" />);
        screen.getByText('Login');
    });
});
