const manga = [
            {nom : 'One Piece', auteur :'Eichiro Oda',Type:'Shonen', Theme :'Aventure, Fantastique', state :'En cours', Nombre :95, ventes : 450,Resume :"https://fr.wikipedia.org/wiki/One_Piece"},
            {nom : 'Dragon Ball', auteur :'Akira Toriyama',Type:'Shonen', Theme :'Aventure, Arts Martiaux', state :'Terminée', Nombre :42, ventes : 250,Resume :"https://fr.wikipedia.org/wiki/Dragon_Ball"},
            {nom : 'Naruto', auteur :'Masashi kishimoto',Type:'Shonen', Theme :'Aventure, Fantastique', state :'Terminée', Nombre :72, ventes : 235,Resume :"https://fr.wikipedia.org/wiki/Naruto"},
            {nom :'Détective Conan', auteur :'Gosho Aoyama',Type :'Shonen',Theme:'Thriller',state:'En cours',Nombre:95,ventes:230,Resume:"https://fr.wikipedia.org/wiki/D%C3%A9tective_Conan"},
            {nom :'Golgo 13', auteur :'Takao Saito',Type :'Seinen',Theme:'Thriller',state:'En cours',Nombre:191,ventes:200,Resume:"https://fr.wikipedia.org/wiki/Golgo_13"},
            {nom :'Kochira Katsushika-ku Kameari kōen-mae hashutsujo', auteur :'Osamu Akimoto',Type :'Shonen',Theme:'',state:'Terminée',Nombre:200,ventes:200,Resume:"https://fr.wikipedia.org/wiki/Kochira_Katsushika-ku_Kameari_k%C5%8Den-mae_hashutsujo"},
            {nom :'Pocket Monsters Special', auteur :'Hidenori Kusaka',Type :'Shonen',Theme:'Aventure, Fantastique',state:'En cours',Nombre:53,ventes:200,Resume:"https://fr.wikipedia.org/wiki/Pocket_Monsters_Special"},
            {nom :'Oishinbo', auteur :'Tetsu Kariya et Akira Hanasaki',Type :'Seinen',Theme:'',state:'En cours',Nombre:111,ventes:130,Resume:"https://fr.wikipedia.org/wiki/Oishinbo"},
            {nom :'Slam Dunk', auteur :'Takehiko Inoue',Type :'Shonen',Theme:'Sport',state:'Terminée',Nombre:31,ventes:120,Resume:"https://fr.wikipedia.org/wiki/Slam_Dunk"},
            {nom :'Bleach', auteur :'Tite Kubo',Type :'Shonen',Theme:'Aventure, Fantastique',state:'Terminée',Nombre:74,ventes:120,Resume:"https://fr.wikipedia.org/wiki/Bleach_(manga)"},
            {nom :"JoJo's Bizarre Adventure", auteur :'Hirohiko Araki',Type :'Shonen',Theme:'Aventure, Fantastique',state:'En cours',Nombre:120,ventes:100,Resume:"https://fr.wikipedia.org/wiki/JoJo%27s_Bizarre_Adventure"},
            {nom :'Astro Boy', auteur :'Osamu Tezuka',Type :'Shonen',Theme:'Science-fiction, Aventure',state:'Terminée',Nombre:23,ventes:100,Resume:"https://fr.wikipedia.org/wiki/Astro_Boy"},
            {nom :'Doraemon ', auteur :'Fujiko Fujio',Type :'Kodomo',Theme:'Science-fiction',state:'Terminée',Nombre:45,ventes:100,Resume:"https://fr.wikipedia.org/wiki/Doraemon"},
            {nom :'Ken le Survivant ', auteur :'Buronson et Tetsuo Hara',Type :'Shonen',Theme:'',state:'Terminée',Nombre:27,ventes:100,Resume:"https://fr.wikipedia.org/wiki/Ken_le_Survivant"},
            {nom :'Touch', auteur :'Mitsuru Adachi',Type :'Shonen',Theme:'',state:'',Nombre:26,ventes:100,Resume:"https://fr.wikipedia.org/wiki/Touch_(manga)"},
            {nom :'Ippo', auteur :'George Morikawa',Type :'Shonen',Theme:'Sport, Arts Martiaux',state:'En cours',Nombre:116,ventes:94,Resume:""},
            {nom :'Les Enquêtes de Kindaichi', auteur :'Yōzaburō Kanari, Seimaru Amagi et Fumiya Satō',Type :'Shonen',Theme:'',state:'En cours',Nombre:20,ventes:90,Resume:""},
            {nom :"L'Attaque des Titans ", auteur :'Hajime Isayama  ',Type :'Shonen',Theme:'Aventure, Fantastique',state:'En cours',Nombre:26,ventes:86,Resume:""},
            {nom :'Sazae-san', auteur :'Machiko Hasegawa',Type :'Seinen',Theme:'',state:'Terminée',Nombre:45,ventes:86,Resume:""},
            {nom :"Captain Tsubasa", auteur :"Yōichi Takahashi",    Type:"Shonen", Theme:"Sport", state:"Terminée", Nombre:37, ventes:82, Resume:""},
            {nom :"Vagabond", auteur :"Takehiko Inoue", Type:"Seinen", Theme :"Arts Martiaux, Historique", state:"En cours", Nombre:37, ventes: 82, Resume :""},
            {nom :"Kinnikuman", auteur:"Yudetamago", Type:"Shonen", Theme:"", state:"Terminée", Nombre:56, Vente:70, Resume:""},
            {nom :"Kenshin le vagabond", auteur :"obuhiro Watsuki", Type:"Shonen", Theme:"Arts Martiaux, Historique", state:"Terminée", Nombre:28, ventes:70, Resume:""},
            {nom :"Sangokushi", auteur:"Mitsuteru Yokoyama", Type:"Shonen", Theme:"", state:"Terminée", Nombre:60,ventes:70, Resume:""},
            {nom :"Hunter × Hunter", auteur :"Yoshihiro Togashi",   Type:"Shonen", Theme:"Aventure, Fantastique", state:"En cours", Nombre:35, ventes: 66, Resume:""}, 
            {nom :"Fairy Tail", auteur :"Hiro Mashima",Type:"Shonen", Theme:"Aventure, Fantastique", state:"Terminée", Nombre:63, ventes:64, Resume:""}, 
            {nom :"Fullmetal Alchemist", auteur :"Hiromu Arakawa",Type:"Shonen", Theme:"Aventure, Fantastique", state:"Terminée", Nombre:27, ventes:64 , Resume:""},
            {nom :"Hana yori dango", auteur :"Yoko Kamio",  Type:"Shojo", Theme:"", state:"Terminée", Nombre:37, ventes:61 , Resume:""},
            {nom :"Baki the Grappler", auteur :"    Keisuke Itagaki", Type:"Shonen", Theme:"Arts Martiaux", state:"En cours", Nombre:123, ventes:60, Resume:""},
            {nom :"Racaille Blues", auteur :"Masanori Morita",Type:"Shonen", Theme:"", state:"Terminée", Nombre:42, ventes:60 , Resume:""},
            {nom :"Aoki densetsu shoot!", auteur :"Tsukasa Ooshima",    Type:"Shonen", Theme:"", state:"Terminée", Nombre:33, ventes:60, Resume:""}, 
            {nom :"Bad Boys", auteur :"Hiroshi Tanaka" ,Type:"Shonen", Theme:"", state:"Terminée", Nombre:22, ventes:55, Resume:""}, 
            {nom :"H2", auteur :"Mitsuru Adachi",Type:"Shonen", Theme:"", state:"Terminée", Nombre:34, ventes:55 , Resume:""},
            {nom :"Major", auteur :"Takuya Mitsuda",    Type:"Shonen", Theme:"", state:"Terminée", Nombre:78, ventes:53, Resume:""}, 
            {nom :"Minami no Teiō", auteur :"Dai Tennōji et Rikiya Gō", Type:"Shonen", Theme:"", state:"Terminée", Nombre:146, ventes:53, Resume:""},
            {nom :"Ranma ½", auteur :"Rumiko Takahashi",Type:"Shonen", Theme:"", state:"Terminée", Nombre:38, ventes:53, Resume:""}, 
            {nom :"Prince du tennis", auteur :"Takeshi Konomi", Type:"Shonen", Theme:"Sport", state:"Terminée", Nombre:42, ventes:51, Resume:""}, 
            {nom :"Dragon Quest : La Quête de Daï", auteur :"Riku Sanjo, Yuji Horii et Koji Inada", Type:"Shonen", Theme:"Aventure, Fantastique", state:"Terminée", Nombre:37, ventes:50 , Resume:""},
            {nom :"Gintama", auteur :"Hideaki Sorachi", Type:"Shonen", Theme:"Aventure, Science-fiction", state:"En cours", Nombre:74, ventes:50,Resume:""}, 
            {nom :"Glass Mask ", auteur:"Suzue Miuchi", Type:"Shojo",Theme:"",state:"En cours", Nombre:49, ventes:50 , Resume:""}, 
            {nom :"Great Teacher Onizuka", auteur :" Toru Fujisawa",Type:"Shonen", Theme:"Aventure", state:"Terminée", Nombre:25, ventes:50, Resume:""},
            {nom :"Rookies", auteur :"Masanori Morita", Type:"Shonen", Theme:"", state:"Terminée", Nombre:24, ventes:50 , Resume:""},
            {nom :"YuYu Hakusho", auteur :"Yoshihiro Togashi",Type:"Shonen", Theme:"Aventure, Fantastique", state:"Terminée", Nombre:19,ventes:50, Resume:""}, 
            {nom :"Dokaben Shinji" , auteur:"Mizushima",Type:"Shonen", Theme:"", state:"Terminée", Nombre:48    ,ventes:48 , Resume :""},
            {nom :"Dokaben Shinji" , auteur:"Mizushima",Type:"Shonen", Theme:"", state:"Terminée", Nombre:48    ,ventes:48 , Resume :""},
            {nom :"Initial D" , auteur:"Shuichi Shigeno",Type:"Seinen", Theme:"Sport",state:"Terminée", Nombre:48,ventes:48 , Resume :""},
            {nom :"Crows", auteur:"Hiroshi Takahashi",Type:"",Type:"Shonen", Theme:"", state:"Terminée", Nombre: 26 ,ventes:46 , Resume :""},
            {nom :"Inuyasha"    , auteur:"Rumiko Takahashi  ",Type:"Shonen", Theme:"Aventure, Fantastique", state:"Terminée", Nombre: 56 ,ventes:45, Resume :""}, 
            {nom :"Black Jack", auteur:"Osamu Tezuka    ",Type:"Shonen", Theme:"", state:"Terminée", Nombre: 17 ,ventes:45 , Resume :""},
            {nom :"Shizukanaru Don – Yakuza Side Story", auteur:"Tatsuo nitta Jitsugyo no nihon Sha",Type:"Seinen", Theme:"",state:"Terminée", Nombre:  108 ,ventes:44 , Resume :""},
            {nom :"nana"    , auteur:"Ai Yazawa", Type:"Shojo", Theme:"Romance", state:"En cours",  Nombre :21 ,ventes:43 , Resume :""},
            {nom :"Crayon Shin-chan", auteur:"Yoshito Usui Futabasha    ",Type:"Seinen", Theme:"",state:"Terminée", Nombre: 50, ventes:43 , Resume :""},
            {nom :"Be-Bop High School", auteur:"Kazuhiro Kiuchi ",Type:"Seinen", Theme:"",state:"Terminée", Nombre: 48  ,ventes:40 , Resume :""},
            {nom :"City Hunter", auteur:"Tsukasa Hojo",Type:"Shonen", Theme:"Thriller", state:"Terminée", Nombre: 35    ,ventes:40, Resume :""}, 
            {nom :"Kachō Kōsaku Shima", auteur:"Kenshi Hirokane",Type:"Seinen", Theme:"",state:"En cours", Nombre:83    ,ventes:40 , Resume :""},
            {nom :"Cobra", auteur:"Buichi Terasawa",Type:"Shonen", Theme:"", state:"Terminée", Nombre: 18   ,ventes:40 , Resume :""},
            {nom :"Kyō Kara Ore Wa!!", auteur:"Hiroyuki nishimori",Type:"Shonen", Theme:"", state:"Terminée", Nombre: 38    ,ventes:40 , Resume :""},
            {nom :"Paul le pêcheur", auteur:"Takao Yaguchi",Type:"Shonen", Theme:"Sport", state:"Terminée", Nombre: 65,ventes:40 , Resume :""},
            {nom :"Berserk", auteur:"Kentaro Miura Hakusensha",Type:"Seinen", Theme:"Fantastique, horreur",state:"En cours", Nombre:    39, ventes:40, Resume :""},
            {nom :"Yu-Gi-Oh!", auteur:"Kazuki Takahashi", Type:"Shonen", Theme:"Aventure, Fantastique", state:"Terminée", Nombre: 38 ,ventes:40, Resume :""},
            {nom :"nodame Cantabile"    , auteur:"Tomoko ninomiya", Type :"Seinen", Theme:"Romance", state:"", Nombre: 23   ,ventes:37, Resume :""},
            {nom :"20th Century Boys"   , auteur:"naoki Urasawa ",Type:"Seinen", Theme:"",state:"Terminée", Nombre: 22  ,ventes:36, Resume :""}, 
            {nom :"Cooking Papa"    , auteur:"Tochi Ueyama  ",Type:"Seinen", Theme:"Sport",state:"En cours", Nombre: 132, ventes:36, Resume :""}, 
            {nom :"Crest of the Royal Family", auteur:"Chieko Hosokawa", Type:"Shojo", Theme:"Romance", state:"en cours",Nombre:59 ,ventes:36, Resume :""},
            {nom :"Dr. Slump", auteur:"Akira Toriyama",Type:"Shonen", Theme:"", state:"Terminée", Nombre: 18    ,ventes:35, Resume :""}, 
            {nom :"Kingdom" , auteur:"Yasuhisa Hara ",Type:"Seinen", Theme:"Aventure, Historique",state:"Terminée", Nombre: 46,ventes:35, Resume :""}, 
            {nom :"Sailor Moon", auteur:"naoko Takeuchi", Type:"Shojo", Theme:"Fantastique, Aventure",state:"Terminée", Nombre:18,ventes:35, Resume :""},
            {nom :"Tokyo Ghoul", auteur:"Sui Ishida ",Type:"Seinen", Theme:"horreur, Fantastique, Aventure",state:"Terminée", Nombre:24 ,ventes:34, Resume :""},
            {nom :"Saint Seiya" , auteur:"Masami Kurumada",Type:"Shonen", Theme:"Aventure, Science-fiction", state:"Terminée", Nombre: 28    ,ventes:34, Resume :""},
            {nom :"3×3 Eyes"    , auteur:"Yuzo Takada",Type:"Seinen", Theme:"",state:"Terminée", Nombre:40  ,ventes:33, Resume :""},
            {nom :"Chibi Maruko-chan", auteur:"Momoko Sakura", Type:"Shojo", Theme:"",state:"Terminée", Nombre:16, ventes:32, Resume :""},
            {nom :"Bastard!!", auteur:"Kazushi Hagiwara",Type:"Seinen", Theme:"",state:"En cours", Nombre:  27,ventes:30, Resume :""}, 
            {nom :"Chameleon", auteur:"Atsushi Kase",Type:"Shonen", Theme:"", state:"Terminée", Nombre: 47  ,ventes:30 , Resume :""},
            {nom :"Death note", auteur:"Tsugumi Ohba et Takeshi Obata",Type:"Shonen", Theme:"Thriller", state:"Terminée", Nombre: 12    ,ventes:30, Resume :""}, 
            {nom :"Gaki Deka", auteur:"Tatsuhiko Yamagami",Type:"Shonen", Theme:"", state:"Terminée", Nombre: 26    ,ventes:30, Resume :""},
            {nom :"Kié la petite peste", auteur:"Etsumi Haruki Futabasha",Type:"Seinen", Theme:"",state:"Terminée", Nombre: 67  ,ventes:30, Resume :""},
            {nom :"Salaryman" , auteur:"Kintarō Hiroshi Motomiya",Type:"Seinen", Theme:"",state:"Terminée", Nombre: 30  ,ventes:30 , Resume :""},
            {nom :"Rainbow", auteur:"George Abe et Masasumi Kakizaki    ",Type:"Seinen", Theme:"Thriller",state:"Terminée", Nombre: 22  ,ventes:30, Resume :""},
            {nom :"Shura no Mon"    , auteur:"Masatoshi Kawahara",Type:"Shonen", Theme:"", state:"Terminée", Nombre: 31 ,ventes:30 , Resume :""},
            {nom :"Urusei Yatsura", auteur:"Rumiko Takahashi    ",Type:"Shonen", Theme:"", state:"Terminée", Nombre: 34 ,ventes:30 , Resume :""},
            {nom :"Kuroko's Basket" , auteur:"Tadatoshi Fujimaki",Type:"Shonen", Theme:"Sport", state:"Terminée", Nombre: 30 ,ventes:30, Resume :""},
            {nom :"Ushio and Tora", auteur:"Kazuhiro Fujita",Type:"Shonen", Theme:"", state:"Terminée", Nombre: 33  ,ventes:30, Resume :""},
            {nom :"Hayate Densetsu Tokkō no Taku", auteur :"Hiroto Saki et Jūzō Tokoro", Type:"Shonen", Theme:"", state:"Terminée", Nombre:27, ventes:29, Resume:""},
            {nom :"Hayate Densetsu Tokkō no Taku", auteur :"Hiroto Saki et Jūzō Tokoro", Type:"Shonen", Theme:"", state:"Terminée", Nombre:27, ventes:29, Resume:""},
            {nom :"Seven Deadly Sins", auteur :"    Nakaba Suzuki", Type:"Shonen", Theme:"Aventure, Fantastique", state:"en Cours", Nombre:32, ventes:29, Resume:""},
            {nom :"Tokimeki Tonight", auteur :"Koi Ikeno", Type:"Shojo", Theme:"", state:"Terminée", Nombre:30, ventes:28, Resume:""},
            {nom :"Worst", auteur :"Hiroshi Takahashi", Type:"Shonen", Theme:"", state:"Terminée", Nombre:31, ventes:28, Resume:""},
            {nom :"Itazura na Kiss", auteur :"Kaoru Tada", Type:"Shojo", Theme:"", state:"Terminée", Nombre:23  ,ventes:27, Resume:""},
            {nom :"Yūkan Club", auteur :"Yukari Ichijo", Type:"Shojo", Theme:"", state:"Terminée", Nombre:19,ventes:27, Resume:""},
            {nom :"Asari-chan", auteur :"Mayumi Muroyama", Type:"Shojo", Theme:"", state:"Terminée", Nombre:100, ventes:26.5, Resume:""},
            {nom :"Reborn!", auteur :"Akira Amano", Type:"Shonen", Theme:"", state:"Terminée", Nombre:42, ventes:26.5, Resume:""},
            {nom :"Baribari Legend", auteur :"Shuichi Shigeno", Type:"Shonen", Theme:"", state:"Terminée", Nombre:38, ventes:26, Resume:""},
            {nom :"Futari Ecchi", auteur :"Katsu Aki", Type:"Seinen", Theme:"", state:"En cours", Nombre:64, ventes:26, Resume:""},
            {nom :"Sakigake!! Otokojuku", auteur :"Akira Miyashita", Type:"Shonen", Theme:"", state:"Terminée", Nombre:34, ventes:26, Resume:""},
            {nom :"Shaman King", auteur :"Hiroyuki Takei", Type:"Shonen", Theme:"Aventure, Fantastique", state:"Terminée", Nombre:32, ventes:26, Resume:""},
            {nom :"Angel Heart  ", auteur :"Tsukasa Hojo", Type:"Seinen", Theme:"", state:"Terminée", Nombre:49, ventes:25, Resume:""},
            {nom :"Boys Be...", auteur :"Masahiro Itabashi et Hiroyuki Tamakoshi", Type:"Shonen", Theme:"", state:"Terminée", Nombre:32, ventes:25, Resume:""},
            {nom :"Hikaru no go", auteur :"Yumi Hotta et Takeshi Obata", Type:"Shonen", Theme:"", state:"Terminée", Nombre:23, ventes:25 , Resume:""},
            {nom :"Maison Ikkoku", auteur :"Rumiko Takahashi", Type:"Seinen", Theme:"", state:"Terminée", Nombre:15, ventes:25, Resume:""},
            {nom :"Miyuki", auteur :"Mitsuru Adachi", Type:"Shonen", Theme:"", state:"Terminée", Nombre:12, ventes:25, Resume:""},
            {nom :"Seito Shokun!", auteur :"Yoko Shoji", Type:"Shojo", Theme:"", state:"Terminée", Nombre:65, ventes:25, Resume:""},
            {nom :"Tsuribaka Nisshi", auteur :"Jūzō Yamasaki et Kenichi Kitami", Type:"Seinen", Theme:"", state:"En cours", Nombre:91, ventes:  25, Resume:""},
            {nom :"Ace of Diamond", auteur :"Yuji Terajima", Type:"Shonen", Theme:"", state:"En cours", Nombre:46, ventes:23, Resume:""},
            {nom :"Haikyū!!", auteur :"Haruichi Furudate", Type:"Shonen", Theme:"Sport", state :"En cours", Nombre:24, ventes:23, Resume:""},
            {nom :"Neon Genesis Evangelion  ", auteur :"Yoshiyuki Sadamoto", Type:"Shonen", Theme:"Science-fiction", state:"Terminée", Nombre:14, ventes:23, Resume:""},
            {nom :"D.Gray-man", auteur :"Katsura Hoshino", Type:"Shonen", Theme:"Aventure, Fantastique", state:"En cours", Nombre:25, ventes:22.5, Resume:""},
            {nom :"Abu-san", auteur :"Shinji Mizushima", Type:"Seinen", Theme:"", state:"Terminée", Nombre:107, ventes:22, Resume:""},
            {nom :"Black Butler", auteur :"Yana Toboso", Type:"Shonen", Theme:"Aventure, Fantastique", state:"En cours", Nombre:24, ventes:22, Resume:""},
            {nom :"Patalliro!", auteur :"Mineo Maya", Type:"Shojo", Theme:"", state:"En cours", Nombre:94, ventes:22, Resume:""},
            {nom :"Zatch Bell!", auteur :"Makoto Raiku", Type:"Shonen", Theme:"", state:"Terminée", Nombre:33, ventes:22, Resume:""},
            {nom :"Dōbutsu no Oisha-san", auteur :"Noriko Sasaki", Type:"Shonen", Theme:"", state:"Terminée", Nombre:12, ventes:21.6, Resume:""},
            {nom :"Eyeshield 21", auteur :"Riichiro Inagaki et Yusuke Murata", Type:"Shonen", Theme:"Sport", state:"Terminée", Nombre:37, ventes:21.6, Resume:""},
            {nom :"Ashita no Joe", auteur :"Ikki Kajiwara et Tetsuya Chiba", Type:"Shonen", Theme:"Sport", state:"Terminée", Nombre:20, ventes:20, Resume:""},
            {nom :"Assassination Classroom", auteur :"  Yūsei Matsui", Type:"Shonen", Theme:"Science-fiction", state:"Terminée", Nombre:21, ventes:20, Resume:""},
            {nom :"Gantz", auteur :"Hiroya Oku", Type:"Seinen", Theme:"", state:"Terminée", Nombre:37, ventes:20, Resume:""},
            {nom :"Ginga Densetsu Weed", auteur :"Yoshihiro Takahashi", Type:"Seinen", Theme:"", state:"En cours", Nombre:90, ventes:20, Resume:""},
            {nom :"Jigoku Sensei Nūbē", auteur :"Shō Makura et Takeshi Okano", Type:"Shonen", Theme:"", state:"Terminée", Nombre:31, ventes:20, Resume:""},
            {nom :"Kaiji", auteur :"Nobuyuki Fukumoto", Type:"Seinen", Theme:"", state:"Terminée", Nombre:49, ventes:20, Resume:""},
            {nom :"Kimagure Orange Road", auteur :"Izumi Matsumoto", Type:"Shonen", Theme:"", state:"Terminée", Nombre:18, ventes:20, Resume:""},
            {nom :"Sawako", auteur :"Karuho Shiina", Type:"Shojo", Theme:"", state:"En cours", Nombre:23, ventes:20, Resume:""},
            {nom :"Magi", auteur :"Shinobu Ohtaka", Type:"Shonen", Theme:"Aventure, Fantastique", state:"Terminée", Nombre:33, ventes:20, Resume:""},
            {nom :"Monster  ", auteur :"Naoki Urasawa", Type:"Seinen", Theme:"Thriller", state:"Terminée", Nombre:18, ventes:20, Resume:""},
            {nom :"Negima ! Le maître magicien", auteur :"Ken Akamatsu", Type:"Shonen", Theme:"", state:"Terminée", Nombre:38, ventes:20, Resume:""},
            {nom :"Ah! My Goddess!  ", auteur :"Kōsuke Fujishima", Type:"Seinen", Theme:"", state:"Terminée", Nombre:48, ventes:20, Resume:""},
            {nom :"La Rose de Versailles", auteur :"Riyoko Ikeda", Type:"Shojo", Theme:"Romance", state:"Terminée", Nombre:10, ventes:20, Resume:""},
            {nom :"Sukeban Deka", auteur :"Shinji Wada", Type:"Shojo", Theme:"", state:"Terminée", Nombre:22, ventes:20, Resume:""},
            {nom :"Tokyo Daigaku Monogatari", auteur :"Tatsuya Egawa", Type:"Seinen", Theme:"", state:"Terminée", Nombre:34, ventes:20, Resume:""},
            {nom :"Toriko", auteur :"Mitsutoshi Shimabukuro", Type:"Shonen", Theme:"Aventure, Fantastique", state:"Terminée", Nombre:43, ventes:20, Resume:""},
            {nom :"Tsubasa: Reservoir Chronicle", auteur :"Clamp", Type:"Shonen", Theme:"Sport", state:"Terminée", Nombre:28, ventes:20, Resume:""},
            ];

      //nettoyage du main, supprime les fils
