export const InputField = ({label, type, name, value, onChange}) => {
    return (
        <div className="flex flex-row items-center mt-4">
            <label htmlFor={name} className={"mr-4 text-lg text-gray-200"}>{label}</label>
            <input type={type} name={name}
                   className={"w-full rounded-md bg-gray-800 border border-gray-700 text-gray-200 p-2"}
                   value={value}
                   onChange={onChange}
            />
        </div>
    )
}