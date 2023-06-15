const transported_goods_data = [
    "FECHADURAS E FERRAGENS EM GERAL ",
    "PROD. ALIMENTÍCIOS, P/ ALIMENTAÇÃO HUMANA, INDUSTRIALIZADOS OU NÃO ",
    "ANIMAIS VIVOS  ",
    "FERRAMENTAS ELETRICAS E MANUAIS ",
    "AÇUCAR ",
    "ARMAS, ARMAMENTOS, MUNIÇÕES E EXPLOSIVOS ",
    "FIOS E CABOS ELÉTRICOS ",
    "ALHO ",
    "ARTIGOS DE ARAMARINHOS ",
    "FOLHA DE FLANDRES ",
    "ARROZ BENEFICIADO ",
    "ARTIGOS DE HIGIÊNE E LIMPEZA ",
    "FRALDAS DESCARTÁVEIS ",
    "CAFÉ (QUALQUER TIPO) ",
    "ARTIGOS FOTOGRAFICOS ",
    "INSTRUMENTOS MUSICAIS ",
    "CONGELADOS (EXCETO CARNES EM GERAL) ",
    "AUTO PEÇAS, INCLUSIVE PARA MOTOCICLETAS ",
    "LÂMINAS E APARELHOS DE BARBEAR ",
    "DOCES INDUSTRIALIZADOS ",
    "BEBIDAS (REFRIGERANTES E CERVEJAS) ",
    "LÂMPADAS (REATORES, LUMINÁRIAS E PERIFÉRICOS) ",
    "EMBUTIDOS EM GERAL E ESPECIAIRIAS ",
    "BEBIDAS ALCOOLICAS (EXCETO REFRIGERANTES E CERVEJAS) ",
    "MATERIAL DE ESCRITORIO/ESCOLAR/ LIVROS E REVISTAS ",
    "FEIJÃO (EMBALAGEM FINAL) ",
    "BRINQUEDOS, BICICLETAS (PARTES PEÇAS E ACESSÓRIOS) ",
    "MATERIAL ELETRICO ",
    "GRÃOS EM GERAL ",
    "CABOS DE FIBRA OTICA, DE TELEFONIA, DE TV A CABO ",
    "MAQUINAS PORTÁTEIS LEITORAS DE CARTÃO ",
    "HORTIFRUTIGRANJEIRO ",
    "CALÇADOS ",
    "MEDICAMENTOS E VACINAS (USO HUMANO OU ANIMAL) ",
    "LATICINIOS EM GERAL ",
    "CASSITERITA/ NIQUEL/ ZINCO/ESTANHO/ MOLIBIDÊNIO ",
    "MEDICAMENTOS (MATERIA PRIMA) ",
    "LEITE EM PÓ, CONDENSADO E LONGA VIDA ",
    "VIDEO GAMES , CONSOLES, CARTUCHO DE VIDEO GAME E SIMILARES ",
    "METAIS E MINERAIS EM GERAL (AÇO, ALUMINIO, BAUXITA, BRONZE, CASSITERITA, COBRE, CHUMBO, ESTANHO, FERRO, LATÃO, NIQUEL, ZINCO E SIMILARES) EM TODAS AS SUAS FORMAS ",
    "REFRIGERADOS (EXCETO CARNES EM GERAL) ",
    "CHARQUE, CARNE “IN NATURA”, FRANGOS E EMBUTIDOS ",
    "MUDANÇAS / MÓVEIS E UTENSÍLIOS DOMÉSTICOS ",
    "RAÇÃO OU SUPLEMENTO ALIMENTAR ANIMAL ",
    "CIGARROS ",
    "ÓLEOS COMESTÍVEIS E AZEITES ",
    "ROTEADORES, IMPRESSORAS, SCANNER, MODEM, PARTE, PEÇAS, ACESSÓRIOS E PERIFÉRICOS) ",
    "CILINDROS DE GNV (KITS PARA INSTALAÇÃO VEICULAR) ",
    "ÓLEOS LUBRIFICANTES ",
    "PRODUTOS DE PETSHOP (EXCETO RAÇAO OU SUPLEMENTO ALIMENTAR) ",
    "COMBUSTÍVEIS ",
    "OXIDO E DIOXIDO DE TITÂNIO ",
    "RELÓGIOS ",
    "COMPUTADORES, PALMS, LATOPS, NETBOOK, NOTEBOOKS, TABLETS, ULTRABOOK/ READBOOK, MONITOR, APARELHO DE MP3, IPOD E SIMILARES ",
    "PAPEL E CELULOSE EM GERAL ",
    "ROLAMENTOS ",
    "CONFECÇÕES, TECIDOS E FIOS TÊXTEIS ",
    "PARTES, PEÇAS E COMPONENTES PARA EQUIPAMENTOS DE INFORMÁTICA/ ELETRONICOS/ ÁUDIO E VIDEO ",
    "TELEFONES CELULARES, BATERIAS E ACESSÓRIOS ",
    "CONTAINER ",
    "PARTES, PEÇAS E COMPONENTES PARA TELEFONE CELULAR ",
    "TINTAS, VERNIZES E SOLVENTES ",
    "COSMÉTICOS, PERFUMES ",
    "PILHAS/BATERIAS ",
    "TRATORES, MÁQUINAS AGRÍCOLAS E IMPLEMENTOS AGRICOLAS ",
    "COURO (QUALQUER TIPO) ",
    "PISO CERÂMICO, PORCELANA, PISOS, GRANITOS, MARMORES, LADRILHOS E LOUÇAS EM GERAL ",
    "TRATORES E MÁQUINAS PARA CONSTRUÇÃO CIVIL; EMPILHADEIRAS E GUINDASTES ",
    "DEFENSIVOS AGRÍCOLAS/ ADUBOS/FUNGICIDAS E FERTILIZANTES",
    "PNEUS E CÂMARAS DE AR ",
    "VEÍCULOS RODANDO OU REMONTADOS OU EMBARCADOS ",
    "ELETRONICOS (tv, APARELHO DE DVD/BLUE RAY, MICRO SYSTEM, HOME THEATER, PROJETORES, CONSOLE/ CONTROLE DE VIDEO GAME, CÂMARAS DE VIDEO) ",
    "POLÍMEROS EM GERAL (POLIETILENO/ POLIPROPILENO/POLIESTIRENO/PVC/ T.D.I. (TOLUENO DI-ISOCIANATO) E SIMILARES ",
    "TRANSFORMADORES E GERADORES ",
    "ELETRODOMESTICOS ",
    "PRODUTOS FARMACÊUTICOS (EXCETO MEDICAMENTOS) ",
    "VIDROS",
    "APARELHOS DE AR CONDICIONADO (USO DOMESTICO ) ",
    "PRODUTOS OTICOS (ÓCULOS E LENTES DE CONTATO) ",
    "VITAMINAS E SUPLEMENTOS ALIMENTARES ",
    "ELETROPORTÁTEIS ",
    "PRODUTOS QUIMICOS ",
    "OUTROS (ESPECIFICAR)​​",
    "EMBALAGEM PARA PRODUTOS ALIMENTICIOS ",
    "PAINEL FOTOVOTAICO ",
    "EQUIPAMENTO MEDICO HOSPITALAR/ CLINICO E CORRRELATOS"
]

