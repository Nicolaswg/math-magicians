import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navbar from '../components/Navbar';

it('Render Navbar correctly', () => {
  const tree = renderer.create(
    <Router>
      <Navbar />
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
