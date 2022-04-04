const request = require("supertest");
const app = require("../app");
const mongoose = require("mongoose");

describe("POST /login", () => {
  beforeAll((done) => {
    done();
  });

  afterAll((done) => {
    mongoose.connection.close();
    done();
  });

  describe("given a email", () => {
    test("should specify json int the content type header", async () => {
      const response = await request(app).post("/login").send({
        email: "choyeun1998@gmail.com",
      });

      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json"),
      );
    });

    test("response has email", async () => {
      const response = await request(app).post("/login").send({});

      expect(response.statusCode).toBe(404);
    });
  });
});
