import transported_goods_data from './mercadorias_transportadas_data.json' assert { type: 'json' }

    const previousButton = document.querySelector('#prev')
    const addInputFormTab3 = document.querySelector('#addInputFormTab3')

    const next = document.querySelector('#next')

    const homeButton = document.querySelector('#btn-home')

    const submitButton = document.querySelector('#submit')
    const saveMail = document.querySelector('#savemail')
    // const tabTargets = document.querySelectorAll('.tab')
    const header = document.querySelector('#header')
    const divItem3Inputs = document.querySelector('#divItem3Inputs')

    const steps = document.querySelectorAll('.step')
    const bgPanelHome = document.querySelector('#tabPanelHome')
    const BgPanelStep1 = document.querySelector('#tabpanelStep1')
    const bgVideoStep2 = document.querySelector('#backgroundVideoStep2')
    const bgVideoStep3 = document.querySelector('#backgroundVideoStep3')
    const bgVideoStep4 = document.querySelector('#backgroundVideoStep4')
    const bgVideoStep5 = document.querySelector('#backgroundVideoStep5')
    const bgVideoFinal = document.querySelector('#backgroundVideoFinal')

    const selectTransportedGoods1 = document.querySelector('#transportedGoods1')

    const isEmpty = (str) => !str.trim().length
    let currentStep = 0
    let currentInputNumber = 1
    let inputNumber

    const clientName = '';

    const ApiUri = 'http://127.0.0.1:9000/api/lead';

    const transportedGoods = {
        transported_goods_data: transported_goods_data,
        inputNumber: 0,
        currentInputNumber: 0,
        selectHtml: "",
        setOptionData (element) {
            element.innerHTML = this.getTransportedGoodsOptionsHTML()
        },
        getTransportedGoodsOptionsHTML () {
            let html = ""
            for (let index = 0; index < transported_goods_data.length; index++) {
    
                html += `<option value='${this.transported_goods_data[index]}' > ${this.transported_goods_data[index]} </option>`
                
            }
    
            return html;
        },
        createSelectInput () {
            this.inputNumber = this.currentInputNumber++ 
    
                this.selectHtml += `
                <div id="transported_goods_${this.inputNumber}" class="transported_goods_group col-md-12 mb-2">
                    <div class="row">
                        <div class="col-md-8 pr-0">
                            <select name="mercadorias_transportadas_${this.inputNumber}" id="transported_goods_${this.inputNumber}" class="form-control h-100">
                                <option selected disabled>
                                    Selecionar mercadoria
                                </option>
                                ${this.getTransportedGoodsOptionsHTML()}
                            </select>
                        </div>
                        <div class="col-md-2 pr-0">
                            <input type="text" name="mercadorias_transportadas_percent_${this.inputNumber}" id="mercadorias_transportadas_percent_${this.inputNumber}"
                                class="form-control percent" placeholder="%">
                        </div>
                        <div class="col-md-2">
                            <button id="btnDeleteStep3Input${this.inputNumber}" class="btn btn-danger w-100" onclick="deleteInputItem(${this.inputNumber})">X</button>
                        </div>
                    </div>
                </div>
                `
        }
    }

    // Validate first input on load
    framesEvent(currentStep)
    transportedGoods.setOptionData(selectTransportedGoods1)


    // Home: Change Panels relative to current panel and account for button permissions
    if (homeButton) {
        homeButton.addEventListener('click', (event) => {
            buttonEventListener(event)
        })
    }

    // Next: Change UI relative to current step and account for button permissions
    if (next) {
        next.addEventListener('click', (event) => {
            buttonEventListener(event)
            // console.log('click')
            // if (validateEntry(next)) {   
            //     if (currentStep == 3) {
            //         panelsEventListener(event)
            //     }
            //     buttonEventListener(event, next)
            // }
        })
    }
        
    // Previous: Change UI relative to current step and account for button permissions
    if (previousButton) {
        previousButton.addEventListener('click', (event) => {
            buttonEventListener(event)
        })
    }
    
    if (saveMail) {
        saveMail.addEventListener('click', (event) => {
            // if (validateEntry(saveMail)) {   
                // let email = document.getElementById('email').value;
                // $.ajax({
                //     type: "POST",
                //     url: ApiUri,
                //     data: {
                //         origin: 'lp_step_questions',
                //         email: email
                //     },
                //     dataType: "json",
                //     done: function (result) {
                //         console.log({
                //             'aqui': 'done',
                //             result: result
                //         })
                //     }
                //   });

            // }
            buttonEventListener(event)
        })
    }

    if ( previousButton ) {
        previousButton.addEventListener('click', (e) => {
            e.preventDefault()

            // Hide current tab
            steps[currentStep].classList.remove('d-flex')
            steps[currentStep].classList.add('d-none')
            
            // Show previous tab
            steps[currentStep - 1].classList.remove('d-none')
            // steps[currentStep + 1].classList.add('d-flex')
            currentStep -= 1


            console.log('step: ' + currentStep)

        })
    }

    if (addInputFormTab3) {
        addInputFormTab3.addEventListener('click', (event) => {
            event.preventDefault()

            divItem3Inputs.innerHTML = transportedGoods.selectTransportedGoods1
            inputNumber = currentInputNumber = currentInputNumber +1

            divItem3Inputs.innerHTML = divItem3Inputs.innerHTML + `
            <div id="transported_goods_${inputNumber}" class="transported_goods_group col-md-12 mb-2">
                <div class="row">
                    <div class="col-md-8 pr-0">
                        <select name="mercadorias_transportadas_${inputNumber}" id="transported_goods_${inputNumber}" class="form-control h-100">
                            <option selected disabled>
                                Selecionar mercadoria
                            </option>
                            ${transportedGoods.getTransportedGoodsOptionsHTML()}
                        </select>
                    </div>
                    <div class="col-md-2 pr-0">
                        <input type="text" name="mercadorias_transportadas_percent_${inputNumber}" id="mercadorias_transportadas_percent_${inputNumber}"
                            class="form-control percent" placeholder="%">
                    </div>
                    <div class="col-md-2">
                        <button id="btnDeleteStep3Input${inputNumber}" class="btn btn-danger w-100" onclick="deleteInputItem(${inputNumber})">X</button>
                    </div>
                </div>
            </div>
            `
        })
    }

    function deleteInputItem (itemNumber) {
        var elem = document.getElementById('transported_goods_' + itemNumber).remove()
    }

    function buttonEventListener (e) {
        e.preventDefault()

        // Hide current tab
        steps[currentStep].classList.remove('d-flex')
        steps[currentStep].classList.add('d-none')
        
        // Show previous tab
        steps[currentStep + 1].classList.remove('d-none')

        currentStep += 1
        console.log('step: ' + currentStep)
        // getLog()
        panelsEventListener(currentStep)
        framesEvent(currentStep);
        buttonStyleEvent(currentStep)
    }

    let panelsEventListener = (currentStep) =>
    {
        let currentPanel = steps[currentStep].id
        let currentPane1l = currentPanel.split('_')[1]
        
        switch (parseInt(currentPane1l)) {
            case 1:
                console.log()
                bgPanelHome.classList.remove('d-flex')
                bgPanelHome.classList.add('d-none')
                BgPanelStep1.classList.add('d-flex')
                break;
            case 2:
                BgPanelStep1.classList.remove('bg-step-one')
                bgVideoStep2.classList.remove('d-none')
                break;
            case 3:
                bgVideoStep2.classList.add('d-none')
                bgVideoStep3.classList.remove('d-none')
                break;
            case 4:
                bgVideoStep3.classList.add('d-none')
                bgVideoStep4.classList.remove('d-none')
                break;
            case 5:
                bgVideoStep4.classList.add('d-none')
                bgVideoStep5.classList.remove('d-none')
                break;
            case 6:
                bgVideoStep5.classList.add('d-none')
                bgVideoFinal.classList.remove('d-none')
                break;
            default:
                break;
        }
    }
    
    function framesEvent (currentStep) {

        switch (currentStep) {
            case 0:
                previousButton.classList.add('d-none')
                header.classList.add('d-none')
                break
            default:
                header.classList.remove('d-none')
                header.classList.add('d-block')
                break;
        }
    }

    function buttonStyleEvent (currentStep) {
        // console.log('current step ' + currentStep)
        switch (currentStep) {
            case 1:
                header.classList.remove('d-none')
                // next.classList.add('btn-primary')
                next.innerHTML = 'Iniciar'
                break
            case 2:
                next.classList.remove('d-none')
                break
            default:
                next.innerHTML = 'Próximo'
                // nextButton.classList.remove('d-none')
                break
        }
    }

    // clientName = document.getElementById('name').value
    // setName(clientName)


    function updateStatusDisplay() {
        // If on the last step, hide the next button and show submit
        if (currentStep === tabTargets.length - 1) {
            nextButton.classList.add('hidden')
            previousButton.classList.remove('hidden')
            submitButton.classList.remove('hidden')
            validateEntry()

            // If it's the first step hide the previous button
        } else if (currentStep == 0) {
            nextButton.classList.remove('hidden')
            previousButton.classList.add('hidden')
            submitButton.classList.add('hidden')
            // In all other instances display both buttons
        } else {
            nextButton.classList.remove('hidden')
            previousButton.classList.remove('hidden')
            submitButton.classList.add('hidden')
        }
    }

    function validateEntry(button) {

        // return true;
        let input = steps[currentStep].querySelector('.form-control')
        let inputs = steps[currentStep].querySelectorAll('.form-control')
        
        if (input) {
            // Start but disabling continue button
            button.setAttribute('disabled', true)
            
            // Validate on initial function fire
            valid = setButtonPermissions(input, button)

            // Validate on input
            input.addEventListener('input', () => setButtonPermissions(input, button))
            // Validate if bluring from input
            input.addEventListener('blur', () => setButtonPermissions(input, button))

            return valid    
        }

        return false
    }

    function setButtonPermissions(input, button) {

        if (input.type == 'email' && !ValidateEmail(input)) {
            input.nextElementSibling.innerHTML = "Insira um Email válido"

            return false
        }

        if (isEmpty(input.value)) {
            input.nextElementSibling.innerHTML = 'Preencha este campo!'
            button.setAttribute('disabled', true)
            // nextButton1.setAttribute('disabled', true)
            // submitButton.setAttribute('disabled', true)

            return false
        } else {
            button.removeAttribute('disabled')
            // nextButton1.removeAttribute('disabled', true)
            // submitButton.removeAttribute('disabled')

            return true
        }

        return false
    }

    function ValidateEmail(input) {

        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      
        if (input.value.match(validRegex)) {
      
            return true;
      
        }

          return false;
    }

    function setName(name) {
        spanName = document.querySelectorAll('clientName')

        spanName.forEach(element => {
            element.innerHTML = name
        });
    }

    function getLog (button) {
        console.log({
            currentButton: button,

            steps:steps,
            currentStep: currentStep,
            activeStep: steps[currentStep],
        })
    }

    let setTransportedGoodsData = (element) => {
        
        for (let index = 0; index < transported_goods_data.length; index++) {

            element.innerHTML += `<option value='${transported_goods_data[index]}' > ${transported_goods_data[index]} </option>`
            
        }

    }

    let getTransportedGoodsOptionsHTML = () => {
        let html = ""
        for (let index = 0; index < transported_goods_data.length; index++) {

            html += `<option value='${transported_goods_data[index]}' > ${transported_goods_data[index]} </option>`
            
        }

        return html;
    }