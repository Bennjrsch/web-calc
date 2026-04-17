// src/app/page.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Home from './page';

const user = userEvent.setup();

describe('Calculator Component', () => {
    it('renders the display and all buttons', () => {
        render(<Home />);
        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(screen.getByText('1')).toBeInTheDocument();
    });

    it('allows typing numbers and operators', async () => {
        render(<Home />);
        const display = screen.getByRole('textbox') as HTMLTextAreaElement;

        await user.click(screen.getByText('5'));
        await user.click(screen.getByText('+'));
        await user.click(screen.getByText('3'));

        expect(display.value).toBe('5+3');
    });

    it('calculates correctly when pressing =', async () => {
        render(<Home />);
        const display = screen.getByRole('textbox') as HTMLTextAreaElement;

        await user.click(screen.getByText('8'));
        await user.click(screen.getByText('*'));
        await user.click(screen.getByText('7'));
        await user.click(screen.getByText('='));

        expect(display.value).toBe('56');
    });

    it('clears the display when pressing C', async () => {
        render(<Home />);
        const display = screen.getByRole('textbox') as HTMLTextAreaElement;

        await user.click(screen.getByText('9'));
        await user.click(screen.getByText('C'));

        expect(display.value).toBe('');
    });

    it('calculates Fibonacci correctly', async () => {
        render(<Home />);
        const display = screen.getByRole('textbox') as HTMLTextAreaElement;

        await user.click(screen.getByText('6'));
        await user.click(screen.getByText('f'));

        expect(display.value).toBe('8');
    });

    it('calculates Factorial correctly', async () => {
        render(<Home />);
        const display = screen.getByRole('textbox') as HTMLTextAreaElement;

        await user.click(screen.getByText('5'));
        await user.click(screen.getByText('f!'));

        expect(display.value).toBe('120');
    });

    it('shows "Error" for invalid input', async () => {
        render(<Home />);
        const display = screen.getByRole('textbox') as HTMLTextAreaElement;

        await user.click(screen.getByText('='));

        expect(display.value).toBe('Error');
    });
});