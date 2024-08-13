/* eslint-disable react/display-name */
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import ProductArea from "../../src/components/ProductArea";

vi.mock("axios");
vi.mock("../../src/components/ProductCart.jsx", () => ({
  default: ({ product }) => (
    <div data-testid="product-cart">{product.name}</div>
  ),
}));
vi.mock("../../src/components/Topbanner.jsx", () => ({
  default: () => <div>Top Banner</div>,
}));

describe("ProductArea Component", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders loading state initially", () => {
    render(<ProductArea />);

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  it("renders error state if the API call fails", async () => {
    axios.get.mockRejectedValueOnce(new Error("Failed to fetch products"));

    render(<ProductArea />);

    await waitFor(() => {
      expect(
        screen.getByText(/Error: Failed to fetch products/i)
      ).toBeInTheDocument();
    });
  });

  it("renders products when the API call is successful", async () => {
    const mockProducts = [
      { id: 1, name: "Product 1" },
      { id: 2, name: "Product 2" },
    ];
    axios.get.mockResolvedValueOnce({ results: mockProducts });

    render(<ProductArea />);

    await waitFor(() => {
      expect(screen.getByText(/Top Banner/i)).toBeInTheDocument();
      expect(screen.getByText(/Selected:/i)).toBeInTheDocument();
      // expect(screen.getAllByTestId("product-cart")).toHaveLength(
      //   mockProducts.length
      // );
      // mockProducts.forEach((product) => {
      //   expect(screen.getByText(product.name)).toBeInTheDocument();
      // });
    });
  });
});
