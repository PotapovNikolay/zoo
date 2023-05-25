interface SelectProps {
    label: string;
    name: string;
    value: string | number;
    options: Array<{ id: number; title: string }>;
    setField: (field: number | string, name: string) => void;
}

export const Select: React.FC<SelectProps> = ({
    label,
    name,
    value,
    options,
    setField,
}) => {
    
    
    return (
        <>
            <label
                htmlFor={name}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                {label}
            </label>
            <select
                id={name}
                value={value}
                onChange={(event) => {
                    setField(event.target.value, name);
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                {options.map(({ id, title }, key) => {
                    return (
                        <option key={key}  value={id}>
                            {title}
                        </option>
                    );
                })}
            </select>
        </>
    );
};
