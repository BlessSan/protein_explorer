import request from "supertest";
import app from "../server";

describe("Server Tests", () => {
  it("should respond to the root endpoint", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toContain("API is running deploy test v1...");
  });

  it("should respond to the test endpoint", async () => {
    const response = await request(app).get("/api/test");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("message");
    expect(response.body.message).toBe("API is working!");
  });
});
