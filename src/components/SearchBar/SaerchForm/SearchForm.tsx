import React, {ChangeEvent, useState} from 'react';
import s from "./SearchForm.module.scss"
import {useAppSelector} from "../../../hooks";
import {isLoadingSelector} from "../../../app/app-selectors";

type SearchFormProps = {
    callback: (value: string) => void
}

const SearchForm: React.FC<SearchFormProps> = ({callback}) => {
    const [value, setValue] = useState<string>("")
    const [error, setError] = useState<string>("")

    const isLoading = useAppSelector(isLoadingSelector)

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            callback(value)
        }
    }

    const handleBlur = () => setError("")

    const onClickHandler = () => {
        if (value.trim() !== "") {
            callback(value)
        } else {
            setError("The name is required!")
        }
    }


    return <>
        <div className={s.error}>{error && error}</div>
        <div className={s.form}>
            <input type="text"
                   value={value}
                   disabled={isLoading}
                   className={s.input}
                   onChange={onChangeInputHandler}
                   onKeyDown={onKeyPressHandler}
                   onBlur={handleBlur}
            />
            <button disabled={isLoading}
                    onClick={onClickHandler}
                    className={s.btn}>
                <img className={s.search}
                     src="https://cdn-icons-png.flaticon.com/512/751/751463.png"
                     alt="search"
                />
            </button>
        </div>
    </>
};

export default SearchForm;