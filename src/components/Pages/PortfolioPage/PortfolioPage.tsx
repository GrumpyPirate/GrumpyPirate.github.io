import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Container from 'components/Layout/Container/Container';
import Page from 'components/Page/Page';
import PageHeader from 'components/PageHeader/PageHeader';
import PageHeaderSubtitle from 'components/PageHeaderSubtitle/PageHeaderSubtitle';
import Heading from 'components/Typography/Heading/Heading';
import { AppDispatch, RootState } from 'store';
import { requestPortfolioItems } from 'store/portfolio/portfolio.actions';

import classes from './PortfolioPage.scss';

const PortfolioPage: FunctionComponent = () => {
  const portfolioItems = useSelector((state: RootState) => state.portfolio.portfolioItems);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (portfolioItems.length === 0) {
      dispatch(requestPortfolioItems());
    }
  }, [dispatch, portfolioItems.length]);

  return (
    <Page>
      <PageHeader title="Portfolio">
        <PageHeaderSubtitle>Projects I&apos;ve worked on</PageHeaderSubtitle>
      </PageHeader>

      <section className={classes['portfolio-page']}>
        {portfolioItems.length > 0 && (
          <Container>
            <div className={classes['portfolio-page__list']} role="list">
              {portfolioItems.map((item) => (
                <Link
                  key={`portfolio__list-item--${item.slug}--${item.id}`}
                  to={`/portfolio/${item.slug}`}
                  className={classes['portfolio-page__list-item']}
                  role="listitem"
                >
                  <figure className={classes['portfolio-page__list-item__media']}>
                    <img src={item.headerImgSrc} alt="" />
                  </figure>

                  <div className={classes['portfolio-page__list-item__copy']}>
                    <Heading level={3} displayLevel={5} text={item.title} />

                    <p className={classes['portfolio-page__list-item__desc']}>
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

export default PortfolioPage;
