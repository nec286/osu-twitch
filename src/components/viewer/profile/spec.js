import Inferno from 'inferno';
import { renderIntoDocument, renderToSnapshot } from 'inferno-test-utils';
import GlobalPPRank from './GlobalPPRank';
import CountryPPRank from './CountryPPRank';
import PlayCount from './PlayCount';
import Accuracy from './Accuracy';
import RankedScore from './RankedScore';
import TotalScore from './TotalScore';
import LetterRank from './LetterRank';
import Level from './Level';
import LevelProgress from './LevelProgress';

describe('GlobalPPRank', () => {
  it('renders OK', () => {
    const tree = renderToSnapshot(
      <GlobalPPRank value={ 1 } />
    );
    expect(tree).toMatchSnapshot();
  })
});

describe('CountryPPRank', () => {
  it('renders OK', () => {
    const tree = renderToSnapshot(
      <CountryPPRank value={ 1 } />
    );
    expect(tree).toMatchSnapshot();
  });
});

describe('PlayCount', () => {
  it('renders OK', () => {
    const tree = renderToSnapshot(
      <PlayCount value={ 1 } />
    );
    expect(tree).toMatchSnapshot();
  });
});

describe('Accuracy', () => {
  it('renders OK', () => {
    const tree = renderToSnapshot(
      <Accuracy value={ 99.999 } />
    );
    expect(tree).toMatchSnapshot();
  });
});

describe('RankedScore', () => {
  it('renders OK', () => {
    const tree = renderToSnapshot(
      <RankedScore value={ 999999 } />
    );
    expect(tree).toMatchSnapshot();
  });
});

describe('TotalScore', () => {
  it('renders OK', () => {
    const tree = renderToSnapshot(
      <TotalScore value={ 999999 } />
    );
    expect(tree).toMatchSnapshot();
  });
});

describe('LetterRank', () => {
  it('renders OK', () => {
    const tree = renderToSnapshot(
      <LetterRank value={ 999 } />
    );
    expect(tree).toMatchSnapshot();
  });
});

describe('Level', () => {
  it('renders OK', () => {
    const tree = renderToSnapshot(
      <Accuracy value={ 99.99 } />
    );
    expect(tree).toMatchSnapshot();
  });
});

describe('LevelProgress', () => {
  it('renders OK', () => {
    const tree = renderToSnapshot(
      <LevelProgress level={ 99.99 } />
    );
    expect(tree).toMatchSnapshot();
  });
});
