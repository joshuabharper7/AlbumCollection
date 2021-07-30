const todaysDate = new Date(Date.now());

export default function Footer(){

    return `
    <hr/>
        &copy; ${todaysDate.getFullYear()}
    `;
}