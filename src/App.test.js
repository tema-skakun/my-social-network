import { render } from '@testing-library/react';
import MySocialNetwork from "./App";
import {unmountComponentAtNode} from "react-dom";

// test('renders learn react link', () => {
//   render(<MySocialNetwork />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// тест из старой версии реакт
it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<MySocialNetwork />);
  unmountComponentAtNode(div);
})