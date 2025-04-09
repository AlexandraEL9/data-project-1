/* eslint-env jest */
import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import AddProductForm from "./AddProductForm";

test("renders AddProductForm inputs", () => {
  render(<AddProductForm onProductAdded={() => {}} />);
  expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/price/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/stock/i)).toBeInTheDocument();
});
