import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

async function fetchWithTimeout(resource, options = {}) {
  const { timeout = 5000 } = options;

  const abortController = new AbortController();
  const id = setTimeout(() => abortController.abort(), timeout);
  const response = await fetch(resource, {
    ...options,
    signal: abortController.signal,
  });
  clearTimeout(id);
  return response;
}

const datas = [
  {
    id: 1,
    status: "completed",
    category: "transfers",
    name: "Amarachi Ibe",
    amount: "$20,000",
    type: "credit",
    date: "08 Nov 2021",
  },
  {
    id: 2,
    status: "completed",
    category: "transfers",
    name: "Brad",
    amount: "$20,000",
    type: "credit",
    date: "08 Nov 2021",
  },
  {
    id: 3,
    status: "completed",
    category: "data",
    name: "Dav",
    amount: "$20,000",
    type: "debit",
    date: "07 Jun 2021",
  },
  {
    id: 4,
    status: "completed",
    category: "transfers",
    name: "Buhari",
    amount: "$20,000",
    type: "credit",
    date: "08 Nov 2021",
  },
  {
    id: 5,
    status: "completed",
    category: "withdrawals",
    name: "Godwin",
    amount: "$20,000",
    type: "debit",
    date: "08 Nov 2021",
  },
  {
    id: 6,
    status: "completed",
    category: "transfers",
    name: "Aboy",
    amount: "$20,000",
    type: "credit",
    date: "07 Jun 2021",
  },
  {
    id: 7,
    status: "completed",
    category: "airtime",
    name: "Obi",
    amount: "$20,000",
    type: "debit",
    date: "08 Nov 2021",
  },
  {
    id: 8,
    status: "completed",
    category: "transfers",
    name: "Frank",
    amount: "$20,000",
    type: "credit",
    date: "10 Nov 2021",
  },
  {
    id: 9,
    status: "completed",
    category: "data",
    name: "King",
    amount: "$20,000",
    type: "debit",
    date: "08 Nov 2021",
  },
  {
    id: 10,
    status: "completed",
    category: "withdrawals",
    name: "Ama",
    amount: "$20,000",
    type: "debit",
    date: "10 Nov 2021",
  },
  {
    id: 11,
    status: "completed",
    category: "airtime",
    name: "Kelechi",
    amount: "$20,000",
    type: "debit",
    date: "08 April 2021",
  },
  {
    id: 12,
    status: "completed",
    category: "deposits",
    name: "Yufu",
    amount: "$20,000",
    type: "credit",
    date: "08 Nov 2021",
  },
  {
    id: 13,
    status: "completed",
    category: "data",
    name: "Oke",
    amount: "$20,000",
    type: "debit",
    date: "08 April 2021",
  },
];

const initialState = {
  transactions: datas,
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
};

const transactionsReducer = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    clearState: (state) => {
      console.log("cleared state");
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;

      return state;
    },
  },
});

export const { clearState } = transactionsReducer.actions;
export const transactionsSelector = (state) => state.transactions;
export const selectLoader = (state) => state.transactions.isFetching;
export default transactionsReducer.reducer;
