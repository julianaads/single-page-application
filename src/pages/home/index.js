export default () => {
    const container = document.createElement('div');
    
    const template = `
    <div class="slider">
    <figure>
      <img src="img/imagem-01.jpg">
      <img src="img/imagem-02.png">
      <img src="img/naruto.jpg">
    </figure>
  
  </div>

    `;

      
    container.innerHTML = template;
    
        return container

}

