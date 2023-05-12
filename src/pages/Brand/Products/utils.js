import React from 'react';
import ProductUrl from '../images/pc-slider-temp.jfif';
import profileAvtar from '../images/profile-avatar.jpg';
import profileLogo from '../images/profile-logo.jpg';
import sqareIcon from '../images/single-square.jpg';
import danger from '../images/icons/icon-danger.svg';

export const Datas = [
  {
    id: '2885',
    productUrl: ProductUrl,
    productImages: [ProductUrl, profileAvtar, profileLogo],
    productName: 'Summer Chips for Kids',
    status: 'active',
    category: ['Baby & Kids', 'Bath & Safety'],
    tags: ['Chipss', 'Chips Active', 'Chip', 'Chipps', 'Chiips'],
    stock: '9,999',
    sales: '$0',
    retailers: '',
    description:
      'Simple summertime activities for kids. No guesswork, no planning… just a lot of living in the moment',
    details:
      'Running out of ideas to tame your little ones? Have a little box of summer activity ideas for kids. Guaranteed to keep them busy.',
    brandImage: sqareIcon,
    brand: 'Alpha One',
    wsp: '$5.00-$7.50',
    msrp: '$15.00',
    shipsFrom: 'Wilsonville, Oregon',
    activities: '60 ideas',
    content: ' 30 natural, wood coins, each measuring 1 ½ inches round',
    dimention: '4.8" l x 2" w x 1.8"h',
    weight: '0.32 lb',
    variants: [
      {
        id: 1,
        productUrl: ProductUrl,
        material: 'Wood',
        color: 'blue',
        sku: 'V1N-071A-0122-01',
        barcode: '813687021196',
        stock: '500',
        wsp: '$10.95',
        shipping: '$5.00',
        msrp: '$15.95',
      },
      {
        id: 2,
        productUrl: ProductUrl,
        material: 'Wood',
        color: 'blue',
        sku: 'V1N-071A-0122-01',
        barcode: '813687021196',
        stock: '500',
        wsp: '$10.95',
        shipping: '$5.00',
        msrp: '$15.95',
      },
      {
        id: 3,
        productUrl: ProductUrl,
        material: 'Wood',
        color: 'blue',
        sku: 'V1N-071A-0122-01',
        barcode: '813687021196',
        stock: '500',
        wsp: '$10.95',
        shipping: '$5.00',
        msrp: '$15.95',
      },
    ],
  },
  {
    id: '2',
    productUrl: ProductUrl,
    productImages: [profileLogo, ProductUrl, profileAvtar],
    productName: 'Summer Chips for Kids',
    status: 'inactive',
    category: ['Baby & Kids'],
    tags: [],
    stock: '9',
    sales: '$4,000.000',
    retailers: '2 assigned',
    description:
      'Simple summertime activities for kids. No guesswork, no planning… just a lot of living in the moment',
    details:
      'Running out of ideas to tame your little ones? Have a little box of summer activity ideas for kids. Guaranteed to keep them busy.',
    brandImage: sqareIcon,
    brand: 'Alpha Two',
    wsp: '$5.00-$7.50',
    msrp: '$50.00',
    shipsFrom: 'Wilsonville, Oregon',
    activities: '60 ideas',
    content: ' 30 natural, wood coins, each measuring 1 ½ inches round',
    dimention: '4.8" l x 2" w x 1.8"h',
    weight: '0.25 lb',
    variants: [
      {
        id: 1,
        productUrl: ProductUrl,
        material: 'Wood',
        color: 'blue',
        sku: 'V1N-071A-0122-01',
        barcode: '813687021196',
        stock: '500',
        wsp: '$10.95',
        shipping: '$5.00',
        msrp: '$15.95',
      },
      {
        id: 2,
        productUrl: ProductUrl,
        material: 'Wood',
        color: 'blue',
        sku: 'V1N-071A-0122-01',
        barcode: '813687021196',
        stock: '500',
        wsp: '$10.95',
        shipping: '$5.00',
        msrp: '$15.95',
      },
      {
        id: 3,
        productUrl: ProductUrl,
        material: 'Wood',
        color: 'blue',
        sku: 'V1N-071A-0122-01',
        barcode: '813687021196',
        stock: (
          <div>
            {' '}
            9
            <img className="mx-2" src={danger} />
          </div>
        ),
        wsp: '$10.95',
        shipping: '$5.00',
        msrp: '$15.95',
      },
      {
        id: 4,
        productUrl: ProductUrl,
        material: 'Wood',
        color: 'blue',
        sku: 'V1N-071A-0122-01',
        barcode: '813687021196',
        stock: '500',
        wsp: '$10.95',
        shipping: '$5.00',
        msrp: '$15.95',
      },
      {
        id: 5,
        productUrl: ProductUrl,
        material: 'Wood',
        color: 'blue',
        sku: 'V1N-071A-0122-01',
        barcode: '813687021196',
        stock: (
          <div>
            {' '}
            0
            <img className="danger-red mx-2" src={danger} />
          </div>
        ),
        wsp: '$10.95',
        shipping: '$5.00',
        msrp: '$15.95',
      },
      {
        id: 6,
        productUrl: ProductUrl,
        material: 'Wood',
        color: 'blue',
        sku: 'V1N-071A-0122-01',
        barcode: '813687021196',
        stock: '500',
        wsp: '$10.95',
        shipping: '$5.00',
        msrp: '$15.95',
      },
      {
        id: 7,
        productUrl: ProductUrl,
        material: 'Wood',
        color: 'blue',
        sku: 'V1N-071A-0122-01',
        barcode: '813687021196',
        stock: '500',
        wsp: '$10.95',
        shipping: '$5.00',
        msrp: '$15.95',
      },
    ],
  },
  {
    id: '3',
    productUrl: ProductUrl,
    productImages: [profileLogo, profileAvtar, ProductUrl],
    productName: 'Summer Chips for Kids',
    status: 'inactive',
    category: ['Baby & Kids'],
    tags: ['Chips', 'Chips'],
    stock: '999',
    sales: '$4,000.000',
    retailers: '2 assigned',
    description:
      'Simple summertime activities for kids. No guesswork, no planning… just a lot of living in the moment',
    details:
      'Running out of ideas to tame your little ones? Have a little box of summer activity ideas for kids. Guaranteed to keep them busy.',
    brandImage: profileAvtar,
    brand: 'Alpha three',
    wsp: '$5.00-$7.50',
    msrp: '$10.00',
    shipsFrom: 'Wilsonville, Oregon',
    activities: '60 ideas',
    content: ' 30 natural, wood coins, each measuring 1 ½ inches round',
    dimention: '4.8" l x 2" w x 1.8"h',
    weight: '0.50 lb',
    variants: [
      {
        id: 1,
        productUrl: ProductUrl,
        material: 'Wood',
        color: 'blue',
        sku: 'V1N-071A-0122-01',
        barcode: '813687021196',
        stock: '500',
        wsp: '$10.95',
        shipping: '$5.00',
        msrp: '$15.95',
      },
      {
        id: 2,
        productUrl: ProductUrl,
        material: 'Wood',
        color: 'blue',
        sku: 'V1N-071A-0122-01',
        barcode: '813687021196',
        stock: '500',
        wsp: '$10.95',
        shipping: '$5.00',
        msrp: '$15.95',
      },
      {
        id: 3,
        productUrl: ProductUrl,
        material: 'Wood',
        color: 'blue',
        sku: 'V1N-071A-0122-01',
        barcode: '813687021196',
        stock: '500',
        wsp: '$10.95',
        shipping: '$5.00',
        msrp: '$15.95',
      },
      {
        id: 4,
        productUrl: ProductUrl,
        material: 'Wood',
        color: 'blue',
        sku: 'V1N-071A-0122-01',
        barcode: '813687021196',
        stock: '500',
        wsp: '$10.95',
        shipping: '$5.00',
        msrp: '$15.95',
      },
      {
        id: 5,
        productUrl: ProductUrl,
        material: 'dor',
        color: 'blue',
        sku: 'V1N-071A-0122-01',
        barcode: '813687021196',
        stock: '500',
        wsp: '$10.95',
        shipping: '$5.00',
        msrp: '$15.95',
      },
      {
        id: 6,
        productUrl: ProductUrl,
        material: 'Wood',
        color: 'blue',
        sku: 'V1N-071A-0122-01',
        barcode: '813687021196',
        stock: '500',
        wsp: '$10.95',
        shipping: '$5.00',
        msrp: '$15.95',
      },
    ],
  },
];

