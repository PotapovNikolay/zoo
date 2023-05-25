interface InputProps {
    label: string;
    name: string;
    value: string | number ;
    setField: (field: number | string, name: string) => void;
}

export const Input: React.FC<InputProps> = ({ label, name, value, setField }) => {
    return (
        <>
            <label
                htmlFor={name}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                {label}
            </label>
            <input
                onChange={(event) => setField(event.target.value, name) }
                defaultValue={value? value : ''}
                type="text"
                name={name}
                id={name}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            />
        </>
    );
};
