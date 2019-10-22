import contentService from 'services/ContentService';

const ABOUT_SECTIONS_LOAD = 'ABOUT_SECTIONS_LOAD';
const ABOUT_SECTIONS_REQUEST = 'ABOUT_SECTIONS_REQUEST';
const ABOUT_SECTIONS_RECEIVE = 'ABOUT_SECTIONS_RECEIVE';
const ABOUT_SECTIONS_REQUEST_FAILED = 'ABOUT_SECTIONS_REQUEST_FAILED';

const aboutSectionsLoad = () => ({
  type: ABOUT_SECTIONS_LOAD,
});

const aboutSectionsReceive = aboutSections => ({
  type: ABOUT_SECTIONS_RECEIVE,
  aboutSections,
});

const aboutSectionsRequestFailed = error => ({
  type: ABOUT_SECTIONS_REQUEST_FAILED,
  error,
});

const aboutSectionsRequest = () => (dispatch, store, service = contentService) => {
  dispatch(aboutSectionsLoad());

  return service
    .getAboutSections()
    .then(sections => dispatch(aboutSectionsReceive(sections)))
    .catch(error => dispatch(aboutSectionsRequestFailed(error)));
};

export {
  ABOUT_SECTIONS_LOAD,
  ABOUT_SECTIONS_REQUEST,
  ABOUT_SECTIONS_RECEIVE,
  ABOUT_SECTIONS_REQUEST_FAILED,
  aboutSectionsLoad,
  aboutSectionsReceive,
  aboutSectionsRequestFailed,
  aboutSectionsRequest,
};
