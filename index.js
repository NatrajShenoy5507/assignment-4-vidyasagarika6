


var ratingData;
class vidya {

    ratingData = [
        { restaurant: 'KFC', rating: 5 },
        { restaurant: 'Burger King', rating: 4 },
        { restaurant: 'KFC', rating: 3 },
        { restaurant: 'Domino', rating: 2 },
        { restaurant: 'Subway', rating: 3 },
        { restaurant: 'Domino', rating: 1 },
        { restaurant: 'Subway', rating: 4 },
        { restaurant: 'Pizza Hut', rating: 5 }
    ];
    
    avg = function () {
        let store = 0;
        let final;
        let count = 0;
        let store1 = 0;
        let final1;
        let count1 = 0;
        let store2 = 0;
        let final2;
        let count2 = 0;
        let store3 = 0;
        let final3;
        let count3 = 0;
        let store4 = 0;
        let final4;
        let count4 = 0;

        for (let x in this.ratingData) {
            

            //console.log(this.ratingData[x].restaurant);
            // document.getElementById("abc").innerHTML=count;
            //console.log(this.ratingData[x].rating);

            if (this.ratingData[x].restaurant == "KFC") {
                store = store + this.ratingData[x].rating;
                count++;
                
            }


            if (this.ratingData[x].restaurant == "Burger King") {
                store4 = store4 + this.ratingData[x].rating;
                count4++;
            }
            if (this.ratingData[x].restaurant == "Domino") {
                store1 = store1 + this.ratingData[x].rating;
                count1++;
            }
            if (this.ratingData[x].restaurant == "Subway") {
                store2 = store2 + this.ratingData[x].rating;
                count2++;
            }
            if (this.ratingData[x].restaurant == "Pizza Hut") {
                store3 = store3 + this.ratingData[x].rating;
                count3++;
            }
            



        }
        final = store / count;
        final1 = store1 / count1;
        final2 = store2 / count2;
        final3 = store3 / count3;
        final4 = store4 / count4;

        /*let aa = [];
        aa.push(final);
        aa.push(final1);
        aa.push(final2);
        aa.push(final3);
        aa.push(final4);
        for (let i in aa) {
            if (aa[i] >= 4) {
                console.log("rest="+aa[i]);
            }
        }*/
        //this.final||this.final1||this.final2||this.final3||this.final4

        if (final3 > 4) {
            console.log("Pizza Hut");
        }
        if (final > 4) {
            console.log("KFC");
        }
        if (final1 > 4) {
            console.log("Domino");
        }
        if (final2 > 4) {
            console.log("Subway");
        }
        if (final4 > 4) {
            console.log("Burger King");
        }


        console.log("total rating for KFC =", store);
        console.log("avrage rating of KFC=", final);
        final = store / count;
        console.log("total rating for  Burger King=", store4);
        console.log("avrage rating of Burger King=", final4);
        final = store / count;
        console.log("total rating for Domino=", store1);
        console.log("avrage rating of Domino=", final1);
        final = store / count;
        console.log("total rating for Subway =", store2);
        console.log("avrage rating of Subway=", final2);
        final = store / count;
        console.log("total rating for Pizza Hut =", store3);
        console.log("avrage rating of Pizza Hut=", final3);
    }
}


var obj = new vidya();
obj.avg();
