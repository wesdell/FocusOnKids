import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

it("render Container component", () => {
  const {container} = render(<App />)
  expect(container).toHaveTextContent('Container')
})

