import { render, fireEvent } from '@testing-library/react';
import Button from './Button'

describe("Button", () => {
  it("Should render button with specific label", async () => {
    const { findByText } = render(<Button label='Read more' onClick={() => {}}/>);
    const button = await findByText('Read more');
    expect(button).toBeTruthy();
  });

  it("Should trigger function onClick", async () => {
    const onClick = jest.fn();
    const { findByText } = render(<Button label='Read more' onClick={onClick}/>);
    const button = await findByText('Read more');
    fireEvent.click(button);

    expect(onClick).toBeCalledTimes(1);
  });
});
