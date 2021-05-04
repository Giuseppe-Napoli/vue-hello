const app = new Vue({
  el:'#app',
  data:{
    messaggio:'Questo è un H1',
    colore:'',
    immagine:'',
  },
  methods:{
    cambiaColore(color){
      this.colore = color;
    },
    cambiaImmagine(img){
      this.immagine = img;
    },
  
  }
})