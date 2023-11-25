import Profile  from './components/Profile';

const profiles = [
  {name: "Geo", 
  age: 18, 
  hobbies: ["sports", "music"],
  },
  {name: "Tom", 
  age: 25, 
  hobbies: ["movie", "music"],
  },
  {name: "Geo", 
  age: 18, 
  hobbies: ["sports", "travel", "game"],
  },
];

const Example = () => {
  return (
    <>
      <h3>練習問題</h3>
      <p>Profileコンポーネントを使用して、完成コードと同じ画面を作成してください。</p>
      <p>また、Profileコンポーネント内のリスト表示部分にkeyを設定して、ワーニング表示がされないようにしてください。</p>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.name}>
            <Profile {...profile} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Example;
