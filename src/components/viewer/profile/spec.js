import Inferno from 'inferno';
import { renderIntoDocument, renderToSnapshot, scryRenderedDOMElementsWithTag } from 'inferno-test-utils';
import * as profile from './';

describe('Statistic', () => {
  it('renders OK', () => {
    const tree = renderToSnapshot(
      <profile.Statistic value={ 999999 } />
    );
    expect(tree).toMatchSnapshot();
  })
});

describe('Accuracy', () => {
  it('renders OK', () => {
    const tree = renderToSnapshot(
      <profile.Accuracy value={ 99.12345 } />
    );
    expect(tree).toMatchSnapshot();
  });

  it('displays a formatted value', () => {
    const tree = renderIntoDocument(
      <profile.Accuracy value={ 99.12345 } />
    );
    const tds = scryRenderedDOMElementsWithTag(tree, 'td');
    expect(tds[1].innerHTML).toBe('99.12%');
  });
});

describe('Score', () => {
  it('renders OK', () => {
    const tree = renderToSnapshot(
      <profile.Score value={ 999999 } />
    );
    expect(tree).toMatchSnapshot();
  });

  it('displays a formatted value', () => {
    const tree = renderIntoDocument(
      <profile.Score value={ 999999 } />
    );
    const tds = scryRenderedDOMElementsWithTag(tree, 'td');
    expect(tds[1].innerHTML).toBe('999,999');
  });
});

describe('Badges', () => {
  it('renders OK', () => {
    const tree = renderToSnapshot(
      <profile.Badges user={ { level: 9 } } />
    );
    expect(tree).toMatchSnapshot();
  });
});


describe('Level', () => {
  it('renders OK', () => {
    const tree = renderToSnapshot(
      <profile.Level value={ 99.12345 } />
    );
    expect(tree).toMatchSnapshot();
  });

  it('displays a formatted value', () => {
    const tree = renderIntoDocument(
      <profile.Level value={ 99.12345 } />
    );
    const divs = scryRenderedDOMElementsWithTag(tree, 'div');
    expect(divs[2].innerHTML).toBe('99');
  });
});
