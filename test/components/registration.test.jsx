/* eslint-disable no-unused-vars */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import Registration from "../../src/components/Registration";
vi.mock("axios");

describe("Registration Component", () => {
  const navigate = vi.fn();

  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("renders the registration form", () => {
    render(
      <BrowserRouter>
        <Registration />
      </BrowserRouter>
    );

    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Enter Password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument();
  });
});
