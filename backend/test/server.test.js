const test = require('node:test');
const assert = require('node:assert/strict');
const { once } = require('node:events');
const { app } = require('../server');

test('GET /api/products returns products', async () => {
  const server = app.listen(0);
  await once(server, 'listening');

  try {
    const { port } = server.address();
    const response = await fetch(`http://127.0.0.1:${port}/api/products`);
    const data = await response.json();

    assert.equal(response.status, 200);
    assert.ok(Array.isArray(data));
    assert.ok(data.length > 0);
    assert.ok(data.every((product) => product.name && product.category && product.image));
  } finally {
    server.close();
  }
});

test('GET /api/departments returns departments', async () => {
  const server = app.listen(0);
  await once(server, 'listening');

  try {
    const { port } = server.address();
    const response = await fetch(`http://127.0.0.1:${port}/api/departments`);
    const data = await response.json();

    assert.equal(response.status, 200);
    assert.ok(Array.isArray(data));
    assert.ok(data.length > 0);
    assert.ok(data.every((department) => department.name && department.aisles > 0));
  } finally {
    server.close();
  }
});
