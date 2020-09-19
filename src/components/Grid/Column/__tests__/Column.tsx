import { render } from '@testing-library/react';
import React from 'react';

import { gridColumns, mediaQueries } from 'styles';

import Column from '../Column';
import { ColumnProps } from '../Column.types';

describe('Components/Grid/Column', () => {
  const props: ColumnProps = {
    children: <div>Children</div>,
  };

  test('should render as expected, without crashing', () => {
    const { container } = render(<Column {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  describe('Column sizing UP', () => {
    test('should size columns automatically, by default', () => {
      const { container } = render(<Column {...props} />);

      expect(container.firstChild).toHaveStyleRule('flex', '1 0 auto');
    });

    test('should respect provided column sizing, per breakpoint', () => {
      const columnWidth = 4;
      const expectedPercentage = `${(columnWidth / gridColumns) * 100}%`;
      const { container: xsContainer } = render(<Column {...props} xs={columnWidth} />);
      const { container: smContainer } = render(<Column {...props} sm={columnWidth} />);
      const { container: mdContainer } = render(<Column {...props} md={columnWidth} />);
      const { container: lgContainer } = render(<Column {...props} lg={columnWidth} />);
      const { container: xlContainer } = render(<Column {...props} xl={columnWidth} />);
      const { container: xxlContainer } = render(<Column {...props} xxl={columnWidth} />);

      expect(xsContainer.firstChild).toHaveStyleRule('flex-basis', expectedPercentage);
      expect(xsContainer.firstChild).toHaveStyleRule('max-width', expectedPercentage);

      expect(smContainer.firstChild).toHaveStyleRule('flex-basis', expectedPercentage, {
        media: mediaQueries.sm,
      });
      expect(smContainer.firstChild).toHaveStyleRule('max-width', expectedPercentage, {
        media: mediaQueries.sm,
      });

      expect(mdContainer.firstChild).toHaveStyleRule('flex-basis', expectedPercentage, {
        media: mediaQueries.md,
      });
      expect(mdContainer.firstChild).toHaveStyleRule('max-width', expectedPercentage, {
        media: mediaQueries.md,
      });

      expect(lgContainer.firstChild).toHaveStyleRule('flex-basis', expectedPercentage, {
        media: mediaQueries.lg,
      });
      expect(lgContainer.firstChild).toHaveStyleRule('max-width', expectedPercentage, {
        media: mediaQueries.lg,
      });

      expect(xlContainer.firstChild).toHaveStyleRule('flex-basis', expectedPercentage, {
        media: mediaQueries.xl,
      });
      expect(xlContainer.firstChild).toHaveStyleRule('max-width', expectedPercentage, {
        media: mediaQueries.xl,
      });

      expect(xxlContainer.firstChild).toHaveStyleRule('flex-basis', expectedPercentage, {
        media: mediaQueries.xxl,
      });
      expect(xxlContainer.firstChild).toHaveStyleRule('max-width', expectedPercentage, {
        media: mediaQueries.xxl,
      });
    });

    test('should employ a mobile-first approach to sizing columns', () => {
      const testProps = {
        ...props,
        xs: 11,
        sm: 10,
        md: 9,
        lg: 8,
        xl: 7,
        xxl: 6,
      };
      const { container } = render(<Column {...testProps} />);

      expect(container.firstChild).toHaveStyleRule(
        'flex-basis',
        `${(testProps.xs / gridColumns) * 100}%`,
      );
      expect(container.firstChild).toHaveStyleRule(
        'flex-basis',
        `${(testProps.sm / gridColumns) * 100}%`,
        {
          media: mediaQueries.sm,
        },
      );
      expect(container.firstChild).toHaveStyleRule(
        'flex-basis',
        `${(testProps.md / gridColumns) * 100}%`,
        {
          media: mediaQueries.md,
        },
      );
      expect(container.firstChild).toHaveStyleRule(
        'flex-basis',
        `${(testProps.lg / gridColumns) * 100}%`,
        {
          media: mediaQueries.lg,
        },
      );
      expect(container.firstChild).toHaveStyleRule(
        'flex-basis',
        `${(testProps.xl / gridColumns) * 100}%`,
        {
          media: mediaQueries.xl,
        },
      );
      expect(container.firstChild).toHaveStyleRule(
        'flex-basis',
        `${(testProps.xxl / gridColumns) * 100}%`,
        {
          media: mediaQueries.xxl,
        },
      );
    });
  });

  describe('Column sizing DOWN', () => {
    test('should respect column sizing, per breakpoint', () => {
      const columnWidth = 3;
      const expectedPercentage = `${(columnWidth / gridColumns) * 100}%`;
      const { container: smContainer } = render(<Column {...props} smDown={columnWidth} />);
      const { container: mdContainer } = render(<Column {...props} mdDown={columnWidth} />);
      const { container: lgContainer } = render(<Column {...props} lgDown={columnWidth} />);
      const { container: xlContainer } = render(<Column {...props} xlDown={columnWidth} />);

      expect(smContainer.firstChild).toHaveStyleRule('flex-basis', expectedPercentage, {
        media: mediaQueries.smDown,
      });
      expect(smContainer.firstChild).toHaveStyleRule('max-width', expectedPercentage, {
        media: mediaQueries.smDown,
      });

      expect(mdContainer.firstChild).toHaveStyleRule('flex-basis', expectedPercentage, {
        media: mediaQueries.mdDown,
      });
      expect(mdContainer.firstChild).toHaveStyleRule('max-width', expectedPercentage, {
        media: mediaQueries.mdDown,
      });

      expect(lgContainer.firstChild).toHaveStyleRule('flex-basis', expectedPercentage, {
        media: mediaQueries.lgDown,
      });
      expect(lgContainer.firstChild).toHaveStyleRule('max-width', expectedPercentage, {
        media: mediaQueries.lgDown,
      });

      expect(xlContainer.firstChild).toHaveStyleRule('flex-basis', expectedPercentage, {
        media: mediaQueries.xlDown,
      });
      expect(xlContainer.firstChild).toHaveStyleRule('max-width', expectedPercentage, {
        media: mediaQueries.xlDown,
      });
    });

    test('should employ a largest-first approach to sizing columns', () => {
      const testProps = {
        smDown: 9,
        mdDown: 8,
        lgDown: 7,
        xlDown: 6,
        xxl: 11,
      };
      const { container } = render(<Column {...testProps} />);

      expect(container.firstChild).toHaveStyleRule(
        'flex-basis',
        `${(testProps.smDown / gridColumns) * 100}%`,
        {
          media: mediaQueries.smDown,
        },
      );
      expect(container.firstChild).toHaveStyleRule(
        'flex-basis',
        `${(testProps.mdDown / gridColumns) * 100}%`,
        {
          media: mediaQueries.mdDown,
        },
      );
      expect(container.firstChild).toHaveStyleRule(
        'flex-basis',
        `${(testProps.lgDown / gridColumns) * 100}%`,
        {
          media: mediaQueries.lgDown,
        },
      );
      expect(container.firstChild).toHaveStyleRule(
        'flex-basis',
        `${(testProps.xlDown / gridColumns) * 100}%`,
        {
          media: mediaQueries.xlDown,
        },
      );
    });
  });

  describe('Column sizing ONLY', () => {
    test('should respect column sizing, for specific breakpoints', () => {
      const columnWidth = 8;
      const expectedPercentage = `${(columnWidth / gridColumns) * 100}%`;
      const { container: xsContainer } = render(<Column {...props} sm={12} xsOnly={columnWidth} />);
      const { container: smContainer } = render(<Column {...props} xs={12} smOnly={columnWidth} />);
      const { container: mdContainer } = render(<Column {...props} xs={12} mdOnly={columnWidth} />);
      const { container: lgContainer } = render(<Column {...props} xs={12} lgOnly={columnWidth} />);
      const { container: xlContainer } = render(<Column {...props} xs={12} xlOnly={columnWidth} />);

      expect(xsContainer.firstChild).toHaveStyleRule('flex-basis', expectedPercentage, {
        media: mediaQueries.xsOnly,
      });
      expect(xsContainer.firstChild).toHaveStyleRule('flex-basis', '100%', {
        media: mediaQueries.sm,
      });

      expect(smContainer.firstChild).toHaveStyleRule('flex-basis', expectedPercentage, {
        media: mediaQueries.smOnly,
      });

      expect(mdContainer.firstChild).toHaveStyleRule('flex-basis', expectedPercentage, {
        media: mediaQueries.mdOnly,
      });

      expect(lgContainer.firstChild).toHaveStyleRule('flex-basis', expectedPercentage, {
        media: mediaQueries.lgOnly,
      });

      expect(xlContainer.firstChild).toHaveStyleRule('flex-basis', expectedPercentage, {
        media: mediaQueries.xlOnly,
      });
    });
  });

  describe('Column pushes', () => {
    test('should handle a default push', () => {
      const push = 2;
      const expectedPercentage = `${(push / gridColumns) * 100}%`;
      const testProps = {
        ...props,
        push,
      };
      const { container } = render(<Column {...testProps} />);

      expect(container.firstChild).toHaveStyleRule('left', expectedPercentage);
    });

    test('should handle pushes, by breakpoint', () => {
      const testProps = {
        xs: 6,
        pushXs: 1,
        pushSm: 2,
        pushMd: 3,
        pushLg: 4,
        pushXl: 5,
        pushXxl: 6,
      };
      const { container } = render(<Column {...testProps} />);

      expect(container.firstChild).toHaveStyleRule(
        'left',
        `${(testProps.pushXs / gridColumns) * 100}%`,
        {
          media: mediaQueries.xsOnly,
        },
      );
      expect(container.firstChild).toHaveStyleRule(
        'left',
        `${(testProps.pushSm / gridColumns) * 100}%`,
        {
          media: mediaQueries.sm,
        },
      );
      expect(container.firstChild).toHaveStyleRule(
        'left',
        `${(testProps.pushMd / gridColumns) * 100}%`,
        {
          media: mediaQueries.md,
        },
      );
      expect(container.firstChild).toHaveStyleRule(
        'left',
        `${(testProps.pushLg / gridColumns) * 100}%`,
        {
          media: mediaQueries.lg,
        },
      );
      expect(container.firstChild).toHaveStyleRule(
        'left',
        `${(testProps.pushXl / gridColumns) * 100}%`,
        {
          media: mediaQueries.xl,
        },
      );
      expect(container.firstChild).toHaveStyleRule(
        'left',
        `${(testProps.pushXxl / gridColumns) * 100}%`,
        {
          media: mediaQueries.xxl,
        },
      );
    });
  });

  describe('Column pulls', () => {
    test('should handle a default pull', () => {
      const pull = 2;
      const expectedPercentage = `${(pull / gridColumns) * 100}%`;
      const testProps = {
        ...props,
        pull,
      };
      const { container } = render(<Column {...testProps} />);

      expect(container.firstChild).not.toHaveStyleRule('left', expectedPercentage);
    });

    test('should handle pulls, by breakpoint', () => {
      const testProps = {
        xs: 6,
        pullXs: 1,
        pullSm: 2,
        pullMd: 3,
        pullLg: 4,
        pullXl: 5,
        pullXxl: 6,
      };
      const { container } = render(<Column {...testProps} />);

      expect(container.firstChild).toHaveStyleRule(
        'left',
        `${(testProps.pullXs / gridColumns) * -100}%`,
        {
          media: mediaQueries.xsOnly,
        },
      );
      expect(container.firstChild).toHaveStyleRule(
        'left',
        `${(testProps.pullSm / gridColumns) * -100}%`,
        {
          media: mediaQueries.sm,
        },
      );
      expect(container.firstChild).toHaveStyleRule(
        'left',
        `${(testProps.pullMd / gridColumns) * -100}%`,
        {
          media: mediaQueries.md,
        },
      );
      expect(container.firstChild).toHaveStyleRule(
        'left',
        `${(testProps.pullLg / gridColumns) * -100}%`,
        {
          media: mediaQueries.lg,
        },
      );
      expect(container.firstChild).toHaveStyleRule(
        'left',
        `${(testProps.pullXl / gridColumns) * -100}%`,
        {
          media: mediaQueries.xl,
        },
      );
      expect(container.firstChild).toHaveStyleRule(
        'left',
        `${(testProps.pullXxl / gridColumns) * -100}%`,
        {
          media: mediaQueries.xxl,
        },
      );
    });
  });
});
