console.log("***************String Method*******************");
const str = "This is for Practice Purpose";
        console.log(str);

        // String length
        console.log(str.length);

        // String charAt()
        console.log("charAt(1):", str.charAt(1));

        // String charCodeAt()
        console.log("charCodeAt(9):",str.charCodeAt(9));

        // String at()
        console.log("at(6):",str.at(6));

        // String [ ]
        console.log("str[1]:",str[1]);

        // String slice()
        console.log("slice(0, 8):", str.slice(0, 8));

        // String substring()
        console.log("substring(6, 10):", str.substring(6, 10));

        // String toUpperCase()
        console.log("toUpperCase():", str.toUpperCase());

        // String toLowerCase()
        console.log("toLowerCase():", str.toLowerCase());

        // String concat()
        const str1 = "   Javascript";
        console.log("concat():", str.concat(str1));

        // String trim()
        console.log("trim():", str.trim());
        document.getElementById("test").innerHTML = "Length str = " + str.length + "<br>Length str1 = " + str1.length;
        
        // String trimStart()
        let str2 = "     hello            ";
        console.log("trimStart():",str1.trimStart());
        document.getElementById("test1").innerHTML = "Length str = " + str.length + "<br>Length str2 = " + str2.length;


        // String trimEnd()
        console.log("trimEnd():",str1.trimEnd());
        document.getElementById("test2").innerHTML ="Length str = " + str.length + "<br>Length str1 = " + str1.length;

        // String padStart()
        console.log("padStart(4,'0'):", str.padStart(4, '0'));

        // String padEnd()
        console.log("padEnd(2, '5'):",str.padEnd(2, '5'));

        // String repeat()
        console.log("repeat(3):", str.repeat(3));

        // String replace()
        console.log("replace('for', 'JavaScript'):", str.replace('for', 'JavaScript'));

        // String replaceAll()
        console.log("replaceAll('for', 'JavaScript'):", str.replaceAll('for', 'JavaScript'));

        // String split()
        console.log("split(', '):", str.split(', '));
