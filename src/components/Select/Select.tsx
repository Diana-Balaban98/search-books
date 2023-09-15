import React, {ChangeEvent, DetailedHTMLProps, SelectHTMLAttributes} from 'react';
// import s from "./Select.module.css"
import s from "./Select.module.scss"

type DefaultSelectProps = DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
>

type SelectProps = DefaultSelectProps & {
    id: string
    title: string
    options?: {id: number, value: string}[]
    onChangeOption?: (value: string, selectId: string) => void
}

const Select: React.FC<SelectProps> = ({title, id, onChangeOption, options, value}) => {
    const mappedOptions = options ?
        options.map(o => (<option
            className={s.option}
            key={o.id}
            value={o.value}
        >
            {o.value}
        </option>)) : []

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChangeOption && e.currentTarget.value) {
            onChangeOption(e.currentTarget.value, e.currentTarget.id)
        }
    }

    return (
        <div className={s.wrapperSelect}>
            <span>{title}</span>
            <select
                id={id}
                value={value}
                className={s.select}
                onChange={onChangeCallback}
            >
                {mappedOptions}
            </select>
        </div>
    );
};

export default Select;
