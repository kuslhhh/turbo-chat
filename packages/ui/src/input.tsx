type PropType = {
    placeholder: string,
    onChange: (e: any) => void
    size: "big" | "small"
}

export function TextInput({
    placeholder,
    size,
    onChange
}: PropType) {
    return (
        <input style={{
            padding: size === "big" ? 20 : 10,
            margin: size === "big" ? 20 : 10,
            borderColor: "black",
            borderWidth: 1,
        }}
            onChange={onChange}
            placeholder={placeholder}
            type="text"
            name=""
            id="" ></input>
    )
}
