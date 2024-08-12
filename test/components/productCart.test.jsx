import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import ProductCart from "../../src/components/ProductCart";

vi.mock("axios");
vi.mock("../../src/assets/3_dots.png", () => ({
  default: () => "3_dots.png",
}));
vi.mock("../../src/assets/image_not_found.png", () => ({
  default: () => "image_not_found.png",
}));

describe("ProductCart Component", () => {
  const mockSetProducts = vi.fn();

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders product information correctly", () => {
    const product = {
      id: 1,
      name: "Apple 13 pro",
      description: "This is a sample product description.",
      price: 29.99,
      quantity: 10,
      thumbnail: "product_image.png",
    };

    render(
      <MemoryRouter>
        <ProductCart
          product={product}
          products={[product]}
          setProducts={mockSetProducts}
        />
      </MemoryRouter>
    );

    expect(screen.getByText(/Apple 13 pro/i)).toBeInTheDocument();
    expect(
      screen.getByText(/This is a sample product description./i)
    ).toBeInTheDocument();
    expect(screen.getByText(/29.99/i)).toBeInTheDocument();
    expect(screen.getByText(/Quantity: 10/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Product Image/i)).toHaveAttribute(
      "src",
      "product_image.png"
    );
  });

  it("displays edit and delete on clicking three dots icon", () => {
    const product = { id: 1 };

    render(
      <MemoryRouter>
        <ProductCart
          product={product}
          products={[product]}
          setProducts={mockSetProducts}
        />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole("img", { name: /three dots/i }));
    expect(screen.getByText(/Edit/i)).toBeInTheDocument();
    expect(screen.getByText(/Delete/i)).toBeInTheDocument();
  });
});
