import { HelloRoutersPage } from './app.po';

describe('hello-routers App', function() {
  let page: HelloRoutersPage;

  beforeEach(() => {
    page = new HelloRoutersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
