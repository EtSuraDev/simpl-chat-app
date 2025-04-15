const { app } = require("../server")
const req = require("supertest")
const { user } = require("../model/model.js")
const sequelize = require("../config/connectDB")



describe('login test', () => {
    beforeAll(async() => {
        await sequelize.authenticate()
    })
    test(' username and password requird ', async() => {
        const response = await req(app).post("/auth/login")
        expect(response.status).toBe(400)
    })

    test(' userName require ', async() => {
        const response = await req(app).post("/auth/login").send({
            password: "hrhrhhr"
        })

        expect(response.status).toBe(400)
    })
    test(' incorrect username and password ', async() => {
        const response = await req(app).post("/auth/login").send({
            userName: "hello evry one",
            password: "something"
        })

        expect(response.status).toBe(404)
    });
    test('login', async() => {
        const response = await req(app).post("/auth/login").send({
            userName: "admin",
            password: "admin"
        })

        expect(response.body.successes).toBe(true)
        expect(response.status).toBe(200)
        const token = response.header['set-cookie']
        expect(token).toBeDefined()
    });

    afterAll(() => {
        sequelize.close
    })
})



describe('signup', () => {
    beforeAll(async() => {
        await sequelize.authenticate()
    })
    test(' userName required ', async() => {
        const response = await req(app).post("/auth/signup").send({
            userName: "hello"
        })

        expect(response.status).toBe(400)
        expect(response.body.successes).toBe(false)
    });
    test(' username and password required ', async() => {
        const response = await req(app).post("/auth/signup")

        expect(response.status).toBe(400)
        expect(response.body.successes).toBe(false)
    });
    test('create account', async() => {
        const response = await req(app).post("/auth/signup").send({
            userName: "username",
            password: "password"
        })
        expect(response.status).toBe(201)
        const cookies = response.headers['set-cookie'];
        expect(cookies).toBeDefined();
        expect(response.body.successes).toBe(true)
        const userIsInDB = await user.findOne({ where: { userName: "username" } })
        expect(userIsInDB).not.toBeNull()
        expect(userIsInDB.userName).toBe("username")
    });
    afterAll(() => {
        user.destroy({ where: { userName: "userName" } })
        sequelize.close
    })
})