import renderer from 'react-test-renderer';
import Quote from '../pages/Quote';

it('Render Quote correctly', () => {
  const tree = renderer.create(
    <Quote />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
