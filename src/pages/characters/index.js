export default () => {
    const container = document.createElement('div');


    const template = `
    <h2> Vamos biscoitar nossos personagens preferidos? <h2>
    
    `;

    container.innerHTML = template;

    return container
}