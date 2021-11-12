import { Injectable } from '@angular/core';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  products: Product[] = [
    {
      id:1,
      title: 'Iphone0',
      category: 'Phone',
      company: 'Apple',
      deliveryCompany: 'Sameday',
      price: 5000,
      rate: 4.5,
      isInStock: false,
      descriptionDescription: `Telefon mobil Apple iPhone X, 64GB, Green`,
      description: `A14 Bionic depaseste cu mult orice alt cip de smartphone. Sistemul de camere Pro duce fotografia in mediile slab luminate la un nivel superior, cu un salt si mai senzational pe iPhone 12 Pro Max. Iar Ceramic Shield este de patru ori mai rezistenta la cadere. Prima impresie este excelenta. Stai sa vezi si restul. A14 Bionic este primul cip de 5 nanometri din industrie, cu componente avansate care se masoara efectiv in atomi. Avand cu 40% mai multi tranzistori, acestia maresc viteza si cresc eficienta pentru o autonomie excelenta a bateriei. Iar noul ISP ofera capacitatea pentru inregistrarea video in Dolby Vision - ceva imposibil pentru o camera de filmare profesionala. Oricare alt telefon nici nu intra in discutie.`,
      dimensions: '180 X 10 (mm)',
      material: 'Cel mai bun silicon',
      url: 'https://s13emagst.akamaized.net/products/33382/33381519/images/res_a40457d533d5f7a229cf370e39a691a2.jpg?width=450&height=450&hash=76A3F3CE2BFB77CAE80826C102A5F751',
    },
    {
      id:2,
      title: 'Iphone12Pro',
      category: 'Phone',
      company: '1',
      deliveryCompany: '2',
      price: 6000,
      rate: 4.5,
      isInStock: false,
      descriptionDescription: `Telefon mobil Apple iPhone 12 Pro Max, 128GB, 5G, Pacific Blue`,
      description: `Ceramic Shield. Substantial mai rezistenta
      iPhone avea deja cea mai rezistenta sticla de smartphone. Asa ca pentru a creste dramatic rezistenta iPhone 12 Pro, a trebuit sa folosim un material complet nou.
      Cristale de ceramica la scara nanometrica
      Iti prezentam Ceramic Shield. Este fabricata prin introducerea in sticla a cristalelor nano-ceramice, care sunt mai dure decat majoritatea metalelor. Pare simplu, dar este incredibil de dificil, fiindca majoritatea materialelor ceramice nu sunt transparente. Prin controlarea tipului de cristale si a gradului de cristalinitate, am dezvoltat o formula exclusiva care maximizeaza rezistenta ceramicii, pastrandu-i, in acelasi timp, transparenta optica. Datorita acestei inovatii, Ceramic Shield a devenit optiunea ideala pentru ecran. Este o premiera pentru orice smartphone. Si e mai rezistenta decat sticla oricarui alt smartphone.
      Dublu proces de schimb ionic 
      Duritatea e extraordinara, dar am vrut sa crestem si rezistenta la zgarieturi. Asa ca am aplicat procesul nostru de dublu schimb ionic utilizat pana acum pentru sticla de pe spate. Astfel, obtinem protectie impotriva loviturilor, zgarieturilor si uzurii zilnice.
      De 4 ori mai rezistenta la cadere
      Pe langa Ceramic Shield, mai exista un factor care contribuie la rezistenta suprafetei frontale. Alinierea perfecta a suprafetei frontale cu marginea telefonului, ceea ce il protejeaza si mai mult. In total, am cvadruplat rezistenta la cadere - cea mai mare imbunatatire de la an la an, adusa vreodata unei noi generatii de iPhone.`,
      dimensions: '180 X 20 (m)',
      material: 'Cel mai bun silicon',
      url: 'https://s13emagst.akamaized.net/products/33382/33381519/images/res_a40457d533d5f7a229cf370e39a691a2.jpg?width=450&height=450&hash=76A3F3CE2BFB77CAE80826C102A5F751',
    },
    {
      id:3,
      title: 'Iphone1',
      category: 'Phone',
      company: '3',
      deliveryCompany: '4',
      price: 6000,
      rate: 4.5,
      isInStock: false,
      descriptionDescription: `Telefon mobil Apple iPhone 12 Pro Max, 128GB, 5G, Pacific Blue`,
      description: `Ceramic Shield. Substantial mai rezistenta
      iPhone avea deja cea mai rezistenta sticla de smartphone. Asa ca pentru a creste dramatic rezistenta iPhone 12 Pro, a trebuit sa folosim un material complet nou.
      Cristale de ceramica la scara nanometrica
      Iti prezentam Ceramic Shield. Este fabricata prin introducerea in sticla a cristalelor nano-ceramice, care sunt mai dure decat majoritatea metalelor. Pare simplu, dar este incredibil de dificil, fiindca majoritatea materialelor ceramice nu sunt transparente. Prin controlarea tipului de cristale si a gradului de cristalinitate, am dezvoltat o formula exclusiva care maximizeaza rezistenta ceramicii, pastrandu-i, in acelasi timp, transparenta optica. Datorita acestei inovatii, Ceramic Shield a devenit optiunea ideala pentru ecran. Este o premiera pentru orice smartphone. Si e mai rezistenta decat sticla oricarui alt smartphone.
      Dublu proces de schimb ionic 
      Duritatea e extraordinara, dar am vrut sa crestem si rezistenta la zgarieturi. Asa ca am aplicat procesul nostru de dublu schimb ionic utilizat pana acum pentru sticla de pe spate. Astfel, obtinem protectie impotriva loviturilor, zgarieturilor si uzurii zilnice.
      De 4 ori mai rezistenta la cadere
      Pe langa Ceramic Shield, mai exista un factor care contribuie la rezistenta suprafetei frontale. Alinierea perfecta a suprafetei frontale cu marginea telefonului, ceea ce il protejeaza si mai mult. In total, am cvadruplat rezistenta la cadere - cea mai mare imbunatatire de la an la an, adusa vreodata unei noi generatii de iPhone.`,
      dimensions: '180 X 30 (m)',
      material: 'Cel mai bun silicon',
      url: 'https://s13emagst.akamaized.net/products/33382/33381519/images/res_a40457d533d5f7a229cf370e39a691a2.jpg?width=450&height=450&hash=76A3F3CE2BFB77CAE80826C102A5F751',
    },
    {
      id:4,
      title: 'Iphone2',
      category: 'Phone',
      company: '5',
      deliveryCompany: '6',
      price: 6000,
      rate: 4.5,
      isInStock: false,
      descriptionDescription: `Telefon mobil Apple iPhone 12 Pro Max, 128GB, 5G, Pacific Blue`,
      description: `Ceramic Shield. Substantial mai rezistenta
      iPhone avea deja cea mai rezistenta sticla de smartphone. Asa ca pentru a creste dramatic rezistenta iPhone 12 Pro, a trebuit sa folosim un material complet nou.
      Cristale de ceramica la scara nanometrica
      Iti prezentam Ceramic Shield. Este fabricata prin introducerea in sticla a cristalelor nano-ceramice, care sunt mai dure decat majoritatea metalelor. Pare simplu, dar este incredibil de dificil, fiindca majoritatea materialelor ceramice nu sunt transparente. Prin controlarea tipului de cristale si a gradului de cristalinitate, am dezvoltat o formula exclusiva care maximizeaza rezistenta ceramicii, pastrandu-i, in acelasi timp, transparenta optica. Datorita acestei inovatii, Ceramic Shield a devenit optiunea ideala pentru ecran. Este o premiera pentru orice smartphone. Si e mai rezistenta decat sticla oricarui alt smartphone.
      Dublu proces de schimb ionic 
      Duritatea e extraordinara, dar am vrut sa crestem si rezistenta la zgarieturi. Asa ca am aplicat procesul nostru de dublu schimb ionic utilizat pana acum pentru sticla de pe spate. Astfel, obtinem protectie impotriva loviturilor, zgarieturilor si uzurii zilnice.
      De 4 ori mai rezistenta la cadere
      Pe langa Ceramic Shield, mai exista un factor care contribuie la rezistenta suprafetei frontale. Alinierea perfecta a suprafetei frontale cu marginea telefonului, ceea ce il protejeaza si mai mult. In total, am cvadruplat rezistenta la cadere - cea mai mare imbunatatire de la an la an, adusa vreodata unei noi generatii de iPhone.`,
      dimensions: '180 X 40 (m)',
      material: 'Cel mai bun silicon',
      url: 'https://s13emagst.akamaized.net/products/33382/33381519/images/res_a40457d533d5f7a229cf370e39a691a2.jpg?width=450&height=450&hash=76A3F3CE2BFB77CAE80826C102A5F751',
    },
    {
      id:5,
      title: 'Iphone3',
      category: 'Phone',
      company: '7',
      deliveryCompany: '8',
      price: 6000,
      rate: 4.5,
      isInStock: false,
      descriptionDescription: `Telefon mobil Apple iPhone 12 Pro Max, 128GB, 5G, Pacific Blue`,
      description: `Ceramic Shield. Substantial mai rezistenta
      iPhone avea deja cea mai rezistenta sticla de smartphone. Asa ca pentru a creste dramatic rezistenta iPhone 12 Pro, a trebuit sa folosim un material complet nou.
      Cristale de ceramica la scara nanometrica
      Iti prezentam Ceramic Shield. Este fabricata prin introducerea in sticla a cristalelor nano-ceramice, care sunt mai dure decat majoritatea metalelor. Pare simplu, dar este incredibil de dificil, fiindca majoritatea materialelor ceramice nu sunt transparente. Prin controlarea tipului de cristale si a gradului de cristalinitate, am dezvoltat o formula exclusiva care maximizeaza rezistenta ceramicii, pastrandu-i, in acelasi timp, transparenta optica. Datorita acestei inovatii, Ceramic Shield a devenit optiunea ideala pentru ecran. Este o premiera pentru orice smartphone. Si e mai rezistenta decat sticla oricarui alt smartphone.
      Dublu proces de schimb ionic 
      Duritatea e extraordinara, dar am vrut sa crestem si rezistenta la zgarieturi. Asa ca am aplicat procesul nostru de dublu schimb ionic utilizat pana acum pentru sticla de pe spate. Astfel, obtinem protectie impotriva loviturilor, zgarieturilor si uzurii zilnice.
      De 4 ori mai rezistenta la cadere
      Pe langa Ceramic Shield, mai exista un factor care contribuie la rezistenta suprafetei frontale. Alinierea perfecta a suprafetei frontale cu marginea telefonului, ceea ce il protejeaza si mai mult. In total, am cvadruplat rezistenta la cadere - cea mai mare imbunatatire de la an la an, adusa vreodata unei noi generatii de iPhone.`,
      dimensions: '180 X 50 (m)',
      material: 'Cel mai bun silicon',
      url: 'https://s13emagst.akamaized.net/products/33382/33381519/images/res_a40457d533d5f7a229cf370e39a691a2.jpg?width=450&height=450&hash=76A3F3CE2BFB77CAE80826C102A5F751',
    },
    {
      id:6,
      title: 'Iphone3',
      category: 'Phone',
      company: '7',
      deliveryCompany: '8',
      price: 6000,
      rate: 4.5,
      isInStock: false,
      descriptionDescription: `Telefon mobil Apple iPhone 12 Pro Max, 128GB, 5G, Pacific Blue`,
      description: `Ceramic Shield. Substantial mai rezistenta
      iPhone avea deja cea mai rezistenta sticla de smartphone. Asa ca pentru a creste dramatic rezistenta iPhone 12 Pro, a trebuit sa folosim un material complet nou.
      Cristale de ceramica la scara nanometrica
      Iti prezentam Ceramic Shield. Este fabricata prin introducerea in sticla a cristalelor nano-ceramice, care sunt mai dure decat majoritatea metalelor. Pare simplu, dar este incredibil de dificil, fiindca majoritatea materialelor ceramice nu sunt transparente. Prin controlarea tipului de cristale si a gradului de cristalinitate, am dezvoltat o formula exclusiva care maximizeaza rezistenta ceramicii, pastrandu-i, in acelasi timp, transparenta optica. Datorita acestei inovatii, Ceramic Shield a devenit optiunea ideala pentru ecran. Este o premiera pentru orice smartphone. Si e mai rezistenta decat sticla oricarui alt smartphone.
      Dublu proces de schimb ionic 
      Duritatea e extraordinara, dar am vrut sa crestem si rezistenta la zgarieturi. Asa ca am aplicat procesul nostru de dublu schimb ionic utilizat pana acum pentru sticla de pe spate. Astfel, obtinem protectie impotriva loviturilor, zgarieturilor si uzurii zilnice.
      De 4 ori mai rezistenta la cadere
      Pe langa Ceramic Shield, mai exista un factor care contribuie la rezistenta suprafetei frontale. Alinierea perfecta a suprafetei frontale cu marginea telefonului, ceea ce il protejeaza si mai mult. In total, am cvadruplat rezistenta la cadere - cea mai mare imbunatatire de la an la an, adusa vreodata unei noi generatii de iPhone.`,
      dimensions: '180 X 50 (m)',
      material: 'Cel mai bun silicon',
      url: 'https://s13emagst.akamaized.net/products/33382/33381519/images/res_a40457d533d5f7a229cf370e39a691a2.jpg?width=450&height=450&hash=76A3F3CE2BFB77CAE80826C102A5F751',
    },
  ];
  constructor() {}
}
