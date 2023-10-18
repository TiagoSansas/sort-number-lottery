import { render, screen } from "@testing-library/react";
import { Button } from "../button";
import "@testing-library/jest-dom";

describe("<Button/>", () => {
  beforeEach(() => {
    render(
      <Button colorSelect="add" size="sm">
        Adicionar Numero
      </Button>,
    );
  });

  it("Deve renderizar corretamente ", () => {
    expect(screen).toMatchSnapshot();
  });

  it("Button deve existir no documento ", () => {
    const buttonAdicionarNumero = screen.getByText("Adicionar Numero");
    expect(buttonAdicionarNumero).toBeInTheDocument();
  });
});
