const question = [
    {
        text : "Tatile Çıkmak İster misiniz ? ",
        options : [
            {id:0,text:"evet",isCorrect : false , puan : 10},
            {id:1,text:"hayir",isCorrect : true , puan : 0}
        ]
    },
    {
        text : "Senede KAç Gün Tatil Yaparsınız",
        options : [
            {id:0,text:"2 hafta",isCorrect : false , puan : 5},
            {id:1,text:"4 hafta",isCorrect : false , puan : 10},
            {id:2,text:"4 hafta'dan Fazla",isCorrect : false , puan : 20}
        ]
    },
    {
        text : "Yurtdışı Tatili Düşünür müsünüz? ",
        options : [
            {id:0,text:"evet",isCorrect : true , puan : 10},
            {id:1,text:"hayir",isCorrect : false , puan : 0},
            {id:2,text:"belki",isCorrect : true , puan : 5}
        ]
    },
    {
        text : "Karavan Tatili Düşünür müsünüz? ",
        options : [
            {id:0,text:"evet",isCorrect : true , puan : 10},
            {id:1,text:"hayir",isCorrect : false , puan : 0},
            {id:2,text:"belki",isCorrect : true , puan : 5}
        ]
    },

    {
        text : "Tatil Deyince Aklınıza İlk Ne Gelir ? ",
        options : [
            {id:0,text:"Deniz , Kum , Güneş",isCorrect : true , puan : 10},
            {id:1,text:"Müze",isCorrect : true , puan :10},
            {id:2,text:"Şehir",isCorrect : true , puan :10}
        ]
    },
    {
        text : "Tatil Deyince Aklınıza Bilmediğiniz Bir Şehir'de KAybolmak Gelir mi ? ",
        options : [
            {id:0,text:"Gelir",isCorrect : true , puan : 10},
            {id:1,text:"Gelmez",isCorrect : false , puan :0},
            {id:2,text:"Belki",isCorrect : true , puan :5}
        ]
    },
    {
        text : "Tatile NAsıl Gitmek İstersiniz ? ",
        options : [
            {id:0,text:"Araba",isCorrect : true , puan : 10},
            {id:1,text:"Uçak",isCorrect : false , puan :0},
            {id:2,text:"Tren",isCorrect : true , puan :20}
        ]
    },
]


export default question;