function clearMain() {
    main.innerHTML = '';
}

//display manga
function display(e){    
    const info = document.createElement('div');
    info.classList.add('info');

    const nom = document.createElement('h3');
    nom.value=nom.innerHTML= e.nom;

    const auteur = document.createElement('h2');
    auteur.value=auteur.innerHTML="Auteur : " + e.auteur;

    const Type=document.createElement('p');
    Type.value=Type.innerHTML= "Type : " + e.Type;

    const Theme=document.createElement('p');
    Theme.value=Theme.innerHTML="Thème : " + e.Theme;

    const state=document.createElement('p');
    state.value=state.innerHTML="Publication : " +e.state;

    const Nombre= document.createElement('p')
    Nombre.value=Nombre.innerHTML="Nombre de volumes : "+e.Nombre;

    const ventes=document.createElement('p')
    ventes.value=ventes.innerHTML="Ventes : " +e.ventes + " Millions";

    const Resume = document.createElement('a')
    Resume.href=Resume.innerHTML= e.Resume;
    Resume.value=Resume.innerHTML="Voir plus"

    const img = document.createElement('img');
    img.src = `${e.Type}.jpg`;
    
    info.appendChild(img);
    info.appendChild(nom);
    info.appendChild(auteur);
    info.appendChild(Type);
    info.appendChild(Theme);
    info.appendChild(state);
    info.appendChild(Nombre);
    info.appendChild(ventes);
    info.appendChild(Resume);

    main.appendChild(info);
} 

