export default () => {
    const container = document.createElement('div');


    const template = `
  
    <h2> Olá Otakus <h2>
    
    `;

    container.innerHTML = template;

    return container
}