import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  close?: () => void;
  title?: string;
};
export const Content = ({
  children = ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum ducimus sed dolores, magni saepe libero nemo atque? Sed quibusdam nemo voluptatibus a deleniti aut labore voluptatem illum? Assumenda, modi. Omnis.',
  close = () => {},
  title = 'Modal Title',
}: Props) => (
  <div>
    <a
      href=""
      onClick={e => {
        e.preventDefault();
        close();
      }}
      title="Close"
      className="modal-close"
    >
      Close
    </a>
    <div className="modal-title">
      <h2>{title} </h2>
    </div>
    <div className="modal-content">{children}</div>
  </div>
);
