import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Popup from '../src';
import { PopupProps } from '../src/types';
import { getTooltipBoundary } from '../src/Utils';

const SimplePopup = ({ ...props }: Partial<PopupProps>) => (
  <Popup trigger={<button> trigger </button>} {...props}>
    <span> popup Content </span>
  </Popup>
);

/*
At this Moment I didn't found a right way to test  position as position depend on getBoundingClientRect
and getBoundingClientRect is not supported by jsdom

*/

describe('Popup Positions ', () => {
  test('getTooltipBoundary should work correctly ', async () => {
    render(
      <div id="wrapper" role="wrapper">
        <SimplePopup />
      </div>
    );
    // limit should be widow if we don't specify a selector
    expect(getTooltipBoundary(true)).toEqual({
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    });
    const wrapper = screen.getByRole('wrapper');
    wrapper.getBoundingClientRect = jest.fn(() => ({
      x: 100,
      y: 100,
      width: 300,
      height: 300,
      top: 100,
      right: window.innerWidth - 300,
      bottom: window.innerHeight - 300,
      left: 100,
      toJSON: () => {},
    }));
    expect(JSON.stringify(getTooltipBoundary('#wrapper'))).toEqual(
      JSON.stringify(wrapper.getBoundingClientRect())
    );

    fireEvent.click(screen.getByText('trigger'));
    expect(screen.getByRole('tooltip')).toBeInTheDocument();
  });

  test(' test tooltip position', () => {
    render(
      <div id="wrapper" role="wrapper">
        <SimplePopup />
      </div>
    );
    fireEvent.click(screen.getByText('trigger'));
    expect(screen.getByRole('tooltip')).toHaveStyle(`position: absolute`);
  });
});
