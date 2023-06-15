<?php

// require_once 'config/cors.php';
require_once 'SendMail.php';
require_once 'config/recaptchalib.php';

header("Access-Control-Allow-Origin: *");
header("Content-Type: text/plain");
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if (empty($_POST)) {
    echo json_encode('Invalid request');
    exit;
}

try {
    $mail = new \SendMail(
        'mail.allcorseguros.com', 
        'noreply@allcorseguros.com',
        '&HCMUtx!WA;q', 
        [
            'mail' => 'noreply@allcorseguros.com', 
            'name' => 'No-reply Allcor Seguros'
        ]
    );
     
    $checkOcdi = (isset($_POST['coberturas_adicionais_e_particulares_ocdi'])) ? 'sim' : 'não';
    $checkComplementarFluvial = (isset($_POST['coberturas_adicionais_e_particulares_complementar_fluvial'])) ? 'sim' : 'não';
    $checkImpostosSuspensos = (isset($_POST['coberturas_adicionais_e_particulares_impostos_suspensos'])) ? 'sim' : 'não';
    $checkAvarias = (isset($_POST['coberturas_adicionais_e_particulares_avarias'])) ? 'sim' : 'não';
    $checkLimpezaPista = (isset($_POST['coberturas_adicionais_e_particulares_limpeza_pista'])) ? 'sim' : 'não';
    $checkContainers = (isset($_POST['coberturas_adicionais_e_particulares_containers'])) ? 'sim' : 'não';

    $mercadorias  = '';
    for ($i=0; $i < count($_POST['mercadorias_transportadas']['mercadoria']); $i++) { 
        $mercadorias = $mercadorias . "<p> {$_POST['mercadorias_transportadas']['mercadoria'][$i]} / {$_POST['mercadorias_transportadas']['percent'][$i]} %</p>";
    }

    $viagens = '';
    for ($x=0; $x < count($_POST['national_international']['origin']); $x++) { 
        $viagens = $viagens . "<p>Origem: {$_POST['national_international']['origin'][$x]} | Destino: {$_POST['national_international']['destiny'][$x]} | {$_POST['national_international']['percent'][$x]} % </p>";
    }
    

    /**
     * Insira o assunto e o corpo do email 
     * (pode ser inserido html)
     */
    $response =  $mail->sendMessage([
        'subject' => "Novo Contato",
        'body'    => "
            <h3>Dados: </h3>
            <p>Nome: {$_POST['name']}</p>
            <p>Email: {$_POST['email']}</p>
            <p>WhatsApp: {$_POST['whatsapp']}</p>
            <hr>
            <h3>Dados da Empresa</h3>
            <p>Nome Comercial: {$_POST['commercial_name']}</p>
            <p>CNPJ: {$_POST['cnpj']}</p>
            <p>Telefone Fixo: {$_POST['fone_fixo']}</p>
            <hr>
            <h3>Mercadorias Transportadas</h3>
            <p>Mercadorias:</p>
            {$mercadorias}
            <p>Outros: {$_POST['mercadorias_transportadas_outros']}</p>
            <hr>
            <h3>Sua Frota</h3>
            <p>Caminhões: {$_POST['frota_caminhoes_qnt']}</p>
            <p>Rebocadores: {$_POST['frota_rebocadores_qnt']}</p>
            <p>Reboques: {$_POST['frota_reboques_qnt']}</p>
            <p>Motos: {$_POST['frota_motos_qnt']}</p>
            <p>Utilitários: {$_POST['frota_utilitarios_qnt']}</p>
            <p>Automóveis: {$_POST['frota_automoveis_qnt']}</p>
            <hr>
            <h3>Como são suas viagens</h3>
            <p>Viagens: {$_POST['frota_viagens_qnt']}</p>
            <p>Frota Propria: {$_POST['frota_propria_percent']} % </p>
            <p>Agregados: {$_POST['agregados_percent']} % </p>
            <p>Carreteiros: {$_POST['carreteiros_percent']} % </p>
            <hr>
            <h3>Percursos Nacionais e Internacionais</h3>
            {$viagens}
            <hr>
            <h3>Seguro Próprio de Isenção</h3>
            <p>Embarcador: {$_POST['seguro_proprio_isencao_embarcador']}</p>
            <p>Mercadoria: {$_POST['seguro_proprio_isencao_mercadoria']}</p>
            <p>Ramo: {$_POST['seguro_proprio_isencao_ramo']}</p>
            <hr>
            <h3>Seguro Atual</h3>
            <p>CIA: {$_POST['seguro_atual_cia']}</p>
            <p>Corretor: {$_POST['seguro_atual_corretor']}</p>
            <p>Vencimento: {$_POST['seguro_atual_vencimento']}</p>
            <hr>
            <h3>RCTR-C</h3>
            <p>Valor médio transportado por viagem: {$_POST['rctrc_valor_medio_transportado_por_viagem']}</p>
            <p>Valor médio transportado por mês: {$_POST['rctrc_valor_mercadoria_por_mes']}</p>
            <p>Valor pago no seguro por mês: {$_POST['rctrc_valor_pago_no_seguro_por_mes']}</p>
            <p>Limite máximo de garantia: {$_POST['rctrc_lmg']}</p>
            <hr>
            <h3>RCF-DF</h3>
            <p>Valor médio transportado por viagem: {$_POST['rcfdf_valor_medio_transportado_por_viagem']}</p>
            <p>Valor médio transportado por mês: {$_POST['rcfdf_valor_mercadoria_por_mes']}</p>
            <p>Valor pago no seguro por mês: {$_POST['rcfdf_valor_pago_no_seguro_por_mes']}</p>
            <p>Limite máximo de garantia: {$_POST['rcfdf_lmg']}</p>
            <hr>
            <h3>Coberturas adicionais e particulares</h3>
            <p>OCDI: $checkOcdi </p>
            <p>Complementar fluvial: $checkComplementarFluvial</p>
            <p>Impostos suspensos: $checkImpostosSuspensos</p>
            <p>Avarias: $checkAvarias</p>
            <p>Limpeza de pista: $checkLimpezaPista</p>
            <p>Containers: $checkContainers </p>
            <p>Outros: {$_POST['coberturas_adicionais_e_particulares_outros']}</p>
            <hr>
            <h3>Sinistros</h3>
            <p>Houve sinistros?: {$_POST['houvesinistros']}</p>
            <p>Quantidade: {$_POST['quantidade_sinistros']}</p>
            <p>Valor total: {$_POST['sinistros_valor_total']}</p>
            <hr>
            <h3>Monitoramento</h3>
            <p>Monitoramento: {$_POST['monitoramento']}</p>
            <p>Empresa: {$_POST['cadastro_monitoramento_empresa']}</p>
            <hr>
       
            <h3>Escolta</h3>
            <p>Escolta: {$_POST['escolta']}</p>
            <p>Empresa: {$_POST['cadastro_escolta_empresa']}</p>
            <hr>
            <h3>Cadastro / Consulta motorista</h3>
            <p>Cadastro / consulta motorista: {$_POST['cadastro_consulta_motorista']}</p>
            <p>Empresa: {$_POST['cadastro_consulta_motorista_empresa']}</p>

        "
    ], ['bm977753@gmail.com'] , false);

    //comercial@allcorseguros.com.br', 'leandro@allcorseguros.com.br
    
    // $response = 'success';
    //Alteramos o cabeçalho para que o retorno seja do tipo JSON
    echo json_encode($response);
} catch (\Exception $e) {
    echo json_encode([$e->getMessage(), $_POST]);
}
