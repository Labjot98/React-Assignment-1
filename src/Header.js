//3. Create a component named "Header" that takes one prop - "title". The component should display a header
// element with the given title

export default function Header(){
    let title = "React Assignment";

    return (
        <>
            <header>{title}</header>
        </>
    );
}