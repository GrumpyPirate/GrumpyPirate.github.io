import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Container from 'components/Layout/Container/Container.component';
import Heading from 'components/Typography/Heading/Heading.component';
import Page from 'components/Page/Page.component';
import PageHeader from 'components/PageHeader/PageHeader.component';
import PageHeaderSubtitle from 'components/PageHeaderSubtitle/PageHeaderSubtitle.component';

import classes from './Portfolio.component.scss';

const Portfolio = ({ requestPortfolioItems, portfolioItems }) => {
  useEffect(() => {
    if (portfolioItems.length === 0) {
      requestPortfolioItems();
    }
  }, [portfolioItems]);

  return (
    <Page>
      <PageHeader title="Portfolio">
        <PageHeaderSubtitle>
          Projects I've worked on
        </PageHeaderSubtitle>
      </PageHeader>

      <section className={classes['portfolio']}>
        {!!portfolioItems.length && (
          <Container>
            <div
              className={classes['portfolio__list']}
              role="list"
            >
              {portfolioItems.map(item => (
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
                    <Heading
                      level={3}
                      displayLevel={5}
                      text={item.title}
                    />

                    <p className={classes['portfolio__list-item__desc']}>
                      {item.descriptionShort}
                    </p>
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

Portfolio.propTypes = {
  requestPortfolioItems: PropTypes.func.isRequired,
  portfolioItems: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      headerImgSrc: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      descriptionShort: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Portfolio;