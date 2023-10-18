import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { InputNumber } from "../inputNumber";
import { Label } from "../label";

describe("<Input/>", () => {
  beforeEach(() => {
    render(
      <Label id={"idLabel"} title="Escrever um numero">
        <InputNumber data-testid={"idLabel"} type="number" />
      </Label>,
    );
  });

  it("Deve rederinzar o compomente", () => {
    expect(screen).toMatchSnapshot();
  });
  it("Deve possuir um texto no Label", () => {
    const labelName = screen.getByText("Escrever um numero");

    expect(labelName).toBeInTheDocument();
  });
  it("Deve pode adiconar um numero", () => {
    const input = screen.getByTestId("idLabel") as HTMLInputElement;
    fireEvent.change(input, { target: { value: 23 } });
    expect(input.value).toBe("23");
  });
  it("Não deve adicionar letras", () => {
    const input = screen.getByTestId("idLabel") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "ABCDER" } });
    expect(input.value).toBe("");
  });
});
