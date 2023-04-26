/* eslint-disable react/prop-types */

import React, { forwardRef } from 'react';

export const ExampleCustomInput = forwardRef(
  ({ value, onClick, onChange }, ref) => (
    <input
      value={value}
      className="example-custom-input form-control mb-0"
      onClick={onClick}
      onChange={onChange}
      placeholder="MM-DD-YYYY"
      ref={ref}
    ></input>
  )
);

export const transactionTypes = [
  { value: 'All', label: 'All' },
  { value: 'Order', label: 'Order' },
  { value: 'Payout', label: 'Payout' },
  { value: 'Fees', label: 'Fees' },
  { value: 'Chargeback In', label: 'Chargeback In' },
  { value: 'Chargeback Out', label: 'Chargeback Out' },
  { value: 'Refund In', label: 'Refund In' },
  { value: 'Refund Out', label: 'Refund Out' },
];
export const tableData = [
  {
    id: 1,
    retailerName: 'Retailer 1',
    settlementDate: '30/09/2022',
    transactionType: 'Order',
    referenceID: 'PG12346',
    productCost: 90.0,
    shipping: 10.0,
    fees: 5.9,
    total: 99.0,
    account: 'Citibank-1235',
  },
  {
    id: 2,
    retailerName: 'Retailer 1',
    settlementDate: '30/09/2022',
    transactionType: 'Refund In',
    referenceID: 'PG12346',
    productCost: 90.0,
    shipping: 10.0,
    fees: 5.9,
    total: 99.0,
    account: 'Citibank-1235',
  },
  {
    id: 3,
    retailerName: 'Retailer 1',
    settlementDate: '30/09/2022',
    transactionType: 'Order',
    referenceID: 'PG12346',
    productCost: 90.0,
    shipping: 10.0,
    fees: 5.9,
    total: 99.0,
    account: 'Citibank-1235',
  },
  {
    id: 4,
    retailerName: 'Retailer 1',
    settlementDate: '30/09/2022',
    transactionType: 'Refund In',
    referenceID: 'PG12346',
    productCost: 90.0,
    shipping: 10.0,
    fees: 5.9,
    total: 99.0,
    account: 'Citibank-1235',
  },
  {
    id: 5,
    retailerName: 'Retailer 1',
    settlementDate: '30/09/2022',
    transactionType: 'Order',
    referenceID: 'PG12346',
    productCost: 90.0,
    shipping: 10.0,
    fees: 5.9,
    total: 99.0,
    account: 'Citibank-1235',
  },
  {
    id: 6,
    retailerName: 'Retailer 1',
    settlementDate: '30/09/2022',
    transactionType: 'Refund In',
    referenceID: 'PG12346',
    productCost: 90.0,
    shipping: 10.0,
    fees: 5.9,
    total: 99.0,
    account: 'Citibank-1235',
  },
  {
    id: 7,
    retailerName: 'Retailer 1',
    settlementDate: '30/09/2022',
    transactionType: 'Refund In',
    referenceID: 'PG12346',
    productCost: 90.0,
    shipping: 10.0,
    fees: 5.9,
    total: 99.0,
    account: 'Citibank-1235',
  },
  {
    id: 8,
    retailerName: 'Retailer 1',
    settlementDate: '30/09/2022',
    transactionType: 'Order',
    referenceID: 'PG12346',
    productCost: 90.0,
    shipping: 10.0,
    fees: 5.9,
    total: 99.0,
    account: 'Citibank-1235',
  },
  {
    id: 9,
    retailerName: 'Retailer 1',
    settlementDate: '30/09/2022',
    transactionType: 'Order',
    referenceID: 'PG12346',
    productCost: 90.0,
    shipping: 10.0,
    fees: 5.9,
    total: 99.0,
    account: 'Citibank-1235',
  },
  {
    id: 10,
    retailerName: 'Retailer 1',
    settlementDate: '30/09/2022',
    transactionType: 'Order',
    referenceID: 'PG12346',
    productCost: 90.0,
    shipping: 10.0,
    fees: 5.9,
    total: 99.0,
    account: 'Citibank-1235',
  },
  {
    id: 11,
    retailerName: 'Retailer 1',
    settlementDate: '30/09/2022',
    transactionType: 'Payout',
    referenceID: 'PG12346',
    productCost: 90.0,
    shipping: 10.0,
    fees: 5.9,
    total: 99.0,
    account: 'Citibank-1235',
  },
  {
    id: 12,
    retailerName: 'Retailer 1',
    settlementDate: '30/09/2022',
    transactionType: 'Payout',
    referenceID: 'PG12346',
    productCost: 90.0,
    shipping: 10.0,
    fees: 5.9,
    total: 99.0,
    account: 'Citibank-1235',
  },
  {
    id: 13,
    retailerName: 'Retailer 1',
    settlementDate: '30/09/2022',
    transactionType: 'Payout',
    referenceID: 'PG12346',
    productCost: 90.0,
    shipping: 10.0,
    fees: 5.9,
    total: 99.0,
    account: 'Citibank-1235',
  },
  {
    id: 14,
    retailerName: 'Retailer 1',
    settlementDate: '30/09/2022',
    transactionType: 'Chargeback In',
    referenceID: 'PG12346',
    productCost: 90.0,
    shipping: 10.0,
    fees: 5.9,
    total: 99.0,
    account: 'Citibank-1235',
  },
  {
    id: 15,
    retailerName: 'Retailer 1',
    settlementDate: '17/02/2022',
    transactionType: 'Refund In',
    referenceID: 'PG12346',
    productCost: 90.0,
    shipping: 10.0,
    fees: 5.9,
    total: 99.0,
    account: 'Citibank-1235',
  },
  {
    id: 16,
    retailerName: 'Retailer 1',
    settlementDate: '17/03/2022',
    transactionType: 'Refund In',
    referenceID: 'PG12346',
    productCost: 90.0,
    shipping: 10.0,
    fees: 5.9,
    total: 99.0,
    account: 'Citibank-1235',
  },
  {
    id: 17,
    retailerName: 'Retailer 1',
    settlementDate: '17/04/2022',
    transactionType: 'Chargeback In',
    referenceID: 'PG12346',
    productCost: 90.0,
    shipping: 10.0,
    fees: 5.9,
    total: 99.0,
    account: 'Citibank-1235',
  },
  {
    id: 18,
    retailerName: 'Retailer 1',
    settlementDate: '17/05/2022',
    transactionType: 'Payout',
    referenceID: 'PG12346',
    productCost: 90.0,
    shipping: 10.0,
    fees: 5.9,
    total: 99.0,
    account: 'Citibank-1235',
  },
  {
    id: 19,
    retailerName: 'Retailer 1',
    settlementDate: '17/06/2022',
    transactionType: 'Payout',
    referenceID: 'PG12346',
    productCost: 90.0,
    shipping: 10.0,
    fees: 5.9,
    total: 99.0,
    account: 'Citibank-1235',
  },
  {
    id: 20,
    retailerName: 'Retailer 1',
    settlementDate: '30/09/2022',
    transactionType: 'Payout',
    referenceID: 'PG12346',
    productCost: 90.0,
    shipping: 10.0,
    fees: 5.9,
    total: 99.0,
    account: 'Citibank-1235',
  },
];
export const payoutHistoryReport = [
  {
    id: 1,
    retailerName: 'Retailer 1',
    settlementDate: '23/09/2022',
    transactionType: 'Refund',
    referenceID: 'PG12346',
    productCost: 90.0,
    shipping: 10.0,
    fees: 5.9,
    total: 99.0,
    account: 'Citibank-1235',
  },
  {
    id: 2,
    retailerName: 'Retailer 1',
    settlementDate: '23/09/2022',
    transactionType: 'Refund',
    referenceID: 'PG12346',
    productCost: 90.0,
    shipping: 10.0,
    fees: 5.9,
    total: 99.0,
    account: 'Citibank-1235',
  },
  {
    id: 3,
    retailerName: 'Retailer 1',
    settlementDate: '23/09/2022',
    transactionType: 'Refund',
    referenceID: 'PG12346',
    productCost: 90.0,
    shipping: 10.0,
    fees: 5.9,
    total: 99.0,
    account: 'Citibank-1235',
  },
  {
    id: 3,
    retailerName: 'Retailer 1',
    settlementDate: '23/09/2022',
    transactionType: 'Refund',
    referenceID: 'PG12346',
    productCost: 90.0,
    shipping: 10.0,
    fees: 5.9,
    total: 99.0,
    account: 'Citibank-1235',
  },
];

