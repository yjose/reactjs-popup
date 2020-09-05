import React, { useState, useRef } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Popup from '../src';
import { PopupProps, PopupActions } from '../src/types';
import { Button } from '../stories/components/Button';

const ControlledPopup = ({ ...props }: Partial<PopupProps>) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button data-testid="button" onClick={() => setOpen(open => !open)}>
        {' '}
        button{' '}
      </button>
      <Popup {...props} open={open}>
        <span> popup Content </span>
      </Popup>
    </>
  );
};

const PopupWithRef = ({ ...props }: Partial<PopupProps>) => {
  const popupRef = useRef<PopupActions>(null);

  return (
    <>
      <button data-testid="open" onClick={() => popupRef?.current?.open()}>
        button
      </button>
      <button data-testid="close" onClick={() => popupRef?.current?.close()}>
        button
      </button>
      <button data-testid="toggle" onClick={() => popupRef?.current?.toggle()}>
        button
      </button>
      <Popup {...props} ref={popupRef}>
        <span> popup Content </span>
      </Popup>
    </>
  );
};

const PopupAsFunc = ({ ...props }: Partial<PopupProps>) => {
  return (
    <>
      <Popup
        {...props}
        trigger={isOpen => (
          <Button data-testid="button">
            {' '}
            this should work {isOpen ? 'opened' : 'closed'}{' '}
          </Button>
        )}
      >
        {(close: Function) => (
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            suscipit iusto necessitatibus ipsam. Nostrum recusandae ea quis
            quidem dicta eum, iste minus. Placeat, commodi error laboriosam
            aperiam odit culpa aliquam!
            <button data-testid="close" onClick={() => close()}>
              {' '}
              close modal{' '}
            </button>
          </div>
        )}
      </Popup>
    </>
  );
};

/*
At this Moment I didn't found a right way to test  position as position depend on getBoundingClientRect
and getBoundingClientRect is not supported by jsdom

*/

describe('Controlled Popup ', () => {
  test('should render a Modal on trigger = null ', async () => {
    render(<ControlledPopup />);

    fireEvent.click(screen.getByTestId('button'));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  test('should be synced with external state ', async () => {
    render(<ControlledPopup />);

    fireEvent.click(screen.getByTestId('button'));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('button'));
    expect(screen.queryByRole('dialog')).toBeNull();
  });

  test('should work with ref actions ', async () => {
    render(<PopupWithRef />);

    fireEvent.click(screen.getByTestId('close'));
    expect(screen.queryByRole('dialog')).toBeNull();

    fireEvent.click(screen.getByTestId('open'));
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('close'));
    expect(screen.queryByRole('dialog')).toBeNull();

    fireEvent.click(screen.getByTestId('toggle'));
    expect(screen.queryByRole('dialog')).toBeInTheDocument();
  });

  test('should lock scroll with controlled popup ', async () => {
    render(<ControlledPopup lockScroll />);

    fireEvent.click(screen.getByTestId('button'));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(document.body).toHaveStyle(`overflow: hidden`);

    fireEvent.click(screen.getByTestId('button'));
    expect(screen.queryByRole('dialog')).toBeNull();
    expect(document.body).toHaveStyle(`overflow: auto`);
  });

  test('should work correctly with children as fun and trigger as function ', async () => {
    render(<PopupAsFunc modal />);

    fireEvent.click(screen.getByTestId('button'));
    expect(screen.getByTestId('button')).toHaveTextContent('opened');
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('close'));
    expect(screen.getByTestId('button')).toHaveTextContent('closed');
    expect(screen.queryByRole('dialog')).toBeNull();
  });
});
// should add nested prop
