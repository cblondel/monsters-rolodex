import { useEffect, useState } from "react";
import { Monster } from "./interfaces";
import CardList from "./component/card/card-list.component";
import SearchBox from "./component/search-box/search-box.component";
import ThemeSwitcher from "./component/switcher/theme-switcher.component";
import PercentProgressBar from "./component/progress-bar/percent-progress-bar.component";

type AppProps = {};

const App = (props: AppProps) => {

  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [search, setSearch] = useState('');
  const [filteredMonster, setFilteredMonster] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) =>
        response.json()
      ).then(monsters => {
        setMonsters(monsters);
      });
  }, []);

  useEffect(() => {
    const newFilteredMonster = monsters.filter((monster) => monster.name.toLowerCase()
      .includes(search));
    setFilteredMonster(newFilteredMonster);
  }, [monsters, search]);

  const onSearchChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(evt.target.value.toLowerCase());
  }

  return (
    <div className="sm:px-40 mx-auto dark:bg-zinc-900 dark:text-white">
      <header className="fixed top-0 left-0 right-0 flex place-content-between items-center lg:px-16 sm:px-10 px-4 sm:py-5 py-4 dark:bg-zinc-800 shadow-sm bg-zinc-100">
        <h1 className="text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">MONSTER ROLODEX</h1>
        <ThemeSwitcher isDark={false} />
        <PercentProgressBar initialPercent={0} />
      </header>
      <div className="flex justify-center justify-items-center p-4 sm:pt-28 sm:pb-8">
        <SearchBox placeholder='Search monster' className='' onChangeHandler={onSearchChange} />
      </div>
      <CardList monsters={filteredMonster} />
    </div>
  )
}

export default App;
