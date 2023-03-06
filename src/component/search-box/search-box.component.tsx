import * as React from 'react';


interface SearchBoxProps {
    onChangeHandler(evt: React.ChangeEvent<HTMLInputElement>): void;
    className: string;
    placeholder: string;
}

interface SearchBoxState {

}

class SearchBox extends React.Component<SearchBoxProps, SearchBoxState> {
    // state = { :  }
    render() {

        const { className, placeholder, onChangeHandler } = this.props;

        return (
            <input type="search" name="search" placeholder={placeholder} onChange={onChangeHandler}
                className={`border-2 border-zinc-100 rounded w-full p-4 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500 
                    dark:border-zinc-500 dark:bg-zinc-800 dark:focus:border-cyan-500 ${className}`} />
        );
    }
}

export default SearchBox;