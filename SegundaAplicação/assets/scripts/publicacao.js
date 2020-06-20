class Modal{
    constructor() {
        this.step = document.getElementById('step')

        this.enviarBtn = document.getElementById('enviar-btn');
        this.enviarBtn.addEventListener('click', this.btnEnviarAction.bind(this));
        this.isModalOpen = false;
           
        this.backdrop = document.createElement('div');
        this.backdrop.classList.add("backdrop");
        this.step.appendChild(this.backdrop);
        
        this.postSection = document.createElement('section');
        this.postSection.classList.add("modal");
        this.backdrop.appendChild(this.postSection);
        this.titulo = document.getElementById('postTitle');
        this.conteudo = document.getElementById('conteudo');
        this.autor = document.getElementById('autor');

        this.listPost = []
        
    }

    btnEnviarAction(){   
        if (this.isModalOpen === false) {   
            this.step.style.display = "block";
            //this.showModal();
            this.isModalOpen = true;
            console.log("isModalOpen? "+this.isModalOpen)

            this.modeloPost = {
                titulo: this.titulo.value,
                conteudo: this.conteudo.value,
                autor: this.autor.value 
            }

            this.postSection.innerHTML = `
                <div class='post'> 
                    <h2>${this.modeloPost.titulo}</h2> 
    
                    <p> &nbsp; ${this.modeloPost.conteudo}
                    </p>
                    
                    <h4> enviado por ${this.modeloPost.autor} </h4>
                </div> <br>
    
                <button class="modal-btn-submit">Publicar</button>
                <button class="modal-btn-cancel" >Cancelar</button>
            `   
            this.cancelarBtn = document.querySelector(".modal-btn-cancel");
            this.cancelarBtn.addEventListener('click', this.esconderModal.bind(this));
            this.publicarBtn = document.querySelector(".modal-btn-submit");
            this.publicarBtn.addEventListener('click',this.postarPublicacao.bind(this));   
        }
    }

    esconderModal(event){
        event.preventDefault();

        if (this.isModalOpen === true) {
            this.step.style.display = "none"; 
            this.isModalOpen = false;
            console.log( "isModalOpen? "+this.isModalOpen)
        }   
    }

    postarPublicacao(event){
        this.esconderModal(event);

        this.secaoPosts = document.querySelector("#post-postados");
        // let numberOfPosts = document.querySelectorAll("#post-postados > section");

        this.sectionPost = document.createElement('section');
        this.sectionPost.innerHTML = `
        <img class="apagar"  src="assets/imagens/lixo.png" alt="">
        <h2>${this.modeloPost.titulo}</h2>  
    
        <p> &nbsp; ${this.modeloPost.conteudo}
        </p>
        
        <h4> enviado por ${this.modeloPost.autor} </h4> 
        `
        
        //let copiaPost = this.sectionPost.cloneNode(true);
        
        this.secaoPosts.appendChild(this.sectionPost);

        //console.log("adicionado: " , this.sectionPost);
        
        this.lixeira = document.querySelectorAll(`.apagar`);
        for (let element of this.lixeira) {
            element.addEventListener('click', this.apagarPublicacao);
        }
        //this.lixeira.addEventListener
        
    }

    apagarPublicacao(){
        //console.log("apagado: " + JSON.stringify(this));
        this.parentNode.remove();
    }
}

class App {
    static init(){
        const modalC = new Modal; 
    }
}



//==================== CSS DA SECTION ATIVIDADE
function cssSection () {
    const cssAtividade = document.getElementById('css');
    cssAtividade.innerHTML = `
    <style> 
        #atividade{
            text-align: center;
        }

        #atividade .input, #atividade textarea{
            font-size: 17px;
            width: 65%;
            padding: 10px;
            margin-bottom: 20px;
            border: white;
            background-color: whitesmoke;
            border-bottom: 2px solid rgb(32, 148, 243);
        }

        #atividade .input:focus, #atividade textarea:focus {
            background-color: rgba(72, 167, 245, 0.096);
            border: white;
            outline: 0;
            border-bottom: 2px solid rgb(0, 167, 103);
        }


        #atividade textarea{
            font-size: 15px;
            resize: none;
            width: 80%;
            padding: 10px;
        } 

        #atividade #enviar-btn{
            background-color: rgb(32, 148, 243);
            padding: 13px;
            width: 100px;
            color: white;
            border: white;
            outline: 0;
            border-radius: 5px;
            margin-bottom: 10px;
        }
        #atividade #enviar-btn:active{
           background-color: rgb(20, 86, 139);
        }

        .backdrop{
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            pointer-events: all;
            background: rgba(0, 0, 0, 0.75);
            z-index: 10;
        }

        .modal{
            color:black;
            position:relative;
            width: 50%;
            top: 30vh;
            background-color:white;
            max-width: 600px;
            padding: 10px;   
            border-radius: 10px;   
            min-width: 445px; 
            font-size: 11pt;
            z-index: 100;
        }

        .post{
            width: 100%;
            margin:auto;
            padding-left: 10px;
            padding-right: 10px
        }

        #post h2, #post p{
            padding-bottom: 15px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.75);
            width: 100%;
        }
        #post p{
            margin-top: 0;
        }
        h4{
            color: rgba(82, 82, 82, 0.5);
            font-style: italic;
            margin-bottom:5px;
            display: flex;
            justify-content: flex-end;
        }

        .modal-btn-submit, .modal-btn-cancel{
            padding: 13px;
            width: 100px;
            color: white;
            border: white;
            outline: 0;
            border-radius: 5px;
        }
        .modal-btn-submit{
            margin: 20px auto 0 0px;
            left: 120px;
            position:absolute;
            background-color:rgb(45, 147, 51);
        }
        .modal-btn-cancel{
            margin: 20px auto 0 0px;
            right: 120px;
            position:absolute;
            background-color:rgb(210, 37, 37);
        }
        .modal-btn-submit:active{
            background-color:rgb(32, 103, 37);
        }
        .modal-btn-cancel:active{
            background-color:rgb(144, 25, 25);
        }
    </style>
    `
}

cssSection();
App.init();