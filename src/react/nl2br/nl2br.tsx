import { Fragment } from 'react';

export function nl2br(text: string): JSX.Element {
  const lines = text.split('\n');

  return (
    <>
      {lines.map((line, index) => (
        <Fragment key={index}>
          {line}
          {index < lines.length - 1 && <br />}
        </Fragment>
      ))}
    </>
  );
}