export const RetailerData = [
  {
    name: 'viral',
    productStore: '9,999,999',
    productSales: '$ 9,999,999',
    category: 'Baby & Kids',
    assigned: true,
  },
  {
    name: 'sahil',
    productStore: '9,999,999',
    productSales: '$ 9,999,999',
    category: 'Baby & Kids',
    assigned: true,
  },
  {
    name: 'AlphaBox3',
    productStore: '9,999,999',
    productSales: '$ 9,999,999',
    category: 'Baby & Kids',
  },
  {
    name: 'AlphaBox4',
    productStore: '9,999,999',
    productSales: '$ 9,999,999',
    category: 'Baby & Kids',
  },
  {
    name: 'AlphaBox5',
    productStore: '9,999,999',
    productSales: '$ 9,999,999',
    category: 'Baby & Kids',
  },
  {
    name: 'AlphaBox6',
    productStore: '9,999,999',
    productSales: '$ 9,999,999',
    category: 'Baby & Kids',
  },
  {
    name: 'AlphaBox7',
    productStore: '9,999,999',
    productSales: '$ 9,999,999',
    category: 'Baby & Kids',
  },
  {
    name: 'AlphaBox8',
    productStore: '9,999,999',
    productSales: '$ 9,999,999',
    category: 'Baby & Kids',
  },
  {
    name: 'AlphaBox9',
    productStore: '9,999,999',
    productSales: '$ 9,999,999',
    category: 'Baby & Kids',
  },
  {
    name: 'AlphaBox10',
    productStore: '9,999,999',
    productSales: '$ 9,999,999',
    category: 'Baby & Kids',
  },
  {
    name: 'AlphaBox11',
    productStore: '9,999,999',
    productSales: '$ 9,999,999',
    category: 'Baby & Kids',
  },
  {
    name: 'AlphaBox12',
    productStore: '9,999,999',
    productSales: '$ 9,999,999',
    category: 'Baby & Kids',
  },
  {
    name: 'AlphaBox13',
    productStore: '9,999,999',
    productSales: '$ 9,999,999',
    category: 'Baby & Kids',
  },
  {
    name: 'AlphaBox14',
    productStore: '9,999,999',
    productSales: '$ 9,999,999',
    category: 'Baby & Kids',
  },
];

