
const animals = ["Dog", "Cat", "Rat"];

const Example = () => {

  // 配列処理でfor文はあまり使用しない
  // const animalList = [];
  // for(const animal of animals ){
  //   animalList.push(<li>{animal}</li>)
  // }

  // const helloAnimals = animals.map((animal) => <li>Hello, {animal}</li>)

  return (
    <>
      <h3>配列の操作</h3>
      <ul>
        {/* {animalList} */}
        {/* {helloAnimals} */}
        {animals.map((animal) => <li>Hello, {animal}</li>)}
      </ul>
    </>
  );
};

export default Example;
