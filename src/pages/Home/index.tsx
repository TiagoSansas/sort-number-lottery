import { useState } from "react";
import { Button } from "../../components/Button/button";
import { InputNumber } from "../../components/Input/inputNumber";
import { Label } from "../../components/Input/label";

export function Home() {
  const [number, setNumber] = useState<number>(0);
  const [arrayNumber, setArrayNumber] = useState<number[]>([]);

  function changeStringToNumber(target: HTMLInputElement) {
    setNumber(target.valueAsNumber);
  }

  function handleAddNumber() {
    if (!arrayNumber.includes(number)) {
      setArrayNumber((state) => [...state, number]);
    }
    setNumber(0);
  }

  return (
    <main>
      <div>
        <div className="my-5">
          <Label id={"inputNumber"} title={"Adicionar Numero"}>
            <InputNumber
              id={"inputNumber"}
              value={number}
              GetValueInput={changeStringToNumber}
            />
          </Label>
        </div>

        <div onClick={handleAddNumber}>
          <Button>Adicionar Numero</Button>
        </div>
      </div>
      <div>
        {arrayNumber.map((item) => {
          return (
            <span className="p-4" key={item}>
              {item}
            </span>
          );
        })}
      </div>
    </main>
  );
}