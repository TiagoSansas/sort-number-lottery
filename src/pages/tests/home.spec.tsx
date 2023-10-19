import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Home } from "../Home";
import "@testing-library/jest-dom";

describe("Home", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
  });

  it("Deve rederizar o componente", () => {
    expect(screen).toMatchSnapshot();
  });
  it("Deve adicionar  um numero", () => {
    const input = screen.getByTestId("inputNumber");
    const buttonAdicionarNumero = screen.getByRole("button", {
      name: "Adicionar Numero",
    });
    fireEvent.change(input, { target: { value: 23 } });
    fireEvent.click(buttonAdicionarNumero);

    const result = screen.getByText(23);
    expect(result).toBeInTheDocument();
  });
  it("Deve gerar numeros aleatorios", async () => {
    const input = screen.getByTestId("quantyNumber") as HTMLInputElement;
    const buttonGerarNumeros = screen.getByRole("button", {
      name: "Gerar Numeros",
    });

    fireEvent.change(input, { target: { value: 5 } });
    fireEvent.click(buttonGerarNumeros);

    expect(input.value).toBe("0");
  });
});
