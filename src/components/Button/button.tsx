interface ButtonProps {
  title: string;
}

export function Button({ title }: ButtonProps) {
  return (
    <button className="rounded-md bg-blue-600 p-2 font-bold">{title}</button>
  );
}