export const mainCategory = [
  {
    id: 1,
    value: 'Baby & Kids',
    status: 'inactive',
  },
  {
    id: 2,
    value: 'Men',
    status: 'inactive',
  },
  {
    id: 3,
    value: 'Women',
    status: 'inactive',
  },
];

export const subCategory = [
  {
    id: 1,
    main_category_id: 1,
    selected: false,
    value: [
      {
        id: 1,
        value: 'Baby & Kids1',
        status: 'inactive',
      },
      {
        id: 2,
        value: 'Baby & Kids2',
        status: 'inactive',
      },
    ],
  },
  {
    id: 2,
    main_category_id: 2,
    selected: false,
    value: [
      {
        id: 1,
        value: 'Men1',
        status: 'inactive',
      },
      {
        id: 2,
        value: 'Men2',
        status: 'inactive',
      },
    ],
  },
  {
    id: 3,
    main_category_id: 3,
    selected: false,
    value: [
      {
        id: 1,
        value: 'Women1',
        status: 'inactive',
      },
      {
        id: 2,
        value: 'Women2',
        status: 'inactive',
      },
    ],
  },
];

export const group = [
  {
    id: 1,
    sub_category_id: 1,
    value: [
      { id: 1, value: 'Baby & Kids11', status: false },
      { id: 2, value: 'Baby & Kids12', status: false },
    ],
  },
  {
    id: 2,
    sub_category_id: 2,
    value: [
      { id: 1, value: 'Men11', status: false },
      { id: 2, value: 'Men12', status: false },
    ],
  },
  {
    id: 3,
    sub_category_id: 3,
    value: [
      { id: 1, value: 'Women11', status: false },
      { id: 2, value: 'Women12', status: false },
    ],
  },
];

export const categoryDatas = [
  {
    id: 1,
    value: 'Baby & Kids',
    status: 'inactive',
    sub_category: [
      {
        id: 1,
        value: 'Baby Girl',
        status: 'inactive',
        group: [
          { id: 1, value: 'Short Shirt', status: 'inactive' },
          { id: 2, value: 'Rings', status: 'inactive' },
        ],
      },
      {
        id: 2,
        value: 'Baby Boy',
        status: 'inactive',
        group: [
          { id: 1, value: 'Small googles', status: 'inactive' },
          { id: 2, value: 'Light Shoes', status: 'inactive' },
        ],
      },
    ],
  },
  {
    id: 2,
    value: 'Men',
    status: 'inactive',
    sub_category: [
      {
        id: 1,
        value: 'Cloths',
        status: 'inactive',
        group: [
          { id: 1, value: 'Pents', status: 'inactive' },
          { id: 2, value: 'Shorts', status: 'inactive' },
        ],
      },
      {
        id: 2,
        value: 'Assesorie',
        status: 'inactive',
        group: [
          { id: 1, value: 'Belts', status: 'inactive' },
          { id: 2, value: 'Shoes', status: 'inactive' },
        ],
      },
    ],
  },
  {
    id: 3,
    value: 'Women',
    status: 'inactive',
    sub_category: [
      {
        id: 1,
        value: 'Dresses',
        status: 'inactive',
        group: [
          { id: 1, value: 'Kurta', status: 'inactive' },
          { id: 2, value: 'Lhengs', status: 'inactive' },
        ],
      },
      {
        id: 2,
        value: 'Cosmetic',
        status: 'inactive',
        group: [
          { id: 1, value: 'Shampoo', status: 'inactive' },
          { id: 2, value: 'Nel-Pollise', status: 'inactive' },
        ],
      },
    ],
  },
];
