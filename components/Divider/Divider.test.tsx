import { render, screen } from '@testing-library/react-native';
import Divider from './Divider';

describe('Divider test suite', () => {
    it('Renders correctly', () => {
        render(<Divider />);
        screen.getByText('or');

        const divider = screen.getByTestId('divider');
        expect(divider.children).toHaveLength(3);
    });
});
