import { FizzBox, BuzzBox, NumberBox, FizzBuzzBox } from "../boxes";

const generateFizzNumbers = (how_many, start_position = 1) => {
  const fizzTab = []; //moduls in "fizz style"
  const end_position = how_many + start_position;

  for (let i = start_position; i < end_position; i++) {
    const isDividedBy5 = i % 5 === 0;
    const isDividedBy3 = i % 3 === 0;

    if (isDividedBy5 && isDividedBy3) fizzTab.push(<FizzBuzzBox key={i} />);
    else if (isDividedBy3) fizzTab.push(<FizzBox key={i} />);
    else if (isDividedBy5) fizzTab.push(<BuzzBox key={i} />);
    else fizzTab.push(<NumberBox key={i} value={i} />);
  }

  return fizzTab;
};

export { generateFizzNumbers };
