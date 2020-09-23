import { createAsyncThunk, createSlice, SerializedError } from '@reduxjs/toolkit';

import contentService, { ContentService } from 'services/ContentService';
import { AboutSectionFormatted } from 'types/common';

export interface AboutState {
  aboutSections: AboutSectionFormatted[];
  isFetching: boolean;
  hasFetched: boolean;
  fetchCount: number;
  error?: SerializedError;
  errorCount: number;
}

export const initialState: AboutState = {
  aboutSections: [],
  isFetching: false,
  hasFetched: false,
  fetchCount: 0,
  errorCount: 0,
};

export const getAboutSections = createAsyncThunk(
  'about/getAboutSections',
  async (service: ContentService = contentService) => {
    const sections = await service.getAboutSections();

    return sections;
  },
);

const stateSlice = createSlice({
  name: 'about',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAboutSections.pending, (state) => ({
      ...state,
      isFetching: true,
    }));
    builder.addCase(getAboutSections.rejected, (state, { error }) => ({
      ...state,
      isFetching: false,
      hasFetched: true,
      fetchCount: state.fetchCount + 1,
      error,
      errorCount: state.errorCount + 1,
    }));
    builder.addCase(getAboutSections.fulfilled, (state, { payload }) => ({
      ...state,
      aboutSections: payload,
      fetchCount: state.fetchCount + 1,
      hasFetched: true,
      isFetching: false,
    }));
  },
});

export default stateSlice.reducer;