const input_validation_messages = {
    "required": "Preencha este campo!",
	"email": "Insira um Email válido",
	"cellphone": "Insira um número de telefone válido",
	"cnpj": "Insira um cnpj válido",
	"select": "Nenhum item selecionado"
}

const main = {
    load: () => {
        main.elements.transportedGoods.autoload()
        main.debug.skipToStep(10)
    },
    isEmpty: (str) => !str.trim().length,
    log: () => {
        console.log({
            steps: main.step.all,
            currentStep: main.step.getCurrent(),
            currentStepObject: main.step.getCurrentObject(),
            
            Panels: main.tabPanel.all,
            currentPanel: main.tabPanel.getCurrent()
        })
    },
    debug: {
        skipToStep: (step) => {
            for (let index = 0; index < step; index++) {
                main.debug.step.eventListener(1)
            }
        },
        step: {
            eventListener: (direct) => {
                main.step.before(direct)
            }
        }
    },
    buttons: {
        next: '',
        prev: '',
    },
    controller: {
        client: {
            name: '',
            display: '',
            setName: (obj) => {
                main.controller.client.name = obj
            },
            getName: () => {
                let name = main.controller.client.name.value
                let first_name = ''
                if (name === undefined || name === "") {
                    first_name = "{Nome}"
                } else {
                    first_name = name.split(' ')[0]
                }
                var display = main.controller.client.display
                
                for(let aux = 0; aux < display.length; aux++){
                    display[aux].innerHTML = first_name
                }

            }
        },
        mail: {
            objectToArray: (obj) => {
                var config = {}
                obj.map(function(item) {
                    if ( config[item.name] ) {
                        if ( typeof(config[item.name]) === "string" ) {
                            config[item.name] = [config[item.name]];
                        }
                        config[item.name].push(item.value);
                    } else {
                        config[item.name] = item.value;
                    }
                });
                return config
            },
            send: (data) => {
                data = main.controller.mail.objectToArray(data)
                $.ajax({
                    url: "sendmail/index.php",
                    type: "POST",
                    dataType: 'text',
                    data: data,
                    success: function(data){
                        // alert('Items added');
                        console.log(data)
                    },
                    error: function(e){
                        console.log(e);
                    }
                });
            }
        }
    },
    step: {
        all: '',
        current: 0,
        getCurrent: () => {
            return main.step.current
        },
        setCurrent: (value) => {
            main.step.current = value
        },
        next: () => {
            main.step.setCurrent(main.step.current + 1)
        },
        prev: () => {
            main.step.setCurrent(main.step.current - 1)
        },
        getCurrentObject: () => {
            return main.step.all[main.step.getCurrent()]
        },
        eventListener: (targetButton, direct = 0) => {
            if (direct === 1) {
                if (main.validate.eventListener(targetButton)) {
                    main.step.before(direct)
                } else {
                    return false
                }
            } else {
                main.step.before(direct)
            }

            return true
        },
        before: (direct) => {
            let steps = main.step.all
            // Hide current tab
            steps[main.step.current].classList.remove('d-flex')
            steps[main.step.current].classList.add('d-none')

            // Show previous tab
            steps[main.step.current + (direct)].classList.remove('d-none')

            if (direct >= 0) {
                main.step.next()
            } else if (direct < 0) {
                main.step.prev();
            }

            main.tabPanel.eventListener(direct)
        }
    },
    tabPanel: {
        current: 0,
        all: '',
        reverse: '',
        section: '',
        getCurrent: () => {
            return main.tabPanel.current
        },
        setCurrent: (value) => {
            main.tabPanel.current = value
        },
        next: () => {
            main.tabPanel.setCurrent(main.tabPanel.current + 1)
        },
        prev: () => {
            main.tabPanel.setCurrent(main.tabPanel.current - 1)
        },
        eventListener: (direct) => {
            switch (main.step.getCurrent()) {
                case 1:
                    main.tabPanel.setCurrent(1)
                    break;
                case 3:
                    main.tabPanel.setCurrent(2)
                    break;
                case 5:
                    main.tabPanel.setCurrent(3)
                    break;
                case 7:
                    main.tabPanel.setCurrent(4)
                    break;
                case 11:
                    main.tabPanel.setCurrent(5)
                    break;
                case 20:
                    main.tabPanel.setCurrent(6)
                    break;
                default:
                    // Default action ...
                    break;
            }
            main.tabPanel.getCurrentPanelObject(direct)
            main.elements.eventListener()
        },
        getCurrentPanelObject: (direct) => {
            let step = main.tabPanel.all
            let reverse = main.tabPanel.reverse
            main.tabPanel.setCurrentPanel(step[main.tabPanel.getCurrent()])
            switch (main.tabPanel.getCurrent()) {
                case 1:
                    step[0].classList.remove('d-flex')
                    step[0].classList.add('d-none')
                    step[1].classList.add('d-flex')
                    step[1].classList.add('bg-step-one')
                    step[2].classList.add('d-none')
                    break;
                case 2:
                    step[1].classList.remove('bg-step-one')
                    step[2].classList.remove('d-none')
                    step[3].classList.add('d-none')
                    break;
                case 3:
                    step[2].classList.add('d-none')
                    step[3].classList.remove('d-none')
                    step[4].classList.add('d-none')
                    break;
                case 4:
                    step[3].classList.add('d-none')
                    step[4].classList.remove('d-none')
                    step[5].classList.add('d-none')
                    break;
                case 5:
                    step[4].classList.add('d-none')
                    step[5].classList.remove('d-none')
                    step[6].classList.add('d-none')
                    break;
                case 6:
                    step[5].classList.add('d-none')
                    step[6].classList.remove('d-none')
                    // step[7].classList.add('d-none')

                    break;
                // case 7:
                //     step[5].classList.add('d-none')
                //     step[6].classList.remove('d-none')
                //     break;
                default:
                    break;

            }
        },
        setCurrentPanel: (video) => {
            if (video.classList[0] === 'background-video') {
                if (window.screen.width <= 700) {
                    main.tabPanel.mobile.setCurrentPanel()
                    // video.setAttribute('poster', 'images/mobile/' + video.dataset.poster)
                    // video.innerHTML = "<source type='video/mp4' src='videos/mobile/" + video.dataset.video + "' />"

                } else {
                    video.setAttribute('poster', 'images/' + video.dataset.poster)
                    video.innerHTML = "<source type='video/mp4' src='videos/" + video.dataset.video + "' />"
                }
            }
        },
        mobile: {
            setCurrentPanel: () => {
                let section = main.tabPanel.section
                switch (main.tabPanel.getCurrent()) {
                    case 1:
                        section.classList.add('bg-step-one')
                        break;
                    case 2:
                        section.classList.add('bg-step-two')
                        section.classList.remove('bg-step-one')
                        section.classList.remove('bg-step-three')
                        break;
                    case 3:
                        section.classList.add('bg-step-three')
                        section.classList.remove('bg-step-two')
                        section.classList.remove('bg-step-four')
                        break;
                    case 4:
                        section.classList.add('bg-step-four')
                        section.classList.remove('bg-step-three')
                        section.classList.remove('bg-step-five')
                        break;
                    case 5:
                        section.classList.add('bg-step-five')
                        section.classList.remove('bg-step-four')
                        section.classList.remove('bg-final')
                        break;
                    case 6:
                        section.classList.add('bg-step-five')
                        section.classList.remove('bg-step-four')
                        section.classList.remove('bg-final')
                        break;
                    // case 7:
                    //     section.classList.add('bg-final')
                    //     section.classList.remove('bg-step-six')
                    // break;
                }
            }
        }
    },
    elements: {
        header: '',
        nameObj: '',
        form: '',
        eventListener: () => {
            const nextBtn = main.buttons.next
            const prevBtn = main.buttons.prev

            if (main.tabPanel.getCurrent() === 1) {
                header.classList.remove('d-none')
            }
            
            if (main.tabPanel.getCurrent() === 2) {
                main.controller.client.getName()
            }

            if (main.step.getCurrent() < 2) {
                nextBtn.classList.add('d-none')
                prevBtn.classList.add('d-none')
            } else {
                nextBtn.classList.remove('d-none')
                prevBtn.classList.remove('d-none')
            }
            
            switch (main.step.getCurrent()) {
                case 4:
                case 6:
                case 10:
                    nextBtn.innerHTML = 'Concluir Etapa'
                    break;
                case 18:
                    nextBtn.innerHTML = 'Próximo'
                    break;
                case 20:
                        nextBtn.innerHTML = 'Enviar'
                        nextBtn.setAttribute('type', 'button')
                    break;
                case 21:
                    nextBtn.setAttribute('type', 'submit')
                    nextBtn.classList.add('d-none')
                    prevBtn.classList.add('d-none')
                    break;
                default:
                    nextBtn.innerHTML = 'Próximo'
                    nextBtn.setAttribute('type', 'button')
                    break;
            }

        },
        delete: (id) => {
            var elem = document.querySelector(`#${id}`).remove()
        },
        transportedGoods: {
            data: transported_goods_data,
            input: 1,
            div: '',
            button: '',
            first: '',
            all: '',
            autoload: () => {
                main.elements.transportedGoods.first.innerHTML += main.elements.transportedGoods.getOptionsHTML()
                main.elements.transportedGoods.input++
            },
            eventListener: () => {
                let all = document.querySelectorAll('.transported_goods_group')

                if (all.length === 0) {
                    main.elements.transportedGoods.div.innerHTML = main.elements.transportedGoods.getHtml()
                } else {
                    all[all.length - 1].insertAdjacentHTML('afterend', main.elements.transportedGoods.getHtml())
                }

            },
            getHtml: () => {
                let input = main.elements.transportedGoods.input++
                return  `
                <div id="transportedGoods${input}Div" class="transported_goods_group col-md-12 mb-2">
                    <div class="row">
                        <div class="col-md-8 pr-0">
                            <select name="mercadorias_transportadas[mercadoria]" id="transportedGoods${input}Select" class="form-control h-100" data-div="transportedGoods${input}Div">
                                <option selected disabled value="">
                                    Selecionar mercadoria
                                </option>
                                ${main.elements.transportedGoods.getOptionsHTML()}
                            </select>
                        </div>
                        <div class="col-md-2 col-mb-8 pr-0 mt-2">
                            <input type="text" name="mercadorias_transportadas[percent]" id="mercadorias_transportadas_percent_${input}"
                                class="form-control percent" data-parent="SELECT"  placeholder="%">
                        </div>
                        <div class="col-md-2 col-mb-4 mt-2">
                            <button id="btnDeleteStep3Input${input}" class="btn btn-danger w-100" data-type="delete" data-div="transportedGoods${input}Div">X</button>
                        </div>
                        <div class="col-md-12">
                            <small class="error-message text-danger"></small>
                        </div>
                    </div>
                </div>`
            },
            getOptionsHTML: () => {
                let html = ``
                
                let data = main.elements.transportedGoods.data
                for (let index = 0; index < data.length; index++) {
        
                    html += `<option value='${data[index]}' > ${data[index]} </option>`
                    
                }
        
                return html;
            },
            delete: () => {

            }
        },
        nationalInternationalTour: {
            input: 1,
            button: '',
            div: '',
            eventListener: () => {
                let all = document.querySelectorAll('.national_international_tour_group')

                if (all.length === 0) {
                    main.elements.nationalInternationalTour.div.innerHTML = main.elements.nationalInternationalTour.getHtml()
                } else {
                    all[all.length - 1].insertAdjacentHTML('afterend', main.elements.nationalInternationalTour.getHtml())
                }
            },
            getHtml: () => {
                let input = main.elements.nationalInternationalTour.input++
                return `
                <div class="col-md-12 px-0 national_international_tour_group" id="nationalInternationalTourFormInputGroup${input}Div" >
                    <hr>
                    <div class="row">
                        <div class="col-md-4 mb-2 pl-0" >
                            <label class="sr-only" for="inlineFormInput${input}GroupUsername"></label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text fnt-3">
                                        Origem
                                    </div>
                                </div>
                                <input type="text" name="national_international[origin]" class="form-control" id="inlineFormInput${input}GroupUsername">
                                <small class="text-danger"></small>
                            </div>
                        </div>

                        <div class="col-md-4 mb-2 pl-0">
                            <label class="sr-only" for="inlineFormInput${input}GroupUsername"></label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text fnt-3">
                                        Destino
                                    </div>
                                </div>
                                <input type="text" name="national_international[destiny]" class="form-control" id="inlineFormInput${input}GroupUsername">
                                <small class="text-danger"></small>
                            </div>
                        </div>

                        <div class="col-md-2 col-mb-9 mb-2 pl-0">
                            <input type="text" name="national_international[percent]" id="nationalInternationalTourPercent_${input}" class="form-control percent" placeholder="%" maxlength="7">
                            <small class="text-danger"></small>
                        </div>

                        <div class="col-md-2 col-mb-3 mb-2 pl-0">
                            <button class="btn btn-danger w-100" data-type="delete" data-div="nationalInternationalTourFormInputGroup${input}Div">X</button>
                        </div>
                    </div>
                </div>
                `
            }
        },
        monitoring: {
            // radio: document.querySelector("[name=''")
        },
    },
    validate: {
        messages: input_validation_messages,
        curretButton: undefined,
        setCurrentButton: (current) => {
            main.validate.curretButton = current
        },
        getCurrentButton: () => {
            return main.validate.curretButton
        },
        isEmpty : (str) => !str.trim().length,
        eventListener: (button) => {
            main.validate.setCurrentButton(button)

            let inputs = main.step.getCurrentObject().querySelectorAll('.form-control')

            var map = Array.prototype.map.call(inputs, ( input ) => {
                var button = main.validate.getCurrentButton()
                if (input) {
                    // Start but disabling continue button
                    button.setAttribute('disabled', true)
                    
                    // Validate on initial function fire
                    var valid = main.validate.setButtonPermissions(input, button)
    
                    // Validate on input
                    input.addEventListener('input', () => main.validate.setButtonPermissions(input, button))
                    // Validate if bluring from input
                    input.addEventListener('blur', () => main.validate.setButtonPermissions(input, button))
    
                    return valid    
                }
            });

            return map.every(main.validate.valid)
        },
        valid: (valid) => valid === true,
        setButtonPermissions: (input, button) => {
            let valid = false
            switch (input.nodeName || input.dataset.parent) {
                case "SELECT":
                    if (!main.validate.select(input)) {
                        valid = false
                    } else {
                        valid = true
                    }
                break
                default:
                    if(!main.validate.input(input)) {
                        button.setAttribute('disabled', true)
                        valid = false
                    } else {
                        if (input.datasetrequired && input.dataset.parent !== "SELECT" || !!input.nextElementSibling) {
                            input.nextElementSibling.innerHTML = ""
                        }
                        button.removeAttribute('disabled')
                        valid = true
                    }
                break
            }

            return valid
        },
        input: (input, button) => {
            if (!main.validate.cellphone(input)) {
                input.nextElementSibling.innerHTML = main.validate.messages.cellphone

                return false;
            }

            if (!main.validate.cnpj(input)) {
                input.nextElementSibling.innerHTML = main.validate.messages.cnpj

                return false
            }

            if (input.type == 'email' && !main.validate.email(input)) {
                input.nextElementSibling.innerHTML = main.validate.messages.email
    
                return false
            }
    
            if (!input.dataset.parent && input.dataset.required && !main.validate.required(input)) {
                input.nextElementSibling.innerHTML = main.validate.messages.required
    
                return false
            }

            return true
    
        },
        required: (input) => {
            if (main.validate.isEmpty(input.value)) {
                return false
            }

            return true
        },
        email: (input) => {
            var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if (input.value.match(validRegex)) {
                return true;
            }
            return false;
        },
        cellphone: (input) => {
            if (input.dataset.type !== undefined && input.value.length < input.min && input.dataset.type === 'cellphone') {
                return false
            }
            return true
        },
        cnpj: (input) => {

            if (input.dataset.type !== undefined && input.dataset.type === 'cnpj'){
                var cnpj = input.value.replace(/[^\d]+/g,'');
                
                if(cnpj == '') return false;
            
                if (cnpj.length != 14)
                    return false;
            
                // Elimina CNPJs invalidos conhecidos
                if (cnpj == "00000000000000" || 
                    cnpj == "11111111111111" || 
                    cnpj == "22222222222222" || 
                    cnpj == "33333333333333" || 
                    cnpj == "44444444444444" || 
                    cnpj == "55555555555555" || 
                    cnpj == "66666666666666" || 
                    cnpj == "77777777777777" || 
                    cnpj == "88888888888888" || 
                    cnpj == "99999999999999")
                    return false;
                    
                // Valida DVs
                var tamanho = cnpj.length - 2
                var numeros = cnpj.substring(0,tamanho);
                var digitos = cnpj.substring(tamanho);
                var soma = 0;
                var pos = tamanho - 7;
                for (i = tamanho; i >= 1; i--) {
                    soma += numeros.charAt(tamanho - i) * pos--;
                    if (pos < 2)
                    pos = 9;
                }
                var resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
                if (resultado != digitos.charAt(0))
                    return false;
                    
                tamanho = tamanho + 1;
                numeros = cnpj.substring(0,tamanho);
                soma = 0;
                pos = tamanho - 7;
                for (var i = tamanho; i >= 1; i--) {
                soma += numeros.charAt(tamanho - i) * pos--;
                if (pos < 2)
                        pos = 9;
                }
                resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
                if (resultado != digitos.charAt(1))
                    return false;
                    
            }
                return true;
            
        },
        select: (input) => {
            if (input.value === "") {
                var div = document.querySelector(`#${input.dataset.div}`)
                div.querySelector('.error-message').innerHTML = main.validate.messages.select
                return false
            }

            return true
        }
    },
    mask: {
        float: {
            to: (x) => {
                var value = +(x)
                return value
            }
        },
        enforceMinMax: {
            set: (el) => {
                if (el.value != "") {
                    if (parseInt(el.value) < parseInt(el.min)) {
                      el.value = el.min;
                    }
                    if (parseInt(el.value) > parseInt(el.max)) {
                      el.value = el.max;
                    }
                }
            }
        },
        percentage: {
            set:(id) => {
                main.mask.percentage.before()

                let input = $(`#${id}`);
                input.mask('##0.00', {reverse: true});
                input.bind("change keyup", function() {
                    main.mask.percentage.isBetween($(this));
                });
            },
            isBetween: (input) => {
                let myNumber = (input.val()) ? main.mask.float.to(input.val()) : 0;
                // (myNumber.isBetween(0, 100.00)) ? myNumber : input.val('100,00');
                if (myNumber.isBetween(0, 100.00)) {
                    myNumber
                } else if (myNumber > 100.00) {
                    input.val('100.00')
                } else {
                    input.val('')
                }
            },
            before: () => {
                if (typeof(Number.prototype.isBetween) === "undefined") {
                    Number.prototype.isBetween = function(min, max, notBoundaries) {
                            var between = false;
                            if (notBoundaries) {
                                if ((this < max) && (this > min)) between = true;
                            } else {
                                if ((this <= max) && (this >= min)) between = true;
                            }
                            return between;
                    }
                }

                Number.prototype.round = function(p) {
                    p = p || 10;
                    return parseFloat( this.toFixed(p) );
                };

                String.prototype.toString = (char) => {
                    console.log(this.valueOf())
                }
            }
        },
        money: {
            set: (id) => {
                let input = $(`#${id}`)
                input.mask('R$ #.000.000,00', {reverse: true})
            }
        }
    },
}

