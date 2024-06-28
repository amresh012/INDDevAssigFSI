const request = require("supertest");
const app = require("../app");
const mongoose = require("mongoose");
const User = require("../models/model.users");

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("User API", () => {
  it("should create a new user", async () => {
    const res = await request(app).post("/api/users").send({
      firstName: "Test",
      lastName: "User",
      companyName: "Test Company",
      age: 30,
      city: "Test City",
      state: "TS",
      zip: 12345,
      email: "testuser@example.com",
      web: "http://testuser.com",
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("_id");
  });

  it("should get a user by ID", async () => {
    const user = new User({
      firstName: "Test",
      lastName: "User",
      companyName: "Test Company",
      age: 30,
      city: "Test City",
      state: "TS",
      zip: 12345,
      email: "testuser@example.com",
      web: "http://testuser.com",
    });
    await user.save();

    const res = await request(app).get(`/api/users/${user._id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("_id");
  });

  it("should delete a user by ID", async () => {
    const user = new User({
      firstName: "Test",
      lastName: "User",
      companyName: "Test Company",
      age: 30,
      city: "Test City",
      state: "TS",
      zip: 12345,
      email: "testuser@example.com",
      web: "http://testuser.com",
    });
    await user.save();

    const res = await request(app).delete(`/api/users/${user._id}`);
    expect(res.statusCode).toEqual(204);
  });
});
