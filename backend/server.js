const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const products = [
  {
    id: 1,
    name: 'Tailored Weekend Jacket',
    category: 'Fashion',
    price: 89.99,
    badge: 'New arrival',
    image: 'https://images.unsplash.com/photo-1542060748-10c28b62716f?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 2,
    name: 'Smart Home Speaker',
    category: 'Electronics',
    price: 129,
    badge: 'Top rated',
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 3,
    name: 'Ceramic Cookware Set',
    category: 'Home',
    price: 54.5,
    badge: 'Value pick',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 4,
    name: 'Signature Fragrance',
    category: 'Beauty',
    price: 44.99,
    badge: 'Gift-ready',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 5,
    name: 'Cotton Bedding Bundle',
    category: 'Home',
    price: 74.25,
    badge: 'Limited deal',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 6,
    name: 'Leather Everyday Tote',
    category: 'Accessories',
    price: 68,
    badge: 'Staff pick',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80'
  }
];

const departments = [
  { name: 'Fashion', aisles: 18 },
  { name: 'Electronics', aisles: 9 },
  { name: 'Home', aisles: 14 },
  { name: 'Beauty', aisles: 7 },
  { name: 'Accessories', aisles: 5 }
];

app.get('/api/products', (_req, res) => {
  res.json(products);
});

app.get('/api/departments', (_req, res) => {
  res.json(departments);
});

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'department-store-backend' });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Backend listening on port ${port}`);
  });
}

module.exports = { app };
