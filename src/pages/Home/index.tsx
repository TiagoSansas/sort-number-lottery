import { useState } from "react";
import { Button } from "../../components/Button/button";
import { InputNumber } from "../../components/Input/inputNumber";
import { Label } from "../../components/Input/label";

export function Home() {
  const [number, setNumber] = useState<number>(0);

  const [quantyNumber, setQuantyNumber] = useState<number>(0);
  const [arrayNumber, setArrayNumber] = useState<number[]>([]);
  function changeStringToNumber(target: HTMLInputElement) {
    setNumber(target.valueAsNumber);
  }

  function changeSetQuantyNumber(target: HTMLInputElement) {
    setQuantyNumber(target.valueAsNumber);
  }

  function handleAddNumber() {
    if (!arrayNumber.includes(number)) {
      setArrayNumber((state) => [...state, number]);
    }
    setNumber(0);
  }

  function createNumbersRandom(quantNumber: number = 0) {
    const numberSort: number[] = [];
    if (quantNumber > 0) {
      for (let i = 0; i <= quantNumber; i++) {
        const numberAdd = Math.floor(Math.random() * 100);
        if (!numberSort.includes(numberAdd)) {
          numberSort.push(numberAdd);
        }
      }
    }
    return numberSort;
  }

  function bloquedNumberEqual(array?: number[]) {
    const newArray = array?.filter(
      (number: number) => !arrayNumber.includes(number),
    );
    return newArray;
  }

  function HandleAddQuantiyNumberSort() {
    const numberRandom = createNumbersRandom(quantyNumber);
    const numberAccepet = bloquedNumberEqual(numberRandom);

    setArrayNumber((state) => [...state, ...(numberAccepet || [])]);
    setQuantyNumber(0);
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
        <div className="my-5">
          <Label
            id={"quantyNumber"}
            title={"Adicione quantidade de numeros a ser gerados"}
          >
            <InputNumber
              id={"quantyNumber"}
              value={quantyNumber}
              GetValueInput={changeSetQuantyNumber}
            />
          </Label>
        </div>
        <div className="flex gap-3">
          <div>
            <Button onClick={handleAddNumber} colorSelect="add">
              Adicionar Numero
            </Button>
          </div>
          <div>
            <Button
              onClick={HandleAddQuantiyNumberSort}
              size="md"
              colorSelect="sort"
            >
              Gerar Numeros
            </Button>
          </div>
          <div>
            <Button size="lg" colorSelect="remove">
              Limpar Numeros
            </Button>
          </div>
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
