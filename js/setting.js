/*
* Icons for COFOG taxonomy
*
*/
var Taxes = Taxes || {};

Taxes.baseKoujo = 330000; // 住民税基礎控除
Taxes.huyoKoujo = 330000; // 一人分の扶養控除
Taxes.taxRate = 0.06; // 住民税率

var OpenSpending = OpenSpending || {};

OpenSpending.identifier = 'jptokyochofubudget';
OpenSpending.year = '2013';

OpenSpending.Styles = OpenSpending.Styles || {};

OpenSpending.Styles.Cofog = {

  /* chofu cofog */
  '1': { icon: 'icons/legislative.svg', color: '#0099FF', bcolor: '#935B3B' }, // 議会費
  '2': { icon: 'icons/publicaffairs.svg', color: '#0099FF', bcolor: '#0AB971' }, // 総務費
  '201': { icon: 'icons/publicaffairs.svg', color: '#0099FF', bcolor: '#0AB971' }, // 総務費 総務費
  '3': { icon: 'icons/family.svg', color: '#0099FF', bcolor: '#4E6D00' }, // 民生費
  '301': { icon: 'icons/family.svg', color: '#0099FF', bcolor: '#4E6D00' }, // 民生費 民生費
  '4': { icon: 'icons/health.svg', color: '#0099FF', bcolor: '#D33673' }, // 衛生費
  '401': { icon: 'icons/health.svg', color: '#0099FF', bcolor: '#D33673' }, // 衛生費 衛生費
  '5': { icon: 'icons/environment.svg', color: '#0099FF', bcolor: '#2A3A03' }, // 労働費
  '501': { icon: 'icons/environment.svg', color: '#0099FF', bcolor: '#2A3A03' }, //　労働費 労働費
  '6': { icon: 'icons/civilian-action.svg', color: '#0099FF', bcolor: '#EC2406' }, // 農業費
  '601': { icon: 'icons/civilian-action.svg', color: '#0099FF', bcolor: '#EC2406' }, // 農業費 農業費
  '7': { icon: 'icons/traffic-watersup.svg', color: '#0099FF', bcolor: '#938626' }, // 商工費
  '701': { icon: 'icons/traffic-watersup.svg', color: '#0099FF', bcolor: '#938626' }, // 商工費 商工費
  '8': { icon: 'icons/coal.svg', color: '#0099FF', bcolor: '#0099FF' }, // 土木費
  '801': { icon: 'icons/coal.svg', color: '#0099FF', bcolor: '#0099FF' }, // 土木費 土木費
  '9': { icon: 'icons/order-safety.svg', color: '#0099FF', bcolor: '#D33673' }, // 消防費
  '901': { icon: 'icons/order-safety.svg', color: '#0099FF', bcolor: '#D33673' }, // 消防費 消防費
  '10': { icon: 'icons/schools.svg', color: '#0099FF', bcolor: '#790586' }, // 教育費
  '1001': { icon: 'icons/schools.svg', color: '#0099FF', bcolor: '#790586' }, // 教育費 教育費
  '11': { icon: 'icons/economic-aid.svg', color: '#0099FF', bcolor: '#D36B3B' }, // 公債費
  '1101': { icon: 'icons/economic-aid.svg', color: '#0099FF', bcolor: '#D36B3B' }, // 公債費 公債費
  '12': { icon: 'icons/money.svg', color: '#0099FF', bcolor: '#935B3B' }, // 諸支出金
  '1201': { icon: 'icons/money.svg', color: '#0099FF', bcolor: '#935B3B' }, // 諸支出金 諸支出金
  '13': { icon: 'icons/financial-admin.svg', color: '#0099FF', bcolor: '#C35B4B' }, // 予備費
  '1301': { icon: 'icons/financial-admin.svg', color: '#0099FF', bcolor: '#C35B4B' } // 予備費 予備費
  };
  
  