function move(targetButton, direct) {
    main.step.eventListener(targetButton, direct)
}

function load () {
    main.step.all = document.querySelectorAll('.step')
    
    main.elements.transportedGoods.div = document.querySelector('#transportedGoodsDiv')
    main.elements.transportedGoods.button = document.querySelector('#transportedGoodsAddButton')
    main.elements.transportedGoods.first = document.getElementById('transportedGoods1Select')

    main.elements.transportedGoods.autoload()

    main.buttons.next = document.querySelector('#next')
    main.buttons.prev = document.querySelector('#prev')

    main.controller.client.name = document.querySelector('#name')
    main.controller.client.display = document.querySelectorAll('.clientName')

    main.elements.nationalInternationalTour.button = document.querySelector('#nationalInternationalTourAddbutton')
    main.elements.nationalInternationalTour.div = document.querySelector('#nationalInternationalTourDiv')

    main.tabPanel.all = [
        document.querySelector('#tabPanelHome'),
        document.querySelector('#tabpanelStep1'),
        document.querySelector('#backgroundVideoStep2'),
        document.querySelector('#backgroundVideoStep3'),
        document.querySelector('#backgroundVideoStep4'),
        document.querySelector('#backgroundVideoStep5'),
        document.querySelector('#backgroundVideoStep6'),
    ]

    main.tabPanel.reverse = document.querySelectorAll('.background-video.reverse')
    main.tabPanel.section = document.querySelector('#tabpanelStep1')

    main.elements.header = document.querySelector('#header')
    main.elements.nameObj = document.querySelector('#name')
    main.elements.form = document.querySelector('#form')
    
}

