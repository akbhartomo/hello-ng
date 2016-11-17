import { HelloSimpleTransitionsPage } from './app.po';

describe('hello-simple-transitions App', function() {
  let page: HelloSimpleTransitionsPage;

  beforeEach(() => {
    page = new HelloSimpleTransitionsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
