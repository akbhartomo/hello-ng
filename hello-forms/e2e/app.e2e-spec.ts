import { HelloFormsPage } from './app.po';

describe('hello-forms App', function() {
  let page: HelloFormsPage;

  beforeEach(() => {
    page = new HelloFormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
