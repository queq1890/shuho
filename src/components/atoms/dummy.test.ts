import a from 'pages/index';

describe('dummy', () => {
  it('passes', () => {
    console.log(a);
    expect('a').toBe('a');
  });

  it('fails', () => {
    expect('a').toBe('b');
  });
});
