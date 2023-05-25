interface UploadProps {
    label: string;
    name: string;
    value: string | number;
    upload: (e: any) => void;
}

export const Upload: React.FC<UploadProps> = ({ label, name, value, upload }) => {
    return (
        <div className="w-full h-full relative">
            <label
                className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white "
                htmlFor={name}
            >
                {label}
            </label>

            <input
                onChange={(e) => upload(e.target.files![0])}
                className=" block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id={name}
                type="file"
            />
        </div>
    );
};
