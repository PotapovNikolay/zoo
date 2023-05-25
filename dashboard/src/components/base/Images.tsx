import { useState } from "react";
import { IAnimalImages } from "types/animal/IAnimalImages";

interface image{
    path:string,
}


interface ImageProps<T > {
    label: string;
    name: string;
    setField: (field: number | string | File, name: string) => void;
    images: Array<T> | string
}

export const Images= function <T extends image>({
    label,
    name,
    setField,
    images,
}: ImageProps<T >) {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);

    return (
        <div className="w-full  h-full  relative">
            <label
                className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white "
                htmlFor={name}
            >
                {label}
            </label>

            <div className=" flex items-center  space-x-6 ">
                {selectedImage && (
                    <div className="relative">
                        <img
                            alt="not found"
                            src={URL.createObjectURL(selectedImage)}
                            className="object-cover  h-44 rounded-lg"
                        />
                        {/* 
                        <button
                            className="absolute top-2 right-2"
                            onClick={() => setSelectedImage(null)}
                        >
                            x
                        </button> */}
                    </div>
                )}

                {images &&
                    !selectedImage &&
                    Array.isArray(images) &&
                    images.map((image, key) => {
                        return (
                            <div key={key} className="relative">
                                <img
                                    alt="not found"
                                    src={`/public/images/${image.path}`}
                                    className="object-cover  h-44 rounded-lg"
                                />{" "}
                            </div>
                        );
                    })}

                {images &&
                    !selectedImage &&
                    typeof images === 'string' &&
             
                            <div className="relative">
                                <img
                                    alt="not found"
                                    src={`/public/images${images}`}
                                    className="object-cover  h-44 rounded-lg"
                                />
                            </div>
                        
                    }

                <div className="flex items-center justify-center w-full h-44 self-auto">
                    <label
                        htmlFor="dropzone-file"
                        className="flex flex-col items-center justify-center w-full h-full  border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6 ">
                            <svg
                                aria-hidden="true"
                                className="w-10 h-10 mb-3 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                ></path>
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                <span className="font-semibold">
                                    Нажмите для загрузки
                                </span>{" "}
                                или перетащите
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                SVG, PNG, JPG or GIF (MAX. 800x400px)
                            </p>
                        </div>
                        <input
                            onChange={(event) => {
                                setSelectedImage(
                                    event.target.files && event.target.files[0]
                                );
                                setField(event.target.files![0], name);
                            }}
                            id="dropzone-file"
                            type="file"
                            className="hidden"
                        />
                    </label>
                </div>
            </div>
        </div>
    );
};
