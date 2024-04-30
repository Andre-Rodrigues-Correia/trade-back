import request from "supertest";
import app from "../../src/app.js";
import {connectDB} from "../../src/database/connection.js";
import User from "../../src/models/User.js";
import 'dotenv/config.js'

beforeAll(async () =>{
    await connectDB();
});

afterAll(async () => {
    await User.collection.drop();
});

describe('Should test user post route', function () {

    test('Should create new user with success', () => {

        const user = {
            name: 'Username',
            mail: 'andre.correia.testes@gmail.com',
            password: '$Mobr@l123',
            birthday: '10/10/2000',
            phone: 99999999999
        }

        return request(app).post('/user').send(user).then((res) => {
            expect(res.body.message).toEqual('User created with success');
            expect(res.status).toEqual(201)
        });
    })
});
