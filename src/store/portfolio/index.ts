import { createAsyncThunk, createSlice, SerializedError } from '@reduxjs/toolkit';

import contentService, { ContentService } from 'services/ContentService';
import { PortfolioItemFormatted } from 'types/common';

export interface PortfolioState {
  portfolioItems: PortfolioItemFormatted[];
  isFetching: boolean;
  hasFetched: boolean;
  fetchCount: number;
  error?: SerializedError;
  errorCount: number;
}

export const initialState: PortfolioState = {
  portfolioItems: [],
  isFetching: false,
  hasFetched: false,
  fetchCount: 0,
  errorCount: 0,
};

export const getPortfolioItems = createAsyncThunk(
  'portfolio/getPortfolioItems',
  async (service: ContentService = contentService) => {
    const items = await service.getPortfolioItems();

    return items;
  },
);

const stateSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPortfolioItems.pending, (state) => ({
      ...state,
      isFetching: true,
    }));
    builder.addCase(getPortfolioItems.rejected, (state, { error }) => ({
      ...state,
      isFetching: false,
      hasFetched: true,
      fetchCount: state.fetchCount + 1,
      error,
      errorCount: state.errorCount + 1,
    }));
    builder.addCase(getPortfolioItems.fulfilled, (state, { payload }) => ({
      ...state,
      portfolioItems: payload,
      isFetching: false,
      hasFetched: true,
      fetchCount: state.fetchCount + 1,
    }));
  },
});

export default stateSlice.reducer;
