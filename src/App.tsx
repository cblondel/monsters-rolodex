import * as React from "react";
import { Component } from "react";
import { Monster } from "./interfaces";
import CardList from "./component/card/card-list.component";
import SearchBox from "./component/search-box/search-box.component";
import ThemeSwitcher from "./component/switcher/theme-switcher.component";
import PercentProgressBar from "./component/progress-bar/percent-progress-bar.component";

type AppState = {
  monsters: Monster[];
  filter: string;
  isDark: boolean;
  completion: number;
};

type AppProps = {};

class App extends Component<AppProps, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      monsters: [],
      filter: "",
      isDark: false,
      completion: 0
    };

  }

  onFilterChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    this.setState({ filter: evt.target.value.toLowerCase() });
  }

  componentDidMount(): void {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) =>
        response.json()
      ).then(monsters => {
        this.setState(() => (
          { monsters }
        ), () => {
          console.log(this.state);
        })
      });
  }

  render(): React.ReactNode {

    const { isDark, completion } = this.state;

    const filteredMonster = this.state.monsters.filter((monster) => monster.name.toLowerCase()
      .includes(this.state.filter));

    return (
      <div className="sm:px-40 mx-auto dark:bg-zinc-900 dark:text-white">
        <header className="fixed top-0 left-0 right-0 flex place-content-between items-center lg:px-16 sm:px-10 px-4 sm:py-5 py-4 dark:bg-zinc-800 shadow-sm bg-zinc-100">
          <h1 className="text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">MONSTER ROLODEX</h1>
          <ThemeSwitcher isDark={false} />
          <PercentProgressBar initialPercent={0} />
        </header>
        <div className="flex justify-center justify-items-center p-4 sm:pt-28 sm:pb-8">
          <SearchBox placeholder='Search monster' className='' onChangeHandler={this.onFilterChange} />
        </div>
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
