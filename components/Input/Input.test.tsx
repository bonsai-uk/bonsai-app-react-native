import { render, screen } from '@testing-library/react-native';
import Input from './Input';

describe('Input test suite', () => {
    it('Renders correctly', () => {
        render(<Input placeholder="Email" iconName="envelope" />);
        const container = screen.getByTestId('input-component');

        expect(screen.queryByPlaceholderText('Email')).toBeTruthy();
        expect(container.children).toHaveLength(2);
    });

    it('Renders correctly with no icon', () => {
        render(<Input placeholder="Email" />);
        const container = screen.getByTestId('input-component');

        expect(screen.queryByPlaceholderText('Email')).toBeTruthy();
        expect(container.children).toHaveLength(1);
    });
});
