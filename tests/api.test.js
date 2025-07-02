import { describe, it, expect, beforeAll } from "vitest";
import request from "supertest";
import express from "express";
import app from "../BACKEND/index.js";

describe("GET OK", () => {
    it("Endpoint deberia responder mensajes OK", async () => {
        const response = await request(app).get("/productos");
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(false);
        expect(response.body.length).toBe(2);
    });
}); 
