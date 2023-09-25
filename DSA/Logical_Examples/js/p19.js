/* 
    1
    2 2
    3 3 3
    4 4 4 4

 */



    // number pattren

    let n = 5;
    let str = "";

    for(let i=1;i <= n; i++) {
        for(let j=0; j < i; j++) {
            str += `${i}`; 
        }
        str += "<br>";
    }
    document.getElementById("res").innerHTML = str;


     /*
        1
        2 3
        4 5 6
        7 8 9 10
        11 12 13 14 15
     */

        let count = 1;
        let str1 = "";

        for(let i=1; i <= n; i++) {
            for(let j=1; j<=i; j++) {
                str1 += `${count}&nbsp;`;
                count++;
            }
            str1 += `<br>`
        }

        document.getElementById("res1").innerHTML = str1;

        /* 
                        1
                    1       2
                1       2       3    
            1       2       3       4
        1       2       3       4       5
         
        */

        let str2 = '';

        for(let i=1; i<=n; i++) {
            for(let j=1; j<= n-i; j++) {
                str2 += "&nbsp;&nbsp;";
            }

            // extra spaces
            for(let k=1; k<= i; k++) {
                str2 += "&nbsp;&nbsp;" + k;
            }

            // str2 += '\n'; 
            str2+= `<br>`;

            // 
        }

        document.getElementById("res2").innerHTML = str2;
         // console.log(str2);

         /*
                            1
                        2       2
                    3       3       3
                4       4       4       4
            5       5       5       5       5

            
         */


           
            let str3 = "";
        
            for(let i=1;i <= n; i++) {
                for(let j=0; j <= n-i; j++) {
                    str3 += "&nbsp;&nbsp;"; 
                }

                for(let k=1; k<= i; k++) {
                    str3 += "&nbsp;&nbsp;" + i;
                }

                str3 += "<br>";
            }
            document.getElementById("res3").innerHTML = str3;


            /* print count value

                                1
                            2       3
                        4       5       6
                    7       8       9       10
                11      12      13      14      15

            */




