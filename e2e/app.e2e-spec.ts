import { AdynamoPage } from './app.po';

describe('adynamo App', () => {
  let page: AdynamoPage;

  beforeEach(() => {
    page = new AdynamoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