export const salesOptions = [
  {
    value: '0',
    label: '100% Digital Transaction',
  },
];

export const merchantOptions = [
  {
    value: '5021',
    label: '5021 (Commercial Furniture)',
  },
  {
    value: '5044',
    label: '5044 (OFFC, Photographic, Photocopy, Microfilm EQ)',
  },
  { value: '5045', label: '5045 (Computers, Peripheral Equip, Software)' },
  {
    value: '5046',
    label: '5046 (Commercial Equipment Not Elsewhere Classified)',
  },
  {
    value: '5047',
    label: '5047 (Lab/Med/Dental/Ophthalmic Hosp Eq &amp; Supplies)',
  },
  { value: '5065', label: '5065 (Electrical Parts and Equipment)' },
  { value: '5072', label: '5072 (Hardware Equipment and Supplies)' },
  {
    value: '5094',
    label: '5094 (Precious Stones, Metals, Watches, Jewelry)',
  },
  { value: '5099', label: '5099 (Durable Goods Not Elsewhere Classified)' },
  {
    value: '5111',
    label: '5111 (Stationary, Office Supplies, Printing, WR PPR)',
  },
  {
    value: '5122',
    label: '5122 (Drugs, Drug Properties, Druggist Sundries)',
  },
  {
    value: '5131',
    label: '5131 (Piece Goods, Notions, and Other Dry Goods)',
  },
  {
    value: '5137',
    label: '5137 (Men’s, Women’s, Children’s Uniforms, COMM CLTH)',
  },
  { value: '5139', label: '5139 (Commercial Footwear)' },
  { value: '5192', label: '5192 (Books, Periodicals &amp; Newspapers)' },
  { value: '5193', label: '5193 (Florist Supplies, Nursery STK, Flowers)' },
  {
    value: '5199',
    label: '5199 (Nondurable Goods Not Elsewhere Classified)',
  },
];

