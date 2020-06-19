class copiarEmail {
    constructor() {
      this.email = document.getElementById('emailzin');
      this.email.addEventListener('click', this.copiarEmail);
     
    }

    copiarEmail (element) {
      element = this.innerHTML;
  
      //navigator.clipboard.writeText(document.getElementById('emailzin').innerHTML);
      navigator.clipboard.writeText(element);
    }
}

class Tooltip {
  constructor(){
    this.mainTooltip();
  }

  mainTooltip(){
    //interações da tooltip
    this.option = document.getElementById('interacao');
    this.option.addEventListener('mouseenter', this.renderTooltip);
    this.option.addEventListener('mouseleave', this.apagarTooltip);
    
  }

  renderTooltip(){  
    //aparece a tooltip
    this.container = document.createElement('div');
    this.container.textContent = 'Clique para copiar o E-mail.';
    this.container.classList.add("tooltip")
    this.appendChild(this.container);
  }

  apagarTooltip(){
    //apaga a tooltip
    this.removeChild(this.container);
  }

}

const tooltipicos = new Tooltip;
const interacoes = new copiarEmail;

// 
