import renderer from 'react-test-renderer';
import CalButton from '../components/CalButton';

it('Render Calculator correctly', () => {
  const tree = renderer.create(
    <CalButton />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