// display apres liste filtree
function displayList(e){
    e.forEach(i => display(i));
}

// initialise les options de selections des manga
function initialise(e){
    const opt = document.createElement('option');
    opt.value = opt.innerHTML = e.nom;
    display(e);
}

//filter manga
function filteredManga(){
    var mang;
    var Ty = document.querySelector('input[name="type"]:checked');
    if (Ty ==null){
        valTy="";
    }
    else {
        valTy=Ty.value;
    }
    var The =document.querySelector('input[name="Theme"]:checked');
    if (The ==null){
        valThe="";
    }
    else {
        valThe=The.value;
    }
    var St=document.querySelector('input[name="state"]:checked');
    if (St ==null){
        valSt="";
    }
    else {
        valSt=St.value;
    }
    console.log(valTy)
    var ve=document.querySelector('input[name="ventes"]').value;;
    var vo=document.querySelector('input[name="volumes"]').value;;
    mang= manga.filter(i => ((i.Type.includes(valTy))&&(i.Theme.includes(valThe))&&(i.state.includes(valSt))&&(Number(i.ventes) >= ve)&&(Number(i.Nombre.toString())<=vo)));
    clearMain();
    displayList(mang);
}


const main = document.querySelector('main');
const inputs = document.querySelectorAll('input');
//initialise
manga.forEach(mang => initialise(mang));
inputs.forEach(input => input.addEventListener('change', filteredManga));
