<?php

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

/**
 * SendMail class
 * 
 * @author Perez <gabrieljesusperez@hotmail.com>
 */
class SendMail {
    
    /** @var PHPMailer **/
    protected $PHPMailer;

    /** @var string */
    protected $host;
    
    /** @var string **/
    protected $username;
    
    /** @var string **/
    protected $password;

    /** 
     * Sender configuration array = [ 'mail' => 'mail@example', 'name' => 'no-reply@example' ]
     * 
     * @var array 
     */
    protected $from;

    
    /**
     * Mailer construct
     * 
     */
    function __construct(string $host, string $username, string $password, array $from)
    {
        $this->PHPMailer = new PHPMailer(true);
        $this->username  = $username;
        $this->password  = $password;
        $this->host      = $host;
        $this->from      = $from;
    }
    
    /**
     * SendMessage Function
     * 
     * @param  array $data
     * @param  string $to
     * @return array|mixed
     */
    public function sendMessage(array $data, $to = [], bool $debug = false)
    {
        if (!$this->username) throw new Exception('username not informed');
        if (!$this->password) throw new Exception('password not informed');
        if (!$this->host) throw new Exception('host not informed');
        if (!$this->from) throw new Exception('from not informed');
        if (!$data['subject']) throw new Exception('subject not informed');
        if (!$data['body']) throw new Exception('body message not informed');
        if (!$this->from['mail']) throw new Exception('mail not informed');
        if (!isset($this->from['name'])) throw new Exception('name not informed');


        try {
            //Server settings
            $this->PHPMailer->SMTPDebug  = $debug ? SMTP::DEBUG_SERVER : SMTP::DEBUG_OFF;  //Enable verbose debug output
            $this->PHPMailer->isSMTP();                                                    //Send using SMTP
            $this->PHPMailer->Host       = $this->host;                                    //Set the SMTP server to send through
            $this->PHPMailer->SMTPAuth   = true;                                           //Enable SMTP authentication
            $this->PHPMailer->Username   = $this->username;                                //SMTP username
            $this->PHPMailer->Password   = $this->password;                                //SMTP password
            $this->PHPMailer->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;                    //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
            $this->PHPMailer->Port       = 465;                                            //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
            $this->PHPMailer->CharSet    = "UTF-8";        
            $this->PHPMailer->Encoding   = 'base64';
        
            //Recipients
            $this->PHPMailer->setFrom($this->from['mail'], $this->from['name']);
            $this->PHPMailer->addAddress($to[0]);     //Add a recipient
            
            if (count($to) > 1) {
                for ($i=1; $i < count($to); $i++) { 
                    $this->PHPMailer->addCC($to[$i]);     //Add a recipient
                }
            }
            
            //Content
            $this->PHPMailer->isHTML(true);                                  //Set email format to HTML
            $this->PHPMailer->Subject = $data['subject'];
            $this->PHPMailer->Body    = $data['body'];
            // $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
        
            $this->PHPMailer->send();
            
            return [
                'status' => 'success',
                'message' => 'Obrigado! <br> Em breve um especialista entrará em contato'
            ];
        } catch (Exception $e) {
            return [
                'status' => 'error',
                'message' => "Message could not be sent. Mailer Error: {$this->PHPMailer->ErrorInfo}"
            ];
        }
    }
}