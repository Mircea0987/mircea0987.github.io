import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-modal-for',
  templateUrl: './product-modal-for.component.html',
  styleUrls: ['./product-modal-for.component.css']
})
export class ProductModalForComponent implements OnInit {
  products: Product[] = [
    {
      title: 'IphoneX',
      category: 'Phone',
      company: 'Apple',
      deliveryCompany: 'Sameday',
      price: 5000,
      rate: 4.5,
      isInStock: false,
      descriptionDescription: 'Un telefon extra, de nota 20',
      description: `Ceramic Shield. Substantial mai rezistenta

      iPhone avea deja cea mai rezistenta sticla de smartphone. Asa ca pentru a creste dramatic rezistenta iPhone 12 Pro, a trebuit sa folosim un material complet nou.
      
       
      Cristale de ceramica la scara nanometrica
      
      Iti prezentam Ceramic Shield. Este fabricata prin introducerea in sticla a cristalelor nano-ceramice, care sunt mai dure decat majoritatea metalelor. Pare simplu, dar este incredibil de dificil, fiindca majoritatea materialelor ceramice nu sunt transparente. Prin controlarea tipului de cristale si a gradului de cristalinitate, am dezvoltat o formula exclusiva care maximizeaza rezistenta ceramicii, pastrandu-i, in acelasi timp, transparenta optica. Datorita acestei inovatii, Ceramic Shield a devenit optiunea ideala pentru ecran. Este o premiera pentru orice smartphone. Si e mai rezistenta decat sticla oricarui alt smartphone.
      
       
      Dublu proces de schimb ionic
      
      Duritatea e extraordinara, dar am vrut sa crestem si rezistenta la zgarieturi. Asa ca am aplicat procesul nostru de dublu schimb ionic utilizat pana acum pentru sticla de pe spate. Astfel, obtinem protectie impotriva loviturilor, zgarieturilor si uzurii zilnice.
      
       
      De 4 ori mai rezistenta la cadere
      
      Pe langa Ceramic Shield, mai exista un factor care contribuie la rezistenta suprafetei frontale. Alinierea perfecta a suprafetei frontale cu marginea telefonului, ceea ce il protejeaza si mai mult. In total, am cvadruplat rezistenta la cadere - cea mai mare imbunatatire de la an la an, adusa vreodata unei noi generatii de iPhone.`,
      dimensions: '	71.5 x 146.7 x 7.4 mm',
      material: 'Cel mai bun silicon',
      // url:'https://s13emagst.akamaized.net/products/33382/33381519/images/res_a40457d533d5f7a229cf370e39a691a2.jpg?width=450&height=450&hash=76A3F3CE2BFB77CAE80826C102A5F751'
    },
    
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
