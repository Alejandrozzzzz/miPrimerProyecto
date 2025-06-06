const request = require('supertest');
const mongoose = require('mongoose');
const app = require('./index');

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/local');
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('POST /users/register', () => {
  it('should create a user', async () => {
    const res = await request(app).post('/users/register').send({
      nombre: 'Test',
      usuario: 'testuser',
      correo: 't@example.com',
      clave: '1234',
      rol: 'usuario'
    });
    expect(res.statusCode).toBe(201);
  });
});

describe('GET /users', () => {
  it('should return users list', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body.users)).toBe(true);
  });
});
