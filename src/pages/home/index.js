export default () => {
    const container = document.createElement('div');


    const template = `
    <h1> Olá Otakus <h1>

    `;

    container.innerHTML = template;

    return container
}