import reducer, {
  closeTouchNavigation,
  initialState,
  openTouchNavigation,
  toggleTouchNavigation,
  UIState,
} from '.';

describe('Ducks', () => {
  describe('ui', () => {
    describe('Actions', () => {
      test('should handle closeTouchNavigation actions', () => {
        const state: UIState = {
          ...initialState,
          isTouchNavigationOpen: true,
        };
        const expectedState: UIState = expect.objectContaining({
          isTouchNavigationOpen: false,
        });

        expect(reducer(state, closeTouchNavigation())).toEqual(expectedState);
      });

      test('should handle openTouchNavigation actions', () => {
        const state: UIState = {
          ...initialState,
          isTouchNavigationOpen: false,
        };
        const expectedState: UIState = expect.objectContaining({
          isTouchNavigationOpen: true,
        });

        expect(reducer(state, openTouchNavigation())).toEqual(expectedState);
      });

      test('should handle toggleTouchNavigation actions', () => {
        expect(
          reducer({ ...initialState, isTouchNavigationOpen: false }, toggleTouchNavigation()),
        ).toEqual(expect.objectContaining({ isTouchNavigationOpen: true }));

        expect(
          reducer({ ...initialState, isTouchNavigationOpen: true }, toggleTouchNavigation()),
        ).toEqual(expect.objectContaining({ isTouchNavigationOpen: false }));
      });
    });
  });
});
