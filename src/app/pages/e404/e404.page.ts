import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-e404',
  templateUrl: './e404.page.html',
  styleUrls: ['./e404.page.scss'],
})
export class E404Page implements OnInit {

  constructor(
    private afs: AngularFirestore
  ) { }

  ngOnInit() {

  }


  create() {
    this.afs.collection('articles').add({
      date: '2021-02-06 08:19:10',
      img: 'https://i.imgur.com/YVtTNt7.png',
      intro: 'Em 2009, foi campeão mundial juvenil de xadrez. Em agosto de 2016, foi ranqueado com o segundo maior rating da FIDE.',
      status: 'ativo',
      text: `
      <img src="https://i.imgur.com/YVtTNt7.png" alt="Foto de Maxime Vachier-Lagrave">

      <p><strong>Maxime Vachier-Lagrave</strong>, lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, officiis! Libero voluptatum omnis quidem tempora non.</p>

      <p>Maxime culpa explicabo deserunt minus, veritatis vero quam quae dicta modi. Libero, adipisci nostrum.</p>`,
      title: 'Maxime Vachier-Lagrave'
    })
  }

  update(id: string, data: any) {
    this.afs.collection('articles').doc(id).update(data);
  }

}
