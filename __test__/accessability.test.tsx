import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import Popup from '../src';
import { PopupProps } from '../src/types';

const SimplePopup = ({
  children = <span> popup Content </span>,
  ...props
}: Partial<PopupProps>) => (
  <Popup trigger={<button> trigger </button>} {...props}>
    {children}
  </Popup>
);

describe('Popup Positions ', () => {
  test('tooltip with focus should be open on Tab', async () => {
    render(<SimplePopup on="focus" />);
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(screen.getByText(/trigger/)).toHaveFocus();
    await waitFor(
      () => expect(screen.getByRole('tooltip')).toBeInTheDocument(),
      {
        timeout: 200,
      }
    );
  });

  test('On Modal Open we should set Focus first focusable element ', async () => {
    render(
      <SimplePopup modal>
        <button data-testid="b1"> button 1</button>
        <button data-testid="b2"> button 2</button>
        <button data-testid="b3"> button 3</button>
      </SimplePopup>
    );
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(screen.getByText(/trigger/)).toHaveFocus();
    userEvent.click(screen.getByText(/trigger/));

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByTestId('b1')).toHaveFocus();
  });

  test('On Modal Open we should  Prevent Tabbing to Outside the Modal ', async () => {
    render(
      <SimplePopup modal>
        <button data-testid="b1"> button 1</button>
        <button data-testid="b2"> button 2</button>
        <button data-testid="b3"> button 3</button>
      </SimplePopup>
    );
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(screen.getByText(/trigger/)).toHaveFocus();
    userEvent.click(screen.getByText(/trigger/));

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByTestId('b1')).toHaveFocus();
    userEvent.tab();
    expect(screen.getByTestId('b2')).toHaveFocus();
    userEvent.tab();
    expect(screen.getByTestId('b3')).toHaveFocus();
    userEvent.tab();
    expect(screen.getByTestId('b1')).toHaveFocus();
    userEvent.tab({ shift: true });
    expect(screen.getByTestId('b3')).toHaveFocus();
  });

  test('On Close it should focus the latest focused element  ', async () => {
    render(
      <div>
        <button data-testid="b1"> button 1</button>
        <SimplePopup modal />
      </div>
    );
    expect(document.body).toHaveFocus();
    userEvent.tab();
    expect(screen.getByTestId('b1')).toHaveFocus();
    userEvent.click(screen.getByText(/trigger/));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    fireEvent.keyUp(document, { key: 'Escape', code: 'Escape' });
    expect(screen.queryByRole('dialog')).toBeNull();
    expect(screen.getByText(/trigger/)).toHaveFocus();
  });
});
