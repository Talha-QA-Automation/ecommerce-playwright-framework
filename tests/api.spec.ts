import { test, expect } from '@playwright/test';

// Test 1: GET - Products List (Sabse Common API)
test('API 1 - Get All Products', async ({ request }) => {
  const response = await request.get('https://fakestoreapi.com/products');
  
  // Check status
  expect(response.status()).toBe(200);
  
  const data = await response.json();
  expect(data.length).toBeGreaterThan(0);
  
  console.log(✅ API Working: ${data.length} products found);
});

// Test 2: GET - Single Product
test('API 2 - Get Single Product', async ({ request }) => {
  const response = await request.get('https://fakestoreapi.com/products/1');
  
  expect(response.status()).toBe(200);
  
  const product = await response.json();
  expect(product).toHaveProperty('id');
  expect(product).toHaveProperty('title');
  expect(product).toHaveProperty('price');
  
  console.log(✅ Product: ${product.title});
});

// Test 3: POST - Create User (Dubai me yehi test karte hain)
test('API 3 - Create New User', async ({ request }) => {
  const newUser = {
    email: 'talha.dubai.test@gmail.com',
    username: 'talha_dubai_qa',
    password: 'Test@123'
  };
  
  const response = await request.post('https://fakestoreapi.com/users', {
    data: newUser
  });
  
  expect(response.status()).toBe(200);
  console.log('✅ User Created Successfully');
})
