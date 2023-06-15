### Envio de email via PHPMAILER

#### Configuração do remetente
- As configurações do remetente de envio do email são inseridas no instanciamento da classe SendMail como mostra o email abaixo
```
$mail = new SendMail(
            'host', 
            'username', 
            'password', 
            [
                'mail' => 'no-reply@example.com.br',
                'name' => '(optional) no-replay example'
            ]
        );
```

#### Criação do email
- Para o envio do email na chamada da função sendMessage passamos 3 parametros 'subject' e 'body' em um array e um ultimo parametro $from no qual é o destinatário do email
- Sendo
    - 'subject' -> Assunto
    - 'body' -> Mensagem (podendo conter tags html)

```
$response =  $mail->sendMessage([
        'subject' => "",
        'body'    => "<h2>Body Example</h2>
                    <p>Insert here your message</p>"
    ], 'from@example.com');
```
