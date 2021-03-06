
export class Footer {
  message: string;

  constructor() {
    this.message = `
En cumplimiento de lo establecido en la Ley Orgánica 15/1999 de 13 de diciembre
de Protección de Datos de Carácter Personal le informamos que los datos
personales que usted nos ha facilitado se encuentran incorporados y son
tratados en ficheros de MyCantabria Inmobiliaria con el fin de poder
realizar la gestión económica y contable de facturación de clientes y como
histórico de relaciones comerciales. Asimismo, le informamos de la
posibilidad de que ejerza los derechos de acceso, rectificación,
cancelación y oposición de sus datos de carácter personal en la dirección
de MyCantabria Inmobiliaria. En el caso de que no ejerza tales derechos
antes de haber transcurrido 30 días desde la recepción de este documento
entenderemos que nos otorga su consentimiento de forma explícita.
    `.trim();
  }

}

