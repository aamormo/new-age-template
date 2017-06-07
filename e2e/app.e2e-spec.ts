import { NewAgeTemplatePage } from './app.po';

describe('new-age-template App', () => {
  let page: NewAgeTemplatePage;

  beforeEach(() => {
    page = new NewAgeTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
