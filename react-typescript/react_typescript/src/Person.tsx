interface User {
    name: string,
    age: number
}

export const Person = (props: User) => {
    return (
        <div>
            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
        </div>
    )


}