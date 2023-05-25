type TType = 'blue' | 'red'

interface ButtonProps {
    label: string;
    type?: TType;
    submit?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, submit, type = "blue" }) => {
    return (
        <button
            onClick={() => {
                submit ? submit() : null;
            }}
            type="submit"
            className={
                type === "blue"
                    ? "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    : "focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            }
        >
            {label}
        </button>
    );
};
