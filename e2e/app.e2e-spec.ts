import { FeServerPage } from './app.po';

describe('fe-server App', () => {
  let page: FeServerPage;

  beforeEach(() => {
    page = new FeServerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
