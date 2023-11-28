import { render, screen } from '@testing-library/react-native';
import Title from './Title';

describe('Title test suite', () => {
    it('Renders correctly', () => {
        render(<Title subheading="Test Subheading" />);
        screen.getByText('Bonsai.');
        screen.getByText('Test Subheading');
    });

    it('Renders correctly with no subheading', () => {
        render(<Title />);
        screen.getByText('Bonsai.');
    });
});
