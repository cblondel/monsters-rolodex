interface SearchBoxProps {
    onChangeHandler(evt: React.ChangeEvent<HTMLInputElement>): void;
    className: string;
    placeholder: string;
}

const SearchBox = (props: SearchBoxProps) => {

    const { className, placeholder, onChangeHandler } = props;

    return (
        <input type="search" name="search" placeholder={placeholder} onChange={onChangeHandler}
            className={`border-2 border-zinc-100 rounded w-full p-4 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500 
                    dark:border-zinc-500 dark:bg-zinc-800 dark:focus:border-cyan-500 ${className}`} />
    )
}

export default SearchBox;