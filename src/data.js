const allProducts = [
      {
        namePc: 'ASUS Laptop X515 ( i7-1065G7/Silver )',
        id: 1,
        img: "https://nout.uz/wp-content/uploads/2021/11/509x5.jpg",
        screen: '15.6" FullHD IPS',
        processor:
          "Intel® Core™ i7-1065G7 (1.3 GHz - 3.9 GHz) (4 Ядра - 8 Потоков)",
        videcard: "Intel UHD Graphics",
        azu: "8GB DDR4 (12GB =+25 у.е)",
        price: "5 725 000 сум",
        category: "base",
      },
      {
        namePc:"HP Laptop 15 (i5-1235U/10Core)" ,
        id: 2,
        img: "https://nout.uz/wp-content/uploads/2022/06/15-hp-laptop1.jpg",
        screen: ' 15.6" FullHD IPS',
        processor:
          " Intel® Core™ i5-1235U (1.3 GHz - 4.4 GHz) (10-Ядeр; 12-Потоков)",
        videcard: " Intel Iris Xe Graphics",
        azu: " 8GB DDR4 (16GB=+40 у.е)",
        price: "6 870 000 сум",
        category: "base",
      },
      {
        namePc:"Asus VivoBook K513 (i3-1115G4)",
        id: 3,
        img: "https://nout.uz/wp-content/uploads/2021/11/k513e-vivobook-1-1.jpg",
        screen: 'Экран: 15.6" FullHD IPS',
        processor:
          "Процессор: Intel® Core® i3-1115G4 (1.7 GHz – 4.1 GHz ) (2-Ядра; 4-Потокa)",
        videcard: "Видеокарта: Intel UHD Graphics",
        azu: "8GB DDR4 (12GB =+25 у.е)",
        price: "5 152 500 сум",
        category: "base",
      },
      {
        namePc:"Asus VivoBook K513 (i3-1125G4/OLED/Silver)",
        id: 4,
        img: "https://nout.uz/wp-content/uploads/2022/03/k513-vivobook-silver3-300x300.jpg",
        screen: '15.6" FullHD OLED/PANTONE Validated',
        processor:
          "Intel® Core i3-1125G4 (2,0 GHz – 3,7 GHz) (4-Ядра; 8-Потоков)",
        videcard: "Intel UHD Graphics",
        azu: "8GB DDR4 (16GB=+40 у.е)",
        price: "5 954 000",
        category: "base",
      },
      {
        namePc:"Lenovo IdeaPad L3 (Pentium Gold 7505)",
        id: 5,
        img: "https://nout.uz/wp-content/uploads/2021/12/1lenovo-ideapad-3-300x300.jpg",
        screen: ' 15.6" FullHD IPS',
        processor:
          "Intel® Core i3-1125G4 (2,0 GHz – 3,7 GHz) (4-Ядра; 8-Потоков)",
        videcard: "Intel UHD Graphics",
        azu: "8GB DDR4 (16GB=+40 у.е)",
        price: "4 809 000",
        category: "base",
      },
      {
        namePc:"Asus VivoBook 17(X1702/i5-1240P)",
        id: 6,
        img: "https://nout.uz/wp-content/uploads/2022/07/vivobook-17x-300x300.jpg",
        screen: ' 15.6" FullHD IPS',
        processor:
          "Intel® Core i3-1125G4 (2,0 GHz – 3,7 GHz) (4-Ядра; 8-Потоков)",
        videcard: "Intel UHD Graphics",
        azu: "8GB DDR4 (16GB=+40 у.е)",
        price: " 7 442 500",
        category: "base",
      },
      {
        namePc: 'ASUS Laptop X515 ( i7-1065G7/Silver )',
        id: 7,
        img: "https://nout.uz/wp-content/uploads/2021/11/509x5.jpg",
        screen: '15.6" FullHD IPS',
        processor:
          "Intel® Core™ i7-1065G7 (1.3 GHz - 3.9 GHz) (4 Ядра - 8 Потоков)",
        videcard: "Intel UHD Graphics",
        azu: "8GB DDR4 (12GB =+25 у.е)",
        price: "5 725 000 сум",
        category: "base",
      },
      {
        namePc:"HP Laptop 15 (i5-1235U/10Core)" ,
        id: 8,
        img: "https://nout.uz/wp-content/uploads/2022/06/15-hp-laptop1.jpg",
        screen: ' 15.6" FullHD IPS',
        processor:
          " Intel® Core™ i5-1235U (1.3 GHz - 4.4 GHz) (10-Ядeр; 12-Потоков)",
        videcard: " Intel Iris Xe Graphics",
        azu: " 8GB DDR4 (16GB=+40 у.е)",
        price: "6 870 000 сум",
        category: "business",
      },
      {
        namePc:"Asus VivoBook K513 (i3-1115G4)",
        id: 9,
        img: "https://nout.uz/wp-content/uploads/2021/11/k513e-vivobook-1-1.jpg",
        screen: 'Экран: 15.6" FullHD IPS',
        processor:
          "Процессор: Intel® Core® i3-1115G4 (1.7 GHz – 4.1 GHz ) (2-Ядра; 4-Потокa)",
        videcard: "Видеокарта: Intel UHD Graphics",
        azu: "8GB DDR4 (12GB =+25 у.е)",
        price: "5 152 500 сум",
        category: "business",
      },
      {
        namePc:"Asus VivoBook K513 (i3-1125G4/OLED/Silver)",
        id: 10,
        img: "https://nout.uz/wp-content/uploads/2022/03/k513-vivobook-silver3-300x300.jpg",
        screen: '15.6" FullHD OLED/PANTONE Validated',
        processor:
          "Intel® Core i3-1125G4 (2,0 GHz – 3,7 GHz) (4-Ядра; 8-Потоков)",
        videcard: "Intel UHD Graphics",
        azu: "8GB DDR4 (16GB=+40 у.е)",
        price: "5 954 000",
        category: "business",
      },
      {
        namePc:"Lenovo IdeaPad L3 (Pentium Gold 7505)",
        id: 11,
        img: "https://nout.uz/wp-content/uploads/2021/12/1lenovo-ideapad-3-300x300.jpg",
        screen: ' 15.6" FullHD IPS',
        processor:
          "Intel® Core i3-1125G4 (2,0 GHz – 3,7 GHz) (4-Ядра; 8-Потоков)",
        videcard: "Intel UHD Graphics",
        azu: "8GB DDR4 (16GB=+40 у.е)",
        price: "4 809 000",
        category: "business",
      },
      {
        namePc:"Asus VivoBook 17(X1702/i5-1240P)",
        id: 12,
        img: "https://nout.uz/wp-content/uploads/2022/07/vivobook-17x-300x300.jpg",
        screen: ' 15.6" FullHD IPS',
        processor:
          "Intel® Core i3-1125G4 (2,0 GHz – 3,7 GHz) (4-Ядра; 8-Потоков)",
        videcard: "Intel UHD Graphics",
        azu: "8GB DDR4 (16GB=+40 у.е)",
        price: " 7 442 500",
        category: "business",
      },
    ];
  
  
export default allProducts
  

  
  
