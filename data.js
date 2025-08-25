// data.js

// This function initializes our product data in localStorage if it's not already there.
function initializeProducts() {
  // To allow for easy updates, we can check a version number.
  // If you change the products below, increment this version number.
  const productDataVersion = '1.1';
  const storedVersion = localStorage.getItem('productDataVersion');

  // If versions don't match or no products exist, update the list.
  if (storedVersion !== productDataVersion || !localStorage.getItem('products')) {
    console.log('Initializing or updating product list in localStorage.');
    
    const defaultProducts = [
      // Perishable Goods
      {
        _id: `prod_${new Date().getTime() + 1}`,
        name: 'Fresh Atlantic Salmon',
        category: 'Perishable',
        subcategory: 'Fish and Seafood',
        originalPrice: 850,
        currentStock: 25,
        manufactureDate: '2025-08-22',
        expiryDate: '2025-08-28' // Expires in 3 days
      },
      {
        _id: `prod_${new Date().getTime() + 2}`,
        name: 'Amul Gold Milk',
        category: 'Perishable',
        subcategory: 'Dairy Products',
        originalPrice: 66,
        currentStock: 80,
        manufactureDate: '2025-08-24',
        expiryDate: '2025-08-27' // Expires in 2 days
      },
      {
        _id: `prod_${new Date().getTime() + 3}`,
        name: 'Organic Paneer',
        category: 'Perishable',
        subcategory: 'Dairy Products',
        originalPrice: 120,
        currentStock: 40,
        manufactureDate: '2025-08-20',
        expiryDate: '2025-09-02' // Expires in 8 days
      },
      {
        _id: `prod_${new Date().getTime() + 4}`,
        name: 'Farm Fresh Eggs (12 pack)',
        category: 'Perishable',
        subcategory: 'Eggs',
        originalPrice: 90,
        currentStock: 150,
        manufactureDate: '2025-08-15',
        expiryDate: '2025-09-10' // Expires in 16 days
      },
      {
        _id: `prod_${new Date().getTime() + 5}`,
        name: 'Shimla Apples (1kg)',
        category: 'Perishable',
        subcategory: 'Fresh Fruits and Vegetables',
        originalPrice: 180,
        currentStock: 60,
        manufactureDate: '2025-08-23',
        expiryDate: '2025-09-05' // Expires in 11 days
      },
      {
        _id: `prod_${new Date().getTime() + 6}`,
        name: 'Whole Wheat Bread',
        category: 'Perishable',
        subcategory: 'Cooked Foods',
        originalPrice: 45,
        currentStock: 55,
        manufactureDate: '2025-08-25',
        expiryDate: '2025-08-29' // Expires in 4 days
      },

      // Non-Perishable Goods
      {
        _id: `prod_${new Date().getTime() + 7}`,
        name: 'Tata Salt (1kg)',
        category: 'Non-Perishable',
        subcategory: 'Dry Goods',
        originalPrice: 28,
        currentStock: 200,
        manufactureDate: '2025-01-10',
        expiryDate: '2027-01-09'
      },
      {
        _id: `prod_${new Date().getTime() + 8}`,
        name: 'Daawat Basmati Rice (5kg)',
        category: 'Non-Perishable',
        subcategory: 'Dry Goods',
        originalPrice: 750,
        currentStock: 90,
        manufactureDate: '2025-04-01',
        expiryDate: '2027-03-31'
      },
      {
        _id: `prod_${new Date().getTime() + 9}`,
        name: 'Kissan Tomato Ketchup',
        category: 'Non-Perishable',
        subcategory: 'Condiments and Sauces',
        originalPrice: 135,
        currentStock: 120,
        manufactureDate: '2025-06-15',
        expiryDate: '2026-06-14'
      },
      {
        _id: `prod_${new Date().getTime() + 10}`,
        name: "Lay's Classic Chips",
        category: 'Non-Perishable',
        subcategory: 'Packaged Snacks',
        originalPrice: 20,
        currentStock: 300,
        manufactureDate: '2025-07-20',
        expiryDate: '2026-01-16'
      },
      {
        _id: `prod_${new Date().getTime() + 11}`,
        name: 'Fortune Sunlite Oil (1L)',
        category: 'Non-Perishable',
        subcategory: 'Oils and Fats',
        originalPrice: 140,
        currentStock: 110,
        manufactureDate: '2025-05-30',
        expiryDate: '2026-05-29'
      },
      {
        _id: `prod_${new Date().getTime() + 12}`,
        name: 'Happilo Almonds (200g)',
        category: 'Non-Perishable',
        subcategory: 'Nuts and Nut Butters',
        originalPrice: 250,
        currentStock: 75,
        manufactureDate: '2025-08-01',
        expiryDate: '2026-07-31'
      }
    ];

    localStorage.setItem('products', JSON.stringify(defaultProducts));
    localStorage.setItem('productDataVersion', productDataVersion);
  }
}

// Run the initialization function when this script loads.
initializeProducts();