import { defineStore } from 'pinia';
import { reactive, computed } from 'vue';
import axios from 'axios';
import moment from 'moment';

// export const useUserInfoStore = defineStore('userInfo', () => {
//   const BASEURL = '/api/user';
// });

export const useHistoryStore = defineStore('history', () => {
  const BASEURL = '/api/history';
  const state = reactive({
    historyList: [],
  });

  const fetchHistory = async () => {
    try {
      const response = await axios.get(BASEURL);
      state.historyList = await response.data;
      // console.log(response.data);
    } catch (err) {
      // console.log(err);
    }
  };

  const totalIncomeByMonth = (month) => {
    const targetMonth = String(month).padStart(2, '0');
    const incomeList = state.historyList.filter(
      (history) =>
        moment(history.date).format('MM') === targetMonth &&
        history.type === 'income'
    );

    return incomeList.reduce((sum, history) => sum + Number(history.amount), 0);
  };

  const totalOutcomeByMonth = (month) => {
    const targetMonth = String(month).padStart(2, '0');
    const incomeList = state.historyList.filter(
      (history) =>
        moment(history.date).format('MM') === targetMonth &&
        history.type === 'outcome'
    );

    return incomeList.reduce((sum, history) => sum + Number(history.amount), 0);
  };

  const recentHistoryByMonth = (month) => {
    const targetMonth = String(month).padStart(2, '0');
    const filteredHistory = state.historyList.filter(
      (history) => moment(history.date).format('MM') === targetMonth
    );

    const sortedHistory = filteredHistory.sort((a, b) =>
      moment(b.date).diff(moment(a.date))
    );

    return sortedHistory.slice(0, 5);
  };

  const addComma = (val) => {
    return val.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  };

  const addSymbolComma = (val, type) => {
    const newVal = val
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
    if (type === '수입') {
      return `+${newVal}`;
    } else {
      return `-${newVal}`;
    }
  };

  const historyList = computed(() => state.historyList);

  return {
    historyList,
    addComma,
    addSymbolComma,
    fetchHistory,
    totalIncomeByMonth,
    totalOutcomeByMonth,
    recentHistoryByMonth,
  };
});
