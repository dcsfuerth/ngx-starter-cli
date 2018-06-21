import { metaReducers, reducers } from '.';

describe('root reducer map', () => {
  it('returns an ActionReducerMap', () => {
    expect(reducers).toBeInstanceOf(Object);

    Object.values(reducers).forEach(reducer => {
      expect(typeof reducer).toBe('function');
    });
  });
});

describe('meta reduces', () => {
  // metaReducers;
  it('contains an array of meta reducers', () => {
    expect(metaReducers).toBeInstanceOf(Array);

    Object.values(metaReducers).forEach(reducer => {
      expect(typeof reducer).toBe('function');
    });
  });
});
