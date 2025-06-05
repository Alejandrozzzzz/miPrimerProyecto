const request = require('supertest');
const mongoose = require('mongoose');
const app = require('./index');

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/local', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
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
