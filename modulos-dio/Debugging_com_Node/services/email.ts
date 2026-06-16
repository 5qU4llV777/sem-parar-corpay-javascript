async function getBaseEmail(senderName: string): Promise<string> {
  let baseEmail = `Olá ${senderName}, gostaria de informar que o seu pedido foi recebido e está sendo processado. Entraremos em contato em breve com mais informações.`;
  
  baseEmail += "\n\nAtenciosamente,\nEquipe de Atendimento ao Cliente";

  return baseEmail;
}

export { getBaseEmail };