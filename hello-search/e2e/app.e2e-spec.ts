import { HelloSearchPage } from './app.po';

describe('hello-search App', function() {
  let page: HelloSearchPage;

  beforeEach(() => {
    page = new HelloSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
