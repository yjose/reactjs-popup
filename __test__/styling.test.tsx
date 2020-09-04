import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Popup from '../src';
import { PopupProps } from '../src/types';

const SimplePopup = ({ ...props }: Partial<PopupProps>) => (
  <Popup trigger={<button> trigger </button>} {...props}>
    <span> popup Content </span>
  </Popup>
);

describe('Popup Positions ', () => {
  test('should override popup content style using contentStyle prop', async () => {
    const contentStyle = { backgroundColor: 'red' };
    render(<SimplePopup contentStyle={contentStyle} />);

    fireEvent.click(screen.getByText(/trigger/));
    expect(screen.getByRole('tooltip')).toHaveStyle(contentStyle);
  });

  test('contentStyle shouldnt override  layout position ', async () => {
    const contentStyle = { background: 'red', top: 100 };
    render(<SimplePopup contentStyle={contentStyle} />);

    fireEvent.click(screen.getByText(/trigger/));
    expect(screen.getByRole('tooltip').style.top).not.toEqual('100px');
  });

  test('should override overlay  style using overlayStyle prop', async () => {
    const overlayStyle = { background: 'blue' };
    render(<SimplePopup overlayStyle={overlayStyle} />);

    fireEvent.click(screen.getByText(/trigger/));
    expect(screen.getByTestId('overlay')).toHaveStyle(overlayStyle);
  });

  test('should override overlay style using overlayStyle prop', async () => {
    const arrowStyle = { background: 'blue' };
    render(<SimplePopup arrowStyle={arrowStyle} />);

    fireEvent.click(screen.getByText(/trigger/));

    expect(screen.getByTestId('arrow')).toHaveStyle(arrowStyle);
  });

  test('should add the correct classNames ', async () => {
    render(<SimplePopup className="my_popup" />);

    fireEvent.click(screen.getByText(/trigger/));

    expect(screen.getByTestId('overlay').className).toBe(
      'popup-overlay my_popup-overlay'
    );
    expect(screen.getByRole('tooltip').className).toBe(
      'popup-content my_popup-content'
    );
  });

  test('should support multiple  classNames ', async () => {
    render(<SimplePopup className="my_popup test" />);
    fireEvent.click(screen.getByText(/trigger/));

    expect(screen.getByTestId('overlay').className).toBe(
      'popup-overlay my_popup-overlay test-overlay'
    );
    expect(screen.getByRole('tooltip').className).toBe(
      'popup-content my_popup-content test-content'
    );
  });
});
