import React, { FunctionComponent, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Container from 'components/Layout/Container/Container.component';
import Page from 'components/Page/Page.component';
import PageHeader from 'components/PageHeader/PageHeader.component';
import PageHeaderSubtitle from 'components/PageHeaderSubtitle/PageHeaderSubtitle.component';
import Heading from 'components/Typography/Heading/Heading.component';

import classes from './Portfolio.component.scss';
import { PortfolioProps } from './Portfolio.component.types';

const Portfolio: FunctionComponent<PortfolioProps> = ({
  requestPortfolioItems,
  portfolioItems,
}: PortfolioProps) => {
  useEffect(() => {
    if (portfolioItems.length === 0) {
      requestPortfolioItems();
    }
  }, [portfolioItems, requestPortfolioItems]);

  return (
    <Page>
      <PageHeader title="Portfolio">
        <PageHeaderSubtitle>Projects I&apos;ve worked on</PageHeaderSubtitle>
      </PageHeader>

      <section className={classes['portfolio']}>
        {portfolioItems.length > 0 && (
          <Container>
            <div className={classes['portfolio__list']} role="list">
              {portfolioItems.map((item) => (
                <Link
                  key={`portfolio__list-item--${item.slug}--${item.id}`}
                  to={`/portfolio/${item.slug}`}
                  className={classes['portfolio__list-item']}
                  role="listitem"
                >
                  <figure className={classes['portfolio__list-item__media']}>
                    <img src={item.headerImgSrc} alt="" />
                  </figure>

                  <div className={classes['portfolio__list-item__copy']}>
                    <Heading level={3} displayLevel={5} text={item.title} />

                    <p className={classes['portfolio__list-item__desc']}>{item.descriptionShort}</p>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        )}
      </section>
    </Page>
  );
};

export default Portfolio;
