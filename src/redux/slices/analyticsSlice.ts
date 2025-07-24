import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AnalyticsData } from '../../types';
import { mockAnalytics } from '../../data/mockData';

interface AnalyticsState {
  data: AnalyticsData[];
  isLoading: boolean;
  error: string | null;
  dateRange: {
    start: string;
    end: string;
  };
}

const initialState: AnalyticsState = {
  data: mockAnalytics,
  isLoading: false,
  error: null,
  dateRange: {
    start: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days ago
    end: new Date().toISOString(),
  },
};

const analyticsSlice = createSlice({
  name: 'analytics',
  initialState,
  reducers: {
    setAnalyticsData: (state, action: PayloadAction<AnalyticsData[]>) => {
      state.data = action.payload;
    },
    setDateRange: (state, action: PayloadAction<{ start: Date; end: Date }>) => {
      state.dateRange = {
        start: action.payload.start.toISOString(),
        end: action.payload.end.toISOString(),
      };
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setAnalyticsData, setDateRange, setLoading, setError } = analyticsSlice.actions;
export default analyticsSlice.reducer;