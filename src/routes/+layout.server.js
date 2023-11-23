// make function to get data from google sheet csv

import { parse } from 'csv-parse/sync';

export async function load() {
  const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQaps8L0rZHwAD9nvIim43OOJoTd6I3m9cUxC07EZmATk1wnPaKQju0O_lqashYy2Do2bqM5hyFVhUF/pub?gid=0&single=true&output=csv";

  try {
    const response = await fetch(csvUrl);
    if (!response.ok) {
      throw new Error(`Error fetching CSV: ${response.statusText}`);
    }

    const csvText = await response.text();

    // Parse the CSV text
    const menuData = parse(csvText, {
      columns: true,
      skip_empty_lines: true
    });
    //console.log(menuData);

    return {
      menuData
    };
  } catch (error) {
    console.error('Error loading CSV data:', error);
    return {
      status: 500,
      error: 'Failed to load data'
    };
  }
}