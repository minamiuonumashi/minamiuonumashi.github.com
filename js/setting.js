/*
 * Icons for COFOG taxonomy
 *
 */
var Taxes = Taxes || {};

Taxes.baseKoujo = 330000; // 住民税基礎控除
Taxes.huyoKoujo = 330000; // 一人分の扶養控除
Taxes.taxRate = 0.06; // 住民税率

var OpenSpending = OpenSpending || {};

OpenSpending.identifier = 'jptokyokoganeibudget';
OpenSpending.year = '2013';

OpenSpending.Styles = OpenSpending.Styles || {};

OpenSpending.Styles.Cofog = {
  /* koganei cofog */
  '1': { icon: 'icons/legislative.svg', color: '#C75746', bcolor: '#935B3B' }, // 議会費
  '101': { icon: 'icons/legislative.svg', color: '#C75746', bcolor: '#935B3B' }, // 議会費 議会費
};