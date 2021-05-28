import React from "react";
import App from "../App";
import renderWithRouter from "./RenderWithRouter";
import '@testing-library/jest-dom/extend-expect';

describe("teste da aplicação", () => {
  test("Testa se a home page tem um title", () => {
    const { getByRole } = renderWithRouter(<App />);
    const title = getByRole("heading", {
      name: "Mc Lojinha Feliz",
      level: 1,
    });
    expect(title).toBeInTheDocument();
  });
});
