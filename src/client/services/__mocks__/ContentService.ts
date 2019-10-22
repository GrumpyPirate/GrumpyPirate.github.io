import { AboutSectionFormatted, PortfolioItemFormatted } from 'types';

class ContentService {
  public getPortfolioItems(): Promise<PortfolioItemFormatted[]> {
    return Promise.resolve([
      {
        id: '30a8745c-3d77-5671-9119-39c20b4657ac',
        slug: 'throughout-shoulder-spider',
        title: 'Throughout Shoulder Spider',
        descriptionShort:
          'courage condition bright slip climate belt promised space continent ate old differ thought similar leaf dirty species industry word chance compare native title audience',
        description:
          'next news region smile read not garden glad ever capital influence harder spirit route person too sleep tall let himself oil bag especially bottom',
        url: 'http://kog.vi/di',
        tech: [],
        supportingImageSrc: 'http://jofmahes.do/rajonte',
        headerImgSrc: 'http://licamad.fk/elehuvhu',
        previews: {
          desktop: 'http://nembignub.mu/da',
          tablet: 'http://be.my/fa',
          mobile: 'http://rocfi.sj/va',
        },
        createdAt: '8/15/2043',
      },
      {
        id: '6cd9b9bc-d8c5-549a-83a0-40d5510d92ce',
        slug: 'throughout-shoulder-spider',
        title: 'Throughout Shoulder Spider',
        descriptionShort:
          'courage condition bright slip climate belt promised space continent ate old differ thought similar leaf dirty species industry word chance compare native title audience',
        description:
          'next news region smile read not garden glad ever capital influence harder spirit route person too sleep tall let himself oil bag especially bottom',
        url: 'http://kog.vi/di',
        tech: [],
        supportingImageSrc: 'http://jofmahes.do/rajonte',
        headerImgSrc: 'http://licamad.fk/elehuvhu',
        previews: {
          desktop: 'http://nembignub.mu/da',
          tablet: 'http://be.my/fa',
          mobile: 'http://rocfi.sj/va',
        },
        createdAt: '8/15/2043',
      },
    ]);
  }

  public getAboutSections(): Promise<AboutSectionFormatted[]> {
    return Promise.resolve([
      {
        id: 'b1090b38-f66e-5b77-8603-b4b9ec401a7c',
        title: 'Major Floating Tea Giant',
        icons: [{ name: 'mouth' }, { name: 'shot' }, { name: 'too' }],
        slug: 'major-floating-tea-giant',
        content:
          'shirt position connected bottle plain is power putting greatly handle clothes say she sign pretty meant somehow beneath ill indeed school organized tried obtain',
        order: 1,
      },
      {
        id: 'c20d50c3-48b8-507d-af30-5a5c5de29f6a',
        title: 'Major Floating Tea Giant',
        icons: [{ name: 'mouth' }, { name: 'shot' }, { name: 'too' }],
        slug: 'major-floating-tea-giant',
        content:
          'shirt position connected bottle plain is power putting greatly handle clothes say she sign pretty meant somehow beneath ill indeed school organized tried obtain',
        order: 2,
      },
      {
        id: '2e45b6d7-f0e1-5317-8511-b5c0d5cdc634',
        title: 'Major Floating Tea Giant',
        icons: [{ name: 'mouth' }, { name: 'shot' }, { name: 'too' }],
        slug: 'major-floating-tea-giant',
        content:
          'shirt position connected bottle plain is power putting greatly handle clothes say she sign pretty meant somehow beneath ill indeed school organized tried obtain',
        order: 3,
      },
    ]);
  }

  public getSinglePortfolioItem(slug: string): Promise<PortfolioItemFormatted> {
    return Promise.resolve({
      id: '2e6729da-d1a1-5818-a0f3-e0ccb7cdf6d7',
      slug,
      title: 'Throughout Shoulder Spider',
      descriptionShort:
        'courage condition bright slip climate belt promised space continent ate old differ thought similar leaf dirty species industry word chance compare native title audience',
      description:
        'next news region smile read not garden glad ever capital influence harder spirit route person too sleep tall let himself oil bag especially bottom',
      url: 'http://kog.vi/di',
      tech: [],
      supportingImageSrc: 'http://jofmahes.do/rajonte',
      headerImgSrc: 'http://licamad.fk/elehuvhu',
      previews: {
        desktop: 'http://nembignub.mu/da',
        tablet: 'http://be.my/fa',
        mobile: 'http://rocfi.sj/va',
      },
      createdAt: '8/15/2043',
    });
  }
}

export default new ContentService();
export { ContentService };