export const deliveryTimeOptions = [
  {
    value: 'WEEK',
    label: 'Week',
  },
  { value: 'FORTNIGHT', label: '2 Weeks' },
  { value: 'MONTH', label: 'Month' },
  { value: 'TWO_MONTHS', label: '2 Months' },
  { value: 'OVER_TWO_MONTHS', label: 'Over 2 Months' },
];

export const stateIncorporationOptions = [
  {
    value: 'California',
    label: 'California',
  },
  { value: 'Texas', label: 'Texas' },
];

export const textIdOptions = [
  {
    value: 'ein',
    label: 'Employer Identification Number (EIN)',
  },
  { value: 'ssn', label: 'Social Security Number (SSN)' },
];

export const businessCategoryOptions = [
  { value: 'C_CORP', label: 'C_CORP - Publicly Traded' },
  { value: 'GOVERNMENT_ORGANISATION', label: 'Government Organization' },
  { value: 'NON_PROFIT', label: 'Non Profit' },
  { value: 'TAX_EXEMPT', label: 'Tax Exempt' },
];

export const businessCategoryOptionsNew = [
  { value: 'SINGLE_MEMBER_LLC', label: 'Single Member LLC' },
  { value: 'SOLE_PROPRIETOR', label: 'Sole Proprietor' },
  { value: 'LLC', label: 'LLC' },
  { value: 'LLP', label: 'LLP' },
  { value: 'PARTNERSHIP', label: 'Partnership' },
  { value: 'C_CORP', label: 'C_CORP' },
  { value: 'S_CORP', label: 'S_CORP' },
  { value: 'C_CORP', label: 'C_CORP - Publicly Traded' },
  { value: 'GOVERNMENT_ORGANISATION', label: 'Government Organization' },
  { value: 'NON_PROFIT', label: 'Non Profit' },
  { value: 'TAX_EXEMPT', label: 'Tax Exempt' },
];

export const countryOptions = [
  {
    value: 'US',
    label: 'United States',
  },
];

export const identityOptions = [
  {
    value: 'DRIVER_LICENSE',
    label: 'Driver’s License',
  },
  { value: 'PASSPORT', label: 'Passport' },
  { value: 'ALIEN_REGISTRATION_CARD', label: 'Alien Registration Card' },
];

export const cityOptions = [
  {
    value: 'nyc',
    label: 'New York ',
  },
  { value: 'la', label: 'Los Angeles' },
];

export const categoryStyle = {
  control: (styles) => {
    return {
      ...styles,
      boxShadow: 'none',
      minHeight: '40px',
      '&:hover': {
        boxShadow: 'none',
      },
    };
  },
  container: (style) => {
    return {
      ...style,
      marginTop: '5px',
      marginRight: '1px',
    };
  },
};

export const accountTypeOption = [
  { value: 'CHECKING', label: 'Current' },
  {
    value: 'SAVINGS',
    label: 'Savings',
  },
];

export const accountRoleOption = [
  { value: 'CORPORATE', label: 'Business' },
  {
    value: 'CONSUMER',
    label: 'Personal',
  },
];