window.onload = () => {
    load()

    main.elements.nationalInternationalTour.button.addEventListener('click', function () {
        main.elements.nationalInternationalTour.eventListener()
    })
    
    main.elements.transportedGoods.button.addEventListener('click', function () {
        main.elements.transportedGoods.eventListener()
    })
    
    document.body.addEventListener('click', function (e) {
        if (e.target.dataset.type !== undefined && e.target.dataset.type === "delete") {
            main.elements.delete(e.target.dataset.div)
        }
    
        if (e.target.className.includes('percent')) {
            main.mask.percentage.set(e.target.id)
        }
    
        // if (e.target.className.includes('money')) {
        //     main.mask.money.set(e.target.id)
        // }
    })

    document.body.addEventListener('focus', function (e) {
        if (e.target.className.includes('percent')) {
            main.mask.percentage.set(e.target.id)
        }
    
        // if (e.target.className.includes('money')) {
        //     main.mask.money.set(e.target.id)
        // }
    })
    
    document.body.addEventListener('keyup', function (e) {
      
        if (e.target.min !== undefined && e.target.max !== undefined) {
            main.mask.enforceMinMax.set(e.target)
        }
    
    })

    document.body.addEventListener('submit', function (e) {
        e.preventDefault()
        main.controller.mail.send(jQuery('#form').serializeArray())
    })
}
