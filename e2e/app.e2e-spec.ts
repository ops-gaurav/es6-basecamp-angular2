import { Es6BasecampAngular2Page } from './app.po';

describe('es6-basecamp-angular2 App', function() {
  let page: Es6BasecampAngular2Page;

  beforeEach(() => {
    page = new Es6BasecampAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
