import { Component, OnInit, Input } from '@angular/core';
import { productDescription } from 'src/product-description';
import { productModal } from 'src/product-modal';
import { Y } from '../y';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css'],
})
export class ProductModalComponent implements OnInit {
  constructor() {}
  @Input()
  productModal: productModal[] = [
    {
      description: `Este anul 1939. Germania nazista.
      Tara isi tine rasuflarea. Moartea nu a avut niciodata mai mult de lucru, si va deveni chiar mai ocupata. Liesel Meminger si fratele ei mai mic sunt dusi de catre mama lor sa locuiasca cu o familie sociala in afara orasului München. Tatal lui Liesel a fost dus departe sub soapta unui singur cuvant nefamiliar - Kommunist -, iar Liesel vede in ochii mamei sale teama unui destin similar.
      
      Pe parcursul calatoriei, Moartea ii face o vizita baietelului si o observa pe Liesel. Va fi prima dintre multe intalniri apropiate. Langa mormantul fratelui ei, viata lui Liesel se schimba atunci cand ea ridica un singur obiect, ascuns partial in zapada. Este Manualul Groparului, lasat acolo din greseala, si este prima ei carte furata. Astfel incepe o poveste despre dragostea de carti si de cuvinte, pe masura ce Liesel invata sa citeasca cu ajutorul tatalui ei adoptiv, care canta la acordeon. In curand, va fura carti de la incendierile de carti organizate de nazisti, din biblioteca sotiei primarului, si de oriunde le mai putea gasi..
      `,
      dimensions: `130 x 200(mm)`,
      material: 'Hartie',
    },
  ];
  productBox: Y[] = [
    {
      company: 'Madonna',
      delivery: 'SameDay',
      inStock: true,
    },
  ];
  ngOnInit(): void {}
}
