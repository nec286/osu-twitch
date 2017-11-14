import Inferno from 'inferno';
import { renderIntoDocument, renderToSnapshot, scryRenderedDOMElementsWithTag } from 'inferno-test-utils';
import * as common from './';

describe('Badge', () => {
  it('renders OK', () => {
    const tree = renderToSnapshot(
      <common.Badge label="" value={ 999999 } />
    );
    expect(tree).toMatchSnapshot();
  })
});

describe('BeatMapLink', () => {
  it('renders OK', () => {
    const tree = renderToSnapshot(
      <common.BeatMapLink beatMap={{
        beatmap_id: 1,
        mode: 0,
        title: 'foo',
        version: 'bar'
      }} />
    );
    expect(tree).toMatchSnapshot();
  })
});

describe('FlagIcon', () => {
  it('renders OK', () => {
    const tree = renderToSnapshot(
      <common.FlagIcon country="JP" />
    );
    expect(tree).toMatchSnapshot();
  });

  it('has the correct class', () => {
    const tree = renderIntoDocument(
      <common.FlagIcon country="JP" />
    );
    const i = scryRenderedDOMElementsWithTag(tree, 'i');
    expect(i[0].className).toBe('flag-icon flag-icon-jp');
  });
});

describe('ModeSelect', () => {
  it('renders OK', () => {
    const tree = renderToSnapshot(
      <common.ModeSelect onChange={ null } />
    );
    expect(tree).toMatchSnapshot();
  });
